/*
  Warnings:

  - Added the required column `treatments` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vaccinationHistory` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animal" ADD COLUMN     "treatments" TEXT NOT NULL,
ADD COLUMN     "vaccinationHistory" TEXT NOT NULL;
