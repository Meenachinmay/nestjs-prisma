import { Controller, Get, Post } from '@nestjs/common';
import { AppService, User } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): Promise<User | string> {
    return this.appService.getHello();
  }

  @Post('create-hello')
  async createHello(): Promise<User | string> {
    const createdUser = await this.appService.createUser();
    return createdUser;
  }
}
