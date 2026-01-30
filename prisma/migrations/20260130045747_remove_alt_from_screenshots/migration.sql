/*
  Warnings:

  - You are about to drop the column `alt` on the `Screenshot` table. All the data in the column will be lost.
  - Made the column `caption` on table `Screenshot` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Screenshot" DROP COLUMN "alt",
ALTER COLUMN "caption" SET NOT NULL;
