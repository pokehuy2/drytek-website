/*
  Warnings:

  - You are about to drop the `UseGuide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `UseGuide` DROP FOREIGN KEY `UseGuide_productDocumentId_fkey`;

-- DropForeignKey
ALTER TABLE `UseGuide` DROP FOREIGN KEY `UseGuide_useGuideDocumentId_fkey`;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `useGuideVideoLink` TEXT NULL,
    ADD COLUMN `useGuideVideoTitle` TEXT NULL;

-- DropTable
DROP TABLE `UseGuide`;

-- CreateTable
CREATE TABLE `_ProductToUseGuideDocument` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProductToUseGuideDocument_AB_unique`(`A`, `B`),
    INDEX `_ProductToUseGuideDocument_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductToUseGuideDocument` ADD CONSTRAINT `_ProductToUseGuideDocument_A_fkey` FOREIGN KEY (`A`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductToUseGuideDocument` ADD CONSTRAINT `_ProductToUseGuideDocument_B_fkey` FOREIGN KEY (`B`) REFERENCES `UseGuideDocument`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
