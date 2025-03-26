import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Ranit Pramanik | MERN Stack Developer',
  description:
    'Explore projects built by Ranit Pramanik, a MERN Stack Developer. Check out food ordering apps, portfolio websites, and e-commerce solutions.',
  keywords: [
    'Ranit Pramanik',
    'MERN Stack Developer',
    'React.js',
    'Next.js',
    'Web Development',
    'Projects',
    'Portfolio',
  ],
  openGraph: {
    title: 'Projects - Ranit Pramanik | MERN Stack Developer',
    description:
      'Discover the portfolio projects of Ranit Pramanik, featuring React, Redux, Tailwind, Next.js, and more.',
    url: 'https://yourportfolio.com/projects',
    siteName: 'Ranit Pramanik Portfolio',
    images: [
      {
        url: '/images/projecttbg.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects showcase background',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Ranit Pramanik | MERN Stack Developer',
    description:
      'Explore the web development projects created by Ranit Pramanik, from e-commerce to portfolio apps.',
    images: ['/images/projecttbg.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
  }
