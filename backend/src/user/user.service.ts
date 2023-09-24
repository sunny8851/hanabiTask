import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
  ) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
  async findAndUpdate(email: string, user: Partial<User>): Promise<User> {
    const existingUser = await this.userModel.findOneAndUpdate(
      { email },
      user,
      { new: true },
    );

    if (!existingUser) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return existingUser;
  }

  async findByEmail(email: string): Promise<User | null> {
    const existingUser = await this.userModel.findOne({ email }).exec();
    if (!existingUser) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return existingUser;
  }
}
