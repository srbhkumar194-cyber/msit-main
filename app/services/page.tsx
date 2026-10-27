import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Services } from '@/components/services'
import '../home.css'

export const metadata: Metadata = {
  title: 'Services — MSIT Services',
  description:
    'Repair, networking, CCTV installation, printer servicing, software support and on-site service from MSIT Services.',
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <Services />
      </main>
      <SiteFooter />
    </>
  )
}
