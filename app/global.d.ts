import type { PrismaClient } from '@prisma/client';

export {};

declare global {
  var __db: PrismaClient;
}
