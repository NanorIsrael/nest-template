import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [UsersModule, FilesModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
