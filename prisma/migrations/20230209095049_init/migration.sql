-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "images" TEXT[],
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0;
