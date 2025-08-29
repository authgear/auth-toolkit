import toolsData from "@/data/tools.json"
import educationalLinksData from "@/data/educational-links.json"
import footerLinksData from "@/data/footer-links.json"
import { ICON_MAP, Tool, EducationalLink } from "@/types"
import HeroSection from "@/components/sections/HeroSection"
import EducationalSection from "@/components/sections/EducationalSection"
import Footer from "@/components/sections/Footer"

// This is a Server Component - no client-side state or effects
export default function HomePage() {
  // Pre-process the tools data to ensure stable references
  const tools: Tool[] = toolsData.map((tool, index) => {
    const IconComponent = ICON_MAP[tool.icon as keyof typeof ICON_MAP]
    if (!IconComponent) {
      console.warn(`Unknown icon: ${tool.icon}`)
      return null
    }
    
    return {
      ...tool,
      id: index, // Add stable ID
      icon: IconComponent,
    }
  }).filter((tool): tool is NonNullable<typeof tool> => tool !== null) // Type-safe filter

  const educationalLinks: EducationalLink[] = educationalLinksData

  const footerLinks = footerLinksData

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <HeroSection tools={tools} />
      <EducationalSection educationalLinks={educationalLinks} />
      <Footer footerLinks={footerLinks} />
    </div>
  )
}
