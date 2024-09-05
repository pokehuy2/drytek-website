/*
  Warnings:

  - You are about to drop the `_ProductToUseGuideDocument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProductToUseGuideDocument` DROP FOREIGN KEY `_ProductToUseGuideDocument_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductToUseGuideDocument` DROP FOREIGN KEY `_ProductToUseGuideDocument_B_fkey`;

-- AlterTable
ALTER TABLE `UseGuideDocument` ADD COLUMN `productId` INTEGER NULL;

-- DropTable
DROP TABLE `_ProductToUseGuideDocument`;

-- AddForeignKey
ALTER TABLE `UseGuideDocument` ADD CONSTRAINT `UseGuideDocument_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
