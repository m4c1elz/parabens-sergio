-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "from" VARCHAR(50) NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATE NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);
