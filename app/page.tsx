import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Shield, Key, Hash, FileText, Smartphone, ArrowRight } from "lucide-react"
import toolsData from "@/data/tools.json"
import educationalLinksData from "@/data/educational-links.json"

export default function HomePage() {
  const iconMap = {
    Shield,
    Key,
    Hash,
    FileText,
    Smartphone,
  }

  const tools = toolsData.map((tool) => ({
    ...tool,
    icon: iconMap[tool.icon as keyof typeof iconMap],
  }))

  const educationalLinks = educationalLinksData

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        <div className="relative px-6 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Hero content */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-8 flex items-center justify-center gap-x-3">
              <Badge
                variant="secondary"
                className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                Free
              </Badge>
              <Badge
                variant="secondary"
                className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-colors"
              >
                Open-source
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block">Developer Auth</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Mini-Toolkit
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              In-browser JWT/JWE, JWK/JWKS, HMAC, SAML, and TOTP tools for developers. Perfect for authentication development and testing.
            </p>
          </div>

          {/* Tools grid directly below hero */}
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:gap-8">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon
                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <CardHeader className="relative pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                            <IconComponent className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {tool.title}
                            </CardTitle>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="mt-3 text-slate-400 leading-relaxed">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative pt-0">
                      <Button
                        asChild
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-200 group/button"
                      >
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Open Tool
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/button:translate-x-0.5 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Learn More</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">Want the "why" behind the tools? Start here.</p>
          </div>

          <div className="mt-16 space-y-3">
            {educationalLinks.map((link, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-200"
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                      <FileText className="h-4 w-4 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
                      {link.title}
                    </h3>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all group/button"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-xl font-semibold text-white">Authgear Tools</span>
            </div>

            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Open-source authentication tools for developers. Built with security and privacy in mind.
            </p>

            <div className="flex justify-center space-x-8">
              {[
                { name: "GitHub", href: "https://github.com/authgear" },
                { name: "Documentation", href: "https://www.authgear.com" },
                { name: "Support", href: "https://www.authgear.com/contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
