const offerings = [
  {
    icon: 'storefront',
    title: 'Sales',
    text: 'Laptops, desktops, printers, CCTV and digital cameras, mobiles and Apple products from leading brands.',
  },
  {
    icon: 'terminal',
    title: 'Software',
    text: 'Licensed Windows, MS Office, antivirus, Tally and business software, installed and configured.',
  },
  {
    icon: 'build',
    title: 'Service & repair',
    text: 'Chip-level repairs, upgrades, data recovery, networking and CCTV installation by trained engineers.',
  },
  {
    icon: 'verified_user',
    title: 'AMC',
    text: 'Annual Maintenance Contracts for homes, shops and offices with priority, on-site support.',
  },
]

const reasons = [
  { icon: 'workspace_premium', title: 'Genuine products', text: 'Only original products with GST bills and official warranty.' },
  { icon: 'currency_rupee', title: 'Fair pricing', text: 'Transparent quotes and the best market price, with no hidden charges.' },
  { icon: 'engineering', title: 'Skilled engineers', text: 'Experienced technicians for every device we sell and service.' },
  { icon: 'home_repair_service', title: 'On-site support', text: 'We visit your home or office across West Delhi for installs and repairs.' },
]

export function WhatWeDo() {
  return (
    <>
      <section className="section" aria-labelledby="what-we-do-title">
        <header className="section-header">
          <h2 id="what-we-do-title" className="md-typescale-headline-large section-title">
            What we do
          </h2>
          <p className="md-typescale-body-large section-subtitle">
            Everything your home or business needs in IT — under one roof.
          </p>
        </header>
        <ul className="offer-grid" role="list">
          {offerings.map((item) => (
            <li key={item.title} className="service-tile">
              <span className="icon-badge" aria-hidden="true">
                <md-icon>{item.icon}</md-icon>
              </span>
              <h3 className="md-typescale-title-medium card-title">{item.title}</h3>
              <p className="md-typescale-body-medium card-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="why-us-title">
        <header className="section-header">
          <h2 id="why-us-title" className="md-typescale-headline-large section-title">
            Why customers choose us
          </h2>
        </header>
        <ul className="reason-list" role="list">
          {reasons.map((reason) => (
            <li key={reason.title} className="reason-item">
              <md-icon aria-hidden="true">{reason.icon}</md-icon>
              <div>
                <h3 className="md-typescale-title-medium card-title">{reason.title}</h3>
                <p className="md-typescale-body-medium card-text">{reason.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
