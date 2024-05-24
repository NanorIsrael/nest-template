import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  counter: number;
  constructor(private readonly appService: AppService) {
    this.counter = 0;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/counter')
  getCounter(@Req() req, @Res() res): string {
    // console.log(req.body);
    // console.log(res.data);
    return res.send('' + this.counter++);
  }
}
