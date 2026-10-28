'use client'

import { site } from '@/lib/site'

const plans = [
  {
    name: 'Basic',
    price: '₹2,999',
    description: 'Ideal for a single home PC or laptop.',
    features: [
      '2 preventive maintenance visits',
      'Unlimited phone & remote support',
      'Software & OS troubleshooting',
      'Virus scan and cleanup',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    price: '₹4,999',
    description: 'Best for shops and small offices.',
    features: [
      '4 preventive maintenance visits',
      'Unlimited on-site breakdown calls',
      'Free labour on hardware repairs',
      'Backup device during repair',
      'Priority 24 hr response',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '₹8,999',
    description: 'Complete cover including CCTV systems.',
    features: [
      'Monthly maintenance visits',
      'Computers, printers & CCTV covered',
      'Network and Wi-Fi support',
      'Data backup assistance',
      'Same-day on-site response',
    ],
    featured: false,
  },
]

export function AmcPlans() {
  const openWhatsApp = (planName: string) => {
    const message = `Hello ${site.name}, I want to know more about the ${planName} AMC plan.`
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section id="amc" className="section" aria-labelledby="amc-title">
      <header className="section-header">
        <h2 id="amc-title" className="md-typescale-headline-large section-title">
          Annual Maintenance Contracts
        </h2>
        <p className="md-typescale-body-large section-subtitle">
          Worry-free upkeep for your devices. Pricing shown per device, per
          year — bulk and corporate quotes available.
        </p>
      </header>

      <ul className="plan-grid" role="list">
        {plans.map((plan) => (
          <li
            key={plan.name}
            className={plan.featured ? 'plan-card plan-card-featured' : 'plan-card'}
          >
            <div className="plan-top">
              <h3 className="md-typescale-title-large card-title">{plan.name}</h3>
              {plan.featured && (
                <span className="md-typescale-label-medium plan-badge">
                  Most popular
                </span>
              )}
            </div>
            <p className="md-typescale-body-medium plan-description">
              {plan.description}
            </p>
            <p className="plan-price">
              <span className="md-typescale-display-small">{plan.price}</span>
              <span className="md-typescale-body-medium plan-period">/ year</span>
            </p>
            <md-divider></md-divider>
            <ul className="plan-features" role="list">
              {plan.features.map((feature) => (
                <li key={feature} className="md-typescale-body-medium plan-feature">
                  <md-icon aria-hidden="true">check_circle</md-icon>
                  {feature}
                </li>
              ))}
            </ul>
            {plan.featured ? (
              <md-filled-button onClick={() => openWhatsApp(plan.name)} class="plan-cta">
                Choose {plan.name}
              </md-filled-button>
            ) : (
              <md-outlined-button onClick={() => openWhatsApp(plan.name)} class="plan-cta">
                Choose {plan.name}
              </md-outlined-button>
            )}
          </li>
        ))}
      </ul>

      <div className="corporate-banner">
        <span className="icon-badge icon-badge-large" aria-hidden="true">
          <md-icon>corporate_fare</md-icon>
        </span>
        <div className="corporate-copy">
          <h3 className="md-typescale-title-large">Corporate & bulk AMC</h3>
          <p className="md-typescale-body-medium">
            Offices, schools, hospitals and cyber cafés — get a custom plan
            for 10+ systems with a dedicated engineer.
          </p>
        </div>
        <md-filled-tonal-button onClick={() => openWhatsApp('Corporate & bulk AMC')}>
          Request a quote
        </md-filled-tonal-button>
      </div>
    </section>
  )
}
