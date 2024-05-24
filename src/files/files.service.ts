import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from './file.schema';

@Injectable()
export class FilesService {
  constructor(@InjectModel(File.name) private fileModel: Model<File>) {}

  async create(file): Promise<File> {
    const createdFile = new this.fileModel({
      filename: file.originalname,
      contentType: file.mimetype,
      size: file.size,
    });
    return createdFile.save();
  }
}
