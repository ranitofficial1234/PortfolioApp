import React from 'react'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'
import Image from 'next/image'

interface Social {
  name: string
  icon: JSX.Element
  url: string
}

//Socials array
const Socials: Social[] = [
  {
    name: 'Linkedin',
    icon: (
      <FaLinkedin className="text-blue-500 hover:text-blue-400 transition-colors duration-200" />
    ),
    url: 'https://www.linkedin.com/in/ranit-pramanik-006454290',
  },
  {
    name: 'Facebook',
    icon: (
      <FaFacebook className="text-blue-600 hover:text-blue-500 transition-colors duration-200" />
    ),
    url: 'https://www.facebook.com/share/1B4z42HrJe/',
  },
  {
    name: 'Github',
    icon: (
      <FaGithub className="text-white hover:text-gray-400 transition-colors duration-200" />
    ),
    url: 'https://github.com/ranitofficial1234',
  },
]

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[80px] md:h-[100px] bg-transparent flex justify-between items-center px-5 sm:px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white flex items-center justify-center">
          <Image
            src="/images/cyborg.jpg"
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </div>

        <h1 className="text-white text-[18px] sm:text-[22px] md:text-[35px] font-semibold">
          Ranit<span className="text-white">’</span>s{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Portfolio
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-5">
        {Socials.map(({ name, icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
