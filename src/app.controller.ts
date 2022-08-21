import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { mongooseConnect } from './utils/mongoose/main';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    mongooseConnect();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
