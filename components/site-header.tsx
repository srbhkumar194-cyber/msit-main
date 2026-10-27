'use client'

import { usePathname } from 'next/navigation'
import { navLinks, site } from '@/lib/site'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-logo">
            <img src="/images/logo.png" alt={`${site.name} logo`} width={713} height={220} />
          </span>
        </a>
        <nav className="site-nav md-typescale-label-large" aria-label="Main">
          {navLinks.map((link) => {
            const isCurrent = link.href === pathname
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={isCurrent ? 'nav-link-active' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
        <div className="header-actions">
          <md-icon-button
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            class="header-call-icon"
          >
            <md-icon>call</md-icon>
          </md-icon-button>
          <md-filled-tonal-button href={site.phoneHref} class="header-call-button">
            <md-icon slot="icon">call</md-icon>
            {site.phoneDisplay}
          </md-filled-tonal-button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
