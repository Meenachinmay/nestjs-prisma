/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ERROR } from './interfaces/error.interface';
import { Feedback } from './interfaces/feedback.interface';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}
 
  async createFeedback(): Promise<Feedback | ERROR> {
        const new_ = await this.prisma.feedback.create({
        data: {
            title: "Hello world feedback",
            description: "Hello this is a testing feedback",
            rating: 4,
            images: [ { url: "http://photo.com/image", comment: "hello testing picture."}, { url: "http://photo.com/image", comment: "hello testing picture."}],
            userId: 1
        }
    })
    return new_
  }

    async getFeedback(): Promise<Feedback | ERROR> {
    const new_ = this.prisma.feedback.findFirst({ where: { id: 12 }}) 
    return new_
  }
}
