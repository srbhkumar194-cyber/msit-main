import Image from 'next/image'
import { site } from '@/lib/site'

export function AboutHero() {
  return (
    <section className="hero about-hero" aria-labelledby="about-title">
      <div className="hero-copy">
        <p className="md-typescale-label-large hero-eyebrow">About {site.legalName}</p>
        <h1 id="about-title" className="md-typescale-display-medium hero-title">
          Your trusted IT partner in Delhi
        </h1>
        <p className="md-typescale-body-large hero-text">
          {site.name} is a one-stop IT shop New Delhi. We
          sell computers, laptops, printers, cameras, mobiles and Apple
          products, provide genuine software, and keep homes and offices
          running with repairs and Annual Maintenance Contracts.
        </p>
        <div className="hero-actions">
          <md-filled-button href="/#contact">
            <md-icon slot="icon">chat</md-icon>
            Contact us
          </md-filled-button>
          <md-outlined-button href={site.phoneHref}>
            <md-icon slot="icon">call</md-icon>
            {site.phoneDisplay}
          </md-outlined-button>
        </div>
      </div>
      <div className="hero-media">
        <Image
          src="/images/about-store.png"
          alt="MSIT Services store counter with laptops, printers, cameras and a technician at the service desk"
          width={1536}
          height={1024}
          priority
          className="hero-image"
        />
      </div>
    </section>
  )
}
