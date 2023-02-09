import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

export type User = {
  name: string;
  email: string;
};

export type Feedback = {
  title: string;
  description: string;
  userId: number;
};

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getUser(): Promise<User | string> {
    const res = await this.prisma.user.findFirst({
      where: {
        name: 'Chinmay',
      },
      include: {
        feedbacks: true,
      },
    });

    if (!res) return 'data not found.';
    return res;
  }

  async createUser(): Promise<User | string> {
    const createdUser = await this.prisma.user.create({
      data: {
        name: 'Chinmay',
        email: 'chinmayanand896@hotmail.com',
      },
    });

    if (!createdUser) return 'Data not created';

    return createdUser;
  }

  // async createFeedback(): Promise<Feedback | string> {
  //   const createdFeedback = await this.prisma.feedback.create({
  //     data: {
  //       title: 'Chinmay feedback',
  //       description: 'Hello A feedback from Chinmay',
  //       userId: 1,
  //     },
  //   });

  //   return createdFeedback;
  // }
}
