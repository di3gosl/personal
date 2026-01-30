/*
  Warnings:

  - You are about to drop the column `isPreview` on the `Tag` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Tag_isPreview_idx";

-- AlterTable
ALTER TABLE "ProjectTag" ADD COLUMN     "isPreview" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "isPreview";

-- CreateIndex
CREATE INDEX "ProjectTag_isPreview_idx" ON "ProjectTag"("isPreview");
