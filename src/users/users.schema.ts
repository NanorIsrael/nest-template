import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true, dropDupes: true })
  username: string;

  @Prop({ required: true })
  password: string;
}
