import type { FastifyInstance } from "fastify"

export async function healthRoutes(server: FastifyInstance) {
  server.get("/healthz", async () => ({ ok: true }))
}
