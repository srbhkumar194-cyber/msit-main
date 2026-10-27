import Image from 'next/image'

const stats = [
  { value: '10+', label: 'Years of trust' },
  { value: '5,000+', label: 'Happy customers' },
  { value: '500+', label: 'Active AMC clients' },
  { value: '24 hr', label: 'Service response' },
]

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="md-typescale-label-large hero-eyebrow">
          <md-icon aria-hidden="true">verified</md-icon>
          Sales • Service • AMC
        </p>
        <h1 id="hero-title" className="md-typescale-display-medium hero-title">
          Your one-stop shop for computers, laptops, cameras &amp; mobiles
        </h1>
        <p className="md-typescale-body-large hero-subtitle">
          MSIT Services sells genuine branded devices and keeps them running
          with expert repairs and affordable Annual Maintenance Contracts for
          homes, shops, and offices.
        </p>
        <div className="hero-actions">
          <md-filled-button href="#products">
            <md-icon slot="icon">storefront</md-icon>
            Explore products
          </md-filled-button>
          <md-outlined-button href="#amc">
            <md-icon slot="icon">shield</md-icon>
            View AMC plans
          </md-outlined-button>
        </div>
      </div>

      <div className="hero-media">
        <Image
          src="/images/hero.png"
          alt="Laptop, desktop monitor, smartphone and cameras arranged on a desk"
          fill
          priority
          sizes="(min-width: 840px) 50vw, 100vw"
          className="hero-image"
        />
      </div>

      <dl className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <dt className="md-typescale-body-medium stat-label">{stat.label}</dt>
            <dd className="md-typescale-headline-medium stat-value">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
