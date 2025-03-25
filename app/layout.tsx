import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Navigation from './components/navigation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: "Ranit's Portfolio",
    template: "%s - Ranit's Portfolio"
  },
  description: "Hi, I am Ranit Pramanik, and this is my Portfolio app where you can see my details.",
  keywords: "Portfolio app, Ranit Pramanik Portfolio, React Portfolio, Next.js Portfolio, Frontend Portfolio, MERN Stack Portfolio",
  authors: [{ name: "Ranit Pramanik", url: "https://your-portfolio.com" }], // Update with your portfolio URL
  metadataBase: new URL("https://your-portfolio.com"), // Your actual website URL
  openGraph: {
    title: "Ranit Pramanik | Frontend Developer Portfolio",
    description: "Explore my portfolio showcasing projects, skills, and experience as a MERN Stack Developer.",
    url: "https://your-portfolio.com", // Your actual domain
    siteName: "Ranit's Portfolio",
    images: [
      {
        url: "/images/homebg.jpg", // Update with your OG image
        width: 1200,
        height: 630,
        alt: "Ranit Pramanik Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranit Pramanik | Frontend Developer Portfolio",
    description: "Check out my portfolio as a MERN Stack Developer!",
    creator: "@yourTwitterHandle", // Your Twitter username
    images: ["/images/homebg.jpg"] // Update with an actual Twitter preview image
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  )
}
