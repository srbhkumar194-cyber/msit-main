import { businessDetails, site } from '@/lib/site'

const links = [
  {
    title: 'Company',
    items: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Products',
    items: [
      { label: 'Laptops & Computers', href: '/#products' },
      { label: 'Printers', href: '/#products' },
      { label: 'Apple Products', href: '/#products' },
      { label: 'Cameras & Mobiles', href: '/#products' },
      { label: 'Software', href: '/#products' },
    ],
  },
  {
    title: 'Services',
    items: [
      { label: 'Repair', href: '/#services' },
      { label: 'CCTV installation', href: '/#services' },
      { label: 'Software solutions', href: '/#services' },
      { label: 'AMC plans', href: '/#amc' },
    ],
  },
]

const gstin = businessDetails.find((detail) => detail.label === 'GSTIN/UIN')

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-logo footer-logo">
            <img src="/images/logo.png" alt={`${site.name} logo`} width={713} height={220} />
          </span>
          <p className="md-typescale-body-medium footer-text">{site.tagline}</p>
          <address className="md-typescale-body-medium footer-text footer-address">
            {site.address}
            <br />
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            {' · '}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
          {gstin && (
            <p className="md-typescale-label-medium footer-gst">
              {gstin.label}: {gstin.value}
            </p>
          )}
        </div>
        {links.map((group) => (
          <nav key={group.title} aria-label={group.title} className="footer-group">
            <p className="md-typescale-title-small footer-heading">{group.title}</p>
            <ul role="list" className="footer-links">
              {group.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="md-typescale-body-medium">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <md-divider></md-divider>
      <p className="md-typescale-body-small footer-bottom">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </p>
    </footer>
  )
}
