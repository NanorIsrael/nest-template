import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';

@Injectable()
@Processor('file-queue')
export class TasksService {
  @Process('processFile')
  async handleFileProcessing(job: Job) {
    const { filename } = job.data;
    console.log(`Processing file: ${filename}`);
    // Add file processing logic here
  }
}
