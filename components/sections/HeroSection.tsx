import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Plus } from "lucide-react"
import { Tool } from "@/types"

interface HeroSectionProps {
  tools: Tool[]
}

export default function HeroSection({ tools }: HeroSectionProps) {
  return (
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
            <span className="block">Auth Developer</span>
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
            {tools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <Card
                  key={tool.id}
                  className="group relative overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative pb-4 flex-shrink-0">
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

                  <CardContent className="relative pt-0 mt-auto">
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
            
            {/* More coming soon card */}
            <Card className="group relative overflow-hidden border-slate-800 bg-slate-900/30 backdrop-blur-sm border-dashed flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardHeader className="relative pb-4 flex-shrink-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                      <Plus className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors">
                        More Coming Soon
                      </CardTitle>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-3 text-slate-500 leading-relaxed">
                  We're constantly adding new authentication tools. Stay tuned for more developer resources.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative pt-0 mt-auto">
                <Button
                  variant="outline"
                  className="w-full border-slate-700 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-200 cursor-default"
                  disabled
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
