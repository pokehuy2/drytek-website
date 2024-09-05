/*
  Warnings:

  - Added the required column `title` to the `ProductAdvantage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ProductAdvantage` ADD COLUMN `title` VARCHAR(255) NOT NULL;
