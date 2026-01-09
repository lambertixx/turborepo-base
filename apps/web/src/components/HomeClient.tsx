import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { trpc } from "../trpc/trpc"

export function HomeClient() {
  const hello = trpc.hello.useQuery({ name: "mentora" })
  const me = trpc.me.useQuery(undefined, { retry: false })

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Web</h1>

      <p>tRPC hello: {hello.data?.message ?? "..."}</p>

      <SignedOut>
        <SignInButton />
        <p>
          (faça login pra bater no endpoint protegido e gravar/ler no Postgres)
        </p>
      </SignedOut>

      <SignedIn>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <UserButton afterSignOutUrl="/" />
          <button onClick={() => me.refetch()}>Refetch /me</button>
        </div>

        <pre style={{ marginTop: 16 }}>
          {JSON.stringify(me.data ?? me.error ?? "carregando...", null, 2)}
        </pre>
      </SignedIn>
    </div>
  )
}
