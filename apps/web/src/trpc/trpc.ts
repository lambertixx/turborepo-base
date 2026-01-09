import { createTRPCReact } from "@trpc/react-query"
import type { AppRouter } from "@mentoragg/trpc"

export const trpc = createTRPCReact<AppRouter>()
