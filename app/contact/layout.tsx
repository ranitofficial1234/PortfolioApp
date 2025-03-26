import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me - Ranit Pramanik',
  description:
    'Get in touch with Ranit Pramanik, a MERN Stack Developer. Fill out the contact form to connect for collaborations, job opportunities, or queries.',
  keywords: [
    'Contact Ranit Pramanik',
    'Frontend Developer',
    'MERN Stack',
    'React.js',
    'Next.js',
    'JavaScript',
    'Portfolio',
  ],
  openGraph: {
    title: 'Contact Me - Ranit Pramanik',
    description:
      'Reach out to Ranit Pramanik, a MERN Stack Developer, through the contact form for any collaboration or project inquiries.',
    url: 'https://yourportfolio.com/contact',
    siteName: 'Ranit Pramanik Portfolio',
    images: [
      {
        url: '/images/contactbg.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Page Background',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Me - Ranit Pramanik',
    description:
      'Reach out to Ranit Pramanik for collaboration, job opportunities, or project inquiries.',
    images: ['/images/contactbg.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
