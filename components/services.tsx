const services = [
  {
    icon: 'build',
    title: 'Repair & servicing',
    text: 'Chip-level repair for laptops, desktops and mobiles — screens, batteries, motherboards and more.',
  },
  {
    icon: 'videocam',
    title: 'CCTV installation',
    text: 'Site survey, wiring, DVR/NVR setup and mobile viewing for homes, shops and offices.',
  },
  {
    icon: 'lan',
    title: 'Networking',
    text: 'Wi-Fi routers, LAN cabling, printer sharing and small office network setup.',
  },
  {
    icon: 'settings_backup_restore',
    title: 'Data recovery',
    text: 'Recover files from failed hard disks, SSDs, pen drives and memory cards.',
  },
  {
    icon: 'terminal',
    title: 'Software solutions',
    text: 'Genuine OS, MS Office, antivirus and Tally — licensed, installed and configured for you.',
  },
  {
    icon: 'print',
    title: 'Printer service',
    text: 'Printer installation, cartridge and toner refill, and repair for home and office printers.',
  },
  {
    icon: 'support_agent',
    title: 'On-site support',
    text: 'Our engineers visit your home or office for installation and troubleshooting.',
  },
  {
    icon: 'currency_exchange',
    title: 'Exchange & upgrade',
    text: 'Exchange old devices, upgrade RAM and SSD, and get the best value for your budget.',
  },
]

const brands = [
  'HP',
  'Dell',
  'Lenovo',
  'Asus',
  'Acer',
  'Apple',
  'Samsung',
  'CP Plus',
  'Hikvision',
  'Canon',
  'Epson',
  'Microsoft',
]

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <header className="section-header">
        <h2 id="services-title" className="md-typescale-headline-large section-title">
          Services we offer
        </h2>
        <p className="md-typescale-body-large section-subtitle">
          Trained engineers, genuine spare parts and service warranty on every
          job.
        </p>
      </header>

      <ul className="service-grid" role="list">
        {services.map((service) => (
          <li key={service.title} className="service-tile">
            <span className="icon-badge" aria-hidden="true">
              <md-icon>{service.icon}</md-icon>
            </span>
            <h3 className="md-typescale-title-medium card-title">{service.title}</h3>
            <p className="md-typescale-body-medium card-text">{service.text}</p>
          </li>
        ))}
      </ul>

      <div className="brands">
        <p className="md-typescale-label-large brands-label">
          Authorised dealing in leading brands
        </p>
        <ul className="brand-list" role="list">
          {brands.map((brand) => (
            <li key={brand} className="md-typescale-title-medium brand-item">
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
