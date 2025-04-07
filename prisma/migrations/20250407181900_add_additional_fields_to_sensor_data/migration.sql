/*
  Warnings:

  - Added the required column `measurementType` to the `SensorData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `SensorData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SensorData" ADD COLUMN     "measurementType" TEXT NOT NULL,
ADD COLUMN     "quality" DOUBLE PRECISION,
ADD COLUMN     "rawData" JSONB,
ADD COLUMN     "unit" TEXT NOT NULL;
