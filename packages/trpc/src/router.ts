import { z } from "zod"
import { router, publicProcedure, protectedProcedure } from "./trpc"

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      const name = input?.name ?? "mundo"
      return { message: `oi, ${name}!` }
    }),

  me: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.auth.userId!

    const user = await ctx.db.user.upsert({
      where: { id: userId },
      update: {},
      create: { id: userId },
    })

    return { user }
  }),
})

export type AppRouter = typeof appRouter
