/*
  Warnings:

  - The primary key for the `Turf` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `Turf` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Turf` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `Turf` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Turf` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Turf` table. All the data in the column will be lost.
  - You are about to drop the column `turf_price` on the `Turf` table. All the data in the column will be lost.
  - You are about to drop the column `turf_type` on the `Turf` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[turf_email]` on the table `Turf` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mobile_number` to the `Turf` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turf_address` to the `Turf` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turf_email` to the `Turf` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turf_name` to the `Turf` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turf_password` to the `Turf` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Turf_email_key";

-- AlterTable
ALTER TABLE "Turf" DROP CONSTRAINT "Turf_pkey",
DROP COLUMN "email",
DROP COLUMN "location",
DROP COLUMN "mobile",
DROP COLUMN "name",
DROP COLUMN "password",
DROP COLUMN "turf_price",
DROP COLUMN "turf_type",
ADD COLUMN     "mobile_number" TEXT NOT NULL,
ADD COLUMN     "turf_address" TEXT NOT NULL,
ADD COLUMN     "turf_email" TEXT NOT NULL,
ADD COLUMN     "turf_name" TEXT NOT NULL,
ADD COLUMN     "turf_password" TEXT NOT NULL,
ADD COLUMN     "turf_types" "TurfType"[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Turf_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Turf_id_seq";

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "game_name" TEXT NOT NULL,
    "game_price" INTEGER NOT NULL,
    "turf_types" "TurfType"[],

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TurfGame" (
    "id" TEXT NOT NULL,
    "turfId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TurfGame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Turf_turf_email_key" ON "Turf"("turf_email");

-- AddForeignKey
ALTER TABLE "TurfGame" ADD CONSTRAINT "TurfGame_turfId_fkey" FOREIGN KEY ("turfId") REFERENCES "Turf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TurfGame" ADD CONSTRAINT "TurfGame_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
