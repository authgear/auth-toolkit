'use client'

import { Star, Github } from 'lucide-react'

export default function GitHubStarBadge() {
  return (
    <div className="fixed top-6 right-6 z-50">
      <a
        href="https://github.com/authgear/auth-toolkit"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 text-white hover:bg-slate-800/90 hover:border-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Star className="h-4 w-4 text-yellow-400 fill-current" />
        <span className="text-sm font-medium">Star on GitHub</span>
        <Github className="h-4 w-4 text-slate-300 group-hover:text-white transition-colors" />
      </a>
    </div>
  )
}
