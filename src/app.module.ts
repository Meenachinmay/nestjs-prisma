import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { FeedbackModule } from './feedback/feedback.module';
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackController } from './feedback/feedback.controller';

@Module({
  imports: [FeedbackModule],
  controllers: [AppController, FeedbackController],
  providers: [AppService, PrismaService, FeedbackService],
})
export class AppModule {}
