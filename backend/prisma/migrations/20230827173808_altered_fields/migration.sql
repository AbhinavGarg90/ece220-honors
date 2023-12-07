/*
  Warnings:

  - Made the column `pageId` on table `Component` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ownerId` on table `Component` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_pageId_fkey";

-- AlterTable
ALTER TABLE "Component" ALTER COLUMN "pageId" SET NOT NULL,
ALTER COLUMN "text" DROP NOT NULL,
ALTER COLUMN "ownerId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
