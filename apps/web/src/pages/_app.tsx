import type { AppProps } from "next/app"
import { ClerkProvider } from "@clerk/nextjs"
import { TRPCProvider } from "../trpc/Provider"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <TRPCProvider>
        <Component {...pageProps} />
      </TRPCProvider>
    </ClerkProvider>
  )
}
