'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

interface GoogleTagManagerProps {
  gtmId: string
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    
    // Initialize gtag function
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }
    
    // Set initial timestamp
    window.gtag('js', new Date())
    window.gtag('config', gtmId)
    
    // Load GTM script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
    document.head.appendChild(script)
    
    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector(`script[src*="googletagmanager.com"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [gtmId])

  return null
}
