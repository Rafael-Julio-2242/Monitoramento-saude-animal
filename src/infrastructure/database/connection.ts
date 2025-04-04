import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function connect(): Promise<void> {
  try {
    await prisma.$connect();
  } catch (e: any) {
    console.error("Error connecting to DB: ", e);
    process.exit(1);
  }
}

async function disconnect(): Promise<void> {
  try {
    await prisma.$disconnect();
  } catch (e: any) {
    console.error("Error disconnecting from DB: ", e);
  }
}

process.on("SIGINT", async () => {
  await disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await disconnect();
  process.exit(0);
});

export { prisma, connect, disconnect };
