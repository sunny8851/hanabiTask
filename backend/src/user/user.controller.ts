import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':email') async getUsers(@Param('email') email: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    return user;
  }
  @Put(':email') async update(
    @Param('email') email: string,
    @Body() updateUserDto: Partial<User>,
  ): Promise<User> {
    return this.userService.findAndUpdate(email, updateUserDto);
  }
  @Post()
  async create(@Body() createUserDto: User): Promise<User> {
    return this.userService.create(createUserDto);
  }
}
