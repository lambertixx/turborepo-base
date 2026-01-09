import type { PrismaClient } from "@mentoragg/db"

export type Auth = {
  userId: string | null
}

export type Context = {
  db: PrismaClient
  auth: Auth
}
