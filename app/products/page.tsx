import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductCategories } from '@/components/product-categories'
import '../home.css'

export const metadata: Metadata = {
  title: 'Products — MSIT Services',
  description:
    'Explore laptops, desktops, printers, cameras, mobiles, Apple products and genuine software from MSIT Services.',
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="page">
        <ProductCategories />
      </main>
      <SiteFooter />
    </>
  )
}
