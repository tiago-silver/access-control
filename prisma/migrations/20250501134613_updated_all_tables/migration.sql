/*
  Warnings:

  - You are about to drop the column `date` on the `registers` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "observations_user_id_key";

-- AlterTable
ALTER TABLE "registers" DROP COLUMN "date",
ALTER COLUMN "entry" SET DEFAULT CURRENT_TIMESTAMP;
