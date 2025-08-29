interface FooterProps {
  footerLinks: Array<{ name: string; href: string }>
}

export default function Footer({ footerLinks }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <a 
              href="https://www.authgear.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            >
              <span className="text-slate-400">Powered by</span>
              <div className="h-6 w-24">
                {/* SVG logotype will be placed here */}
                <img 
                  src="/authgear-logo.svg" 
                  alt="Authgear" 
                  className="h-full w-full object-contain filter brightness-0 invert"
                />
              </div>
            </a>
          </div>

          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Open-source authentication tools for developers. Built with security and privacy in mind.
          </p>

          <div className="flex justify-center space-x-8">
            {footerLinks.map((item) => (
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
  )
}
