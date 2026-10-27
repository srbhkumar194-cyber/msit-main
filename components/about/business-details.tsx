import { businessDetails, site } from '@/lib/site'

const contactItems = [
  { icon: 'call', label: 'Phone', value: site.phoneDisplay, href: site.phoneHref },
  { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: 'location_on', label: 'Address', value: site.address },
  { icon: 'schedule', label: 'Working hours', value: site.hours },
]

export function BusinessDetails() {
  return (
    <section className="section" aria-labelledby="business-title">
      <header className="section-header">
        <h2 id="business-title" className="md-typescale-headline-large section-title">
          Business details
        </h2>
        <p className="md-typescale-body-large section-subtitle">
          Registered GST business — every purchase comes with a proper tax invoice.
        </p>
      </header>

      <div className="details-grid">
        <div className="details-card">
          <p className="md-typescale-title-large card-title">{site.legalName}</p>
          <dl className="details-list">
            {businessDetails.map((detail) => (
              <div key={detail.label} className="details-row">
                <dt className="md-typescale-label-large details-label">{detail.label}</dt>
                <dd className="md-typescale-body-large details-value">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="details-card">
          <p className="md-typescale-title-large card-title">Get in touch</p>
          <ul className="details-contact" role="list">
            {contactItems.map((item) => (
              <li key={item.label} className="details-contact-item">
                <span className="icon-badge" aria-hidden="true">
                  <md-icon>{item.icon}</md-icon>
                </span>
                <div>
                  <p className="md-typescale-label-medium details-label">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="md-typescale-body-large details-link">
                      {item.value}
                    </a>
                  ) : (
                    <p className="md-typescale-body-large details-value">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <md-filled-button
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            class="details-cta"
          >
            <md-icon slot="icon">chat</md-icon>
            Chat on WhatsApp
          </md-filled-button>
        </div>
      </div>
    </section>
  )
}
