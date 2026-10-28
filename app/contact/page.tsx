import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { EnquirySection } from '@/components/enquiry-section'
import '../home.css'

export const metadata: Metadata = {
  title: 'Contact — MSIT Services',
  description:
    'Contact MSIT Services for enquiries, quotes, repairs, software support and AMC plans in Najafgarh, New Delhi.',
}

export default function ContactPage() {
  return (
    <div className="home-shell">
      <SiteHeader />
      <main className="page">
        <EnquirySection />
      </main>
      <SiteFooter />
    </div>
  )
}
