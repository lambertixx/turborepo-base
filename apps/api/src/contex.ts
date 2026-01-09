import type { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify"
import { verifyToken } from "@clerk/backend"
import { prisma } from "@mentoragg/db"
import type { Context } from "@mentoragg/trpc"

function getBearerToken(authHeader?: string) {
  if (!authHeader) return null
  const cleaned = authHeader.replace(/^Bearer\s+/i, "").trim()
  return cleaned.length ? cleaned : null
}

export async function createContext({
  req,
}: CreateFastifyContextOptions): Promise<Context> {
  const token = getBearerToken(req.headers.authorization)

  let userId: string | null = null

  if (token) {
    try {
      const verified = await verifyToken(token, {
        jwtKey: process.env.CLERK_JWT_KEY,
        authorizedParties: process.env.CLERK_AUTHORIZED_PARTIES?.split(","),
      })
      userId = verified.sub ?? null
    } catch {
      userId = null
    }
  }

  return {
    db: prisma,
    auth: { userId },
  }
}
