'use client'

import Image from 'next/image'
import { site } from '@/lib/site'

const categories = [
  {
    title: 'Laptops',
    icon: 'laptop_chromebook',
    image: '/images/laptops.png',
    description:
      'Student, business and gaming laptops with official warranty and easy EMI.',
    brands: 'HP • Dell • Lenovo • Asus • Acer',
  },
  {
    title: 'Computers',
    icon: 'desktop_windows',
    image: '/images/computers.png',
    description:
      'Branded and custom-assembled desktops, monitors and accessories.',
    brands: 'Intel • AMD • HP • Dell • Lenovo',
  },
  {
    title: 'Printers',
    icon: 'print',
    image: '/images/printers.png',
    description:
      'Laser, ink tank and multifunction printers, plus genuine toner and cartridges.',
    brands: 'HP • Canon • Epson • Brother',
  },
  {
    title: 'Apple Products',
    icon: 'devices',
    image: '/images/apple.png',
    description:
      'MacBook, iMac, iPad, iPhone and Apple Watch with official warranty.',
    brands: 'MacBook • iMac • iPad • iPhone • Watch',
  },
  {
    title: 'Cameras & CCTV',
    icon: 'videocam',
    image: '/images/cameras.png',
    description:
      'CCTV, IP and Wi-Fi cameras with complete installation, plus DSLR cameras.',
    brands: 'CP Plus • Hikvision • Honeywell',
  },
  {
    title: 'Mobiles',
    icon: 'smartphone',
    image: '/images/mobiles.png',
    description:
      'Latest smartphones, tablets and accessories at the best market price.',
    brands: 'Samsung • Apple',
  },
  {
    title: 'Software',
    icon: 'terminal',
    image: '/images/software.png',
    description:
      'Genuine Windows, MS Office, antivirus, Tally and business software with installation.',
    brands: 'Microsoft • Tally • Quick Heal • Adobe',
  },
]

export function ProductCategories() {
  const openWhatsApp = (productName: string) => {
    const message = `Hello ${site.name}, I want the best price for ${productName}.`
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section id="products" className="section" aria-labelledby="products-title">
      <header className="section-header">
        <h2 id="products-title" className="md-typescale-headline-large section-title">
          Shop by category
        </h2>
        <p className="md-typescale-body-large section-subtitle">
          Genuine products, transparent pricing and after-sales support from
          the same trusted team.
        </p>
      </header>

      <ul className="category-grid" role="list">
        {categories.map((category) => (
          <li key={category.title} className="category-card">
            <div className="category-media">
              <Image
                src={category.image}
                alt=""
                fill
                sizes="(min-width: 840px) 25vw, (min-width: 600px) 50vw, 100vw"
                className="category-image"
              />
            </div>
            <div className="category-body">
              <div className="category-heading">
                <span className="icon-badge" aria-hidden="true">
                  <md-icon>{category.icon}</md-icon>
                </span>
                <h3 className="md-typescale-title-large card-title">
                  {category.title}
                </h3>
              </div>
              <p className="md-typescale-body-medium card-text">
                {category.description}
              </p>
              <p className="md-typescale-label-medium category-brands">
                {category.brands}
              </p>
              <md-text-button onClick={() => openWhatsApp(category.title)} class="category-cta">
                Get best price
                <md-icon slot="icon">arrow_forward</md-icon>
              </md-text-button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
