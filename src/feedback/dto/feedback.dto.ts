import {
    IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(12)
  @MaxLength(50)
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  @IsNotEmpty()
  rating: number;
}
