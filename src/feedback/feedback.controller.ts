/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from "@nestjs/common";
import { FeedbackService } from "./feedback.service";
import { ERROR } from "./interfaces/error.interface";
import { Feedback } from "./interfaces/feedback.interface";

@Controller('/feedback')
export class FeedbackController {
constructor(private readonly feedbackService: FeedbackService) {}

@Post('create-feedback')
  async createFeedback(): Promise<Feedback | ERROR> {
    const createdFeedback = await this.feedbackService.createFeedback();
    return createdFeedback
  }

@Get('get-feedback')
  async getFeedback(): Promise<Feedback | ERROR> {
    const feedback = await this.feedbackService.getFeedback();
    return feedback
  }
}