/*
  Warnings:

  - Changed the type of `tel` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "tel",
ADD COLUMN     "tel" INTEGER NOT NULL;
