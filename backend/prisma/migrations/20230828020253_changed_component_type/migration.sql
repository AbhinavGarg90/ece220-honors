/*
  Warnings:

  - Changed the type of `type` on the `Component` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('ROOT', 'PARAGRAPH', 'LIST');

-- AlterTable
ALTER TABLE "Component" DROP COLUMN "type",
ADD COLUMN     "type" "ComponentType" NOT NULL;
