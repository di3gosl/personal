/*
  Warnings:

  - You are about to drop the column `order` on the `Tag` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Tag_order_idx";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "order";
