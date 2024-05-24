import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { TasksService } from './task.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'file-queue',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  providers: [TasksService],
})
export class TaskModule {}
