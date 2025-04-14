-- CreateEnum
CREATE TYPE "TurfType" AS ENUM ('Outdoor', 'Indoor');

-- CreateTable
CREATE TABLE "Turf" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "opening_time" TEXT NOT NULL,
    "closing_time" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "turf_type" "TurfType" NOT NULL,
    "turf_price" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Turf_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Turf_email_key" ON "Turf"("email");
