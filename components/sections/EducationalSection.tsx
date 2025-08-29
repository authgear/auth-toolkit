import { FileText, ArrowRight } from "lucide-react"
import { EducationalLink } from "@/types"

interface EducationalSectionProps {
  educationalLinks: EducationalLink[]
}

export default function EducationalSection({ educationalLinks }: EducationalSectionProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Learn More</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">Want the "why" behind the tools? Start here.</p>
        </div>

        <div className="mt-16 space-y-3">
          {educationalLinks.map((link, index) => (
            <a
              key={`${link.title}-${index}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-200 block"
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

                <div className="flex items-center text-slate-400 group-hover:text-emerald-400 transition-all">
                  <span className="text-sm font-medium mr-2">Read Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
