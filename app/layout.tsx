import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import GoogleTagManager from "@/components/GoogleTagManager"
import GoogleTagManagerNoScript from "@/components/GoogleTagManagerNoScript"
import DebugGTM from "@/components/DebugGTM"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://authgear.github.io/auth-toolkit'),
  title: "Auth Developer Mini-Toolkit - Authgear Tools",
  description: "In-browser JWT/JWE, JWK/JWKS, HMAC, SAML, and TOTP tools for developers. Free and open-source.",
  openGraph: {
    title: "Auth Developer Mini-Toolkit - Authgear Tools",
    description: "In-browser JWT/JWE, JWK/JWKS, HMAC, SAML, and TOTP tools for developers. Free and open-source.",
    images: [
      {
        url: '/auth-toolkit/og_image.png',
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
    images: ['/auth-toolkit/og_image.png'],
  },
  icons: {
    icon: [
      {
        url: '/auth-toolkit/favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/auth-toolkit/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="ds2pJuSFhsV5IA72L8SJHccY7tIanGhBjHVjrCVOZyQ" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/auth-toolkit/sitemap.xml" />
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Auth Developer Mini-Toolkit",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "SoftwareApplication",
                    "name": "JWT & JWE Debugger",
                    "applicationCategory": "DeveloperApplication",
                    "operatingSystem": "Web",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    },
                    "url": "https://www.authgear.com/tools/jwt-jwe-debugger",
                    "description": "Decode & verify JWTs; encrypt/decrypt JWEs in-browser (open-source)."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "SoftwareApplication",
                    "name": "JWK Generator",
                    "applicationCategory": "DeveloperApplication",
                    "operatingSystem": "Web",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    },
                    "url": "https://www.authgear.com/tools/jwk-generator",
                    "description": "PEM↔JWK, JWK↔PEM, export JWKS for jwks_uri (client-side, open-source)."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "SoftwareApplication",
                    "name": "HMAC Signature Tool",
                    "applicationCategory": "DeveloperApplication",
                    "operatingSystem": "Web",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    },
                    "url": "https://www.authgear.com/tools/hmac-generator",
                    "description": "Generate & verify HMAC SHA-256/384/512 for webhooks."
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "SoftwareApplication",
                    "name": "SAML Testing Tool",
                    "applicationCategory": "DeveloperApplication",
                    "operatingSystem": "Web",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    },
                    "url": "https://samlsp.com",
                    "description": "Mock SP to test SAML assertions."
                  }
                },
                                  {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                      "@type": "SoftwareApplication",
                      "name": "TOTP Authenticator",
                      "applicationCategory": "DeveloperApplication",
                      "operatingSystem": "Web",
                      "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                      },
                      "url": "https://www.authgear.com/tools/totp-generator",
                      "description": "Generate OTP codes (RFC 6238)."
                    }
                  }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do these tools send data to a server?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Operations run locally in your browser; keys and tokens are not uploaded."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the tools open-source?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Each tool links to its source repository so you can audit the code."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are they free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, they're free and require no sign-up."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable}`} suppressHydrationWarning={true}>
        {gtmId && <GoogleTagManagerNoScript gtmId={gtmId} />}
        <DebugGTM />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
