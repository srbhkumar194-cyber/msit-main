import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProductCategories } from '@/components/product-categories'
import { AmcPlans } from '@/components/amc-plans'
import { Services } from '@/components/services'
import { EnquirySection } from '@/components/enquiry-section'
import { SiteFooter } from '@/components/site-footer'
import './home.css'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <Hero />
        <ProductCategories />
        <AmcPlans />
        <Services />
        <EnquirySection />
      </main>
      <SiteFooter />
    </>
  )
}
