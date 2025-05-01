/*
  Warnings:

  - Added the required column `title` to the `observations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "observations" ADD COLUMN     "title" TEXT NOT NULL;
