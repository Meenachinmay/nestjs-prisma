import { Controller, Get, Post } from '@nestjs/common';
import { AppService, Feedback, User } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getUser(): Promise<User | string> {
    return this.appService.getUser();
  }

  @Post('create-user')
  async createUser(): Promise<User | string> {
    const createdUser = await this.appService.createUser();
    return createdUser;
  }

  // @Post('create-feedback')
  // async createFeedback(): Promise<Feedback | string> {
  //   const createdFeedback = await this.appService.createFeedback();
  //   return createdFeedback;
  // }
}
