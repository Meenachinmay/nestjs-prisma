import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FeedbackService } from './feedback.service';

@Module({
  providers: [FeedbackService, PrismaService],
})
export class FeedbackModule {}
