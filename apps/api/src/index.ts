import "dotenv/config"
import Fastify from "fastify"
import cors from "@fastify/cors"
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import { appRouter } from "@mentoragg/trpc"
import { createContext } from "./contex"
import { healthRoutes } from "./routes/health"

async function main() {
  const server = Fastify({
    logger: true,
    maxParamLength: 5000,
  })

  await server.register(healthRoutes)

  await server.register(cors, {
    origin: process.env.CORS_ORIGIN?.split(",") ?? true,
    credentials: true,
  })

  server.get("/health", async () => ({ ok: true }))

  await server.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext },
  })

  const port = Number(process.env.PORT ?? 4000)
  await server.listen({ port, host: "0.0.0.0" })
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})
