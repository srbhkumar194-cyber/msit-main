import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AmcPlans } from '@/components/amc-plans'
import '../home.css'

export const metadata: Metadata = {
  title: 'AMC Plans — MSIT Services',
  description:
    'Annual maintenance contracts for computers, laptops, printers, CCTV and businesses from MSIT Services.',
}

export default function AmcPlansPage() {
  return (
    <div className="home-shell">
      <SiteHeader />
      <main className="page">
        <AmcPlans />
      </main>
      <SiteFooter />
    </div>
  )
}
