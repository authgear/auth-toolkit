import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Auth Developer Mini-Toolkit - Authgear Tools",
  description: "In-browser JWT/JWE, JWK/JWKS, HMAC, SAML, and TOTP tools for developers. Free and open-source.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`} suppressHydrationWarning={true}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
