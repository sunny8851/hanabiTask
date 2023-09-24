import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  age: string;
  @Prop()
  fatherName: string;
  @Prop()
  location: string;
  @Prop()
  number: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
