import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AboutHero } from '@/components/about/about-hero'
import { WhatWeDo } from '@/components/about/what-we-do'
import { BusinessDetails } from '@/components/about/business-details'
import '../home.css'
import './about.css'

export const metadata: Metadata = {
  title: 'About Us — MSIT Services, New Delhi',
  description:
    'M S IT SERVICES, New Delhi: sales of computers, laptops, printers, cameras, mobiles and Apple products, genuine software, repairs and AMC.',
}

export default function AboutPage() {
  return (
    <div className="home-shell">
      <SiteHeader />
      <main className="page">
        <AboutHero />
        <WhatWeDo />
        <BusinessDetails />
      </main>
      <SiteFooter />
    </div>
  )
}
