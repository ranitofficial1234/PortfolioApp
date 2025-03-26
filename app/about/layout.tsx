import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me - Ranit Pramanik',
  description:
    'Aspiring Front-End Developer with expertise in React.js, Next.js, and TypeScript. Explore my skills, projects, and background in web development.',
  keywords: [
    'Frontend Developer',
    'MERN Stack',
    'React.js',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'JavaScript',
    'Web Development',
  ],
  openGraph: {
    title: 'About Me - Ranit Pramanik',
    description:
      'Explore the portfolio of Ranit Pramanik, a MERN Stack Developer with experience in React.js, Next.js, and TypeScript.',
    url: 'https://yourportfolio.com/about',
    siteName: 'Ranit Pramanik Portfolio',
    images: [
      {
        url: '/images/aboutbg.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Background',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Me - Ranit Pramanik',
    description:
      'Aspiring Front-End Developer with expertise in React.js, Next.js, and TypeScript.',
    images: ['/images/aboutbg.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
