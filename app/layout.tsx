import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'R.V. Graphics | Helmet Decals & Labeling Solutions',
  description: 'Leading manufacturer of Helmet Decals, Water Transfer Decals, Vinyl Stickers, Self Adhesive Labels & Packaging Solutions. Serving automotive, medical & consumer industries since 2008.',
  keywords: ['helmet decals', 'vinyl labels', 'water transfer decals', 'stickers', 'packaging', 'printing', 'India'],
  authors: [{ name: 'R.V. Graphics' }],
  openGraph: {
    title: 'R.V. Graphics | Premium Labeling Solutions',
    description: 'Professional manufacturer of helmet decals, vinyl stickers, and packaging solutions since 2008.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}>{children}</body>
    </html>
  )
}