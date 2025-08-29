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
  metadataBase: new URL('https://auth-toolkit.vercel.app'),
  title: "Auth Developer Mini-Toolkit - Authgear Tools",
  description: "In-browser JWT/JWE, JWK/JWKS, HMAC, SAML, and TOTP tools for developers. Free and open-source.",
  openGraph: {
    title: "Auth Developer Mini-Toolkit - Authgear Tools",
    description: "In-browser JWT/JWE, JWK/JWKS, HMAC, SAML, and TOTP tools for developers. Free and open-source.",
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Auth Developer Mini-Toolkit - Free and open-source authentication tools for developers',
      },
    ],
    type: 'website',
    siteName: 'Auth Developer Mini-Toolkit',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Auth Developer Mini-Toolkit - Authgear Tools",
    description: "In-browser JWT/JWE, JWK/JWKS, HMAC, SAML, and TOTP tools for developers. Free and open-source.",
    images: ['/og_image.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans ${inter.variable}`} suppressHydrationWarning={true}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
