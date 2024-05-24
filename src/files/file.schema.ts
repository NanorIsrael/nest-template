import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class File extends Document {
  @Prop({ required: true })
  filename: string;

  @Prop()
  contentType: string;

  @Prop()
  size: number;

  @Prop({ default: Date.now })
  uploadDate: Date;
}

export const FileSchema = SchemaFactory.createForClass(File);
