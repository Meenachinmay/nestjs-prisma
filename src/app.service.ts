import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

export type User = {
  name: string;
  email: string;
};

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<User | string> {
    const res = await this.prisma.user.findFirst({
      where: {
        name: 'Chinmay anand',
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

    return createdUser;
  }
}
