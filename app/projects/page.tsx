"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    image: "/images/food1.png",
    alt: "food",
    extraImages: ["/images/food2.png", "/images/food3.png"], 
    description:
      "Order delicious meals with fresh ingredients and fast delivery. Enjoy a seamless online ordering experience.",
    technologies: [
      <a key="react" href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <SiReact className="text-blue-500 text-3xl hover:scale-110 transition-transform" />
      </a>,
      <a key="redux" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
        <SiRedux className="text-purple-600 text-3xl hover:scale-110 transition-transform" />
      </a>,
      <a key="tailwind" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
        <SiTailwindcss className="text-cyan-400 text-3xl hover:scale-110 transition-transform" />
      </a>,
    ],
    repoLink: "https://github.com/1234danav",
  },
  {
    id: 2,
    image: "/images/portfolio.png",
    alt: "portfolio",
    extraImages: ["/images/portfolio2.png", "/images/portfolio3.png"],
    description:
      "A modern portfolio website showcasing creativity, skills, and projects in a clean and interactive UI.",
    technologies: [
      <a key="nextjs" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <SiNextdotjs className="text-black text-3xl hover:scale-110 transition-transform" />
      </a>,
      <a key="typescript" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
        <SiTypescript className="text-blue-600 text-3xl hover:scale-110 transition-transform" />
      </a>,
      <a key="tailwind" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
        <SiTailwindcss className="text-cyan-400 text-3xl hover:scale-110 transition-transform" />
      </a>,
      <a key="vercel" href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
        <SiVercel className="text-black text-3xl hover:scale-110 transition-transform" />
      </a>,
    ],
    repoLink: "https://github.com/1234danav",
  },
  {
    id: 3,
    image: "/images/cosmetics.png",
    alt: "cosmetics",
    extraImages: ["/images/makeup3.png", "/images/makeup.png"],
    description:
      "Discover beauty with premium cosmetics. Browse high-quality skincare and makeup products with ease.",
    technologies: [
      <a key="react" href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <SiReact className="text-blue-500 text-3xl hover:scale-110 transition-transform" />
      </a>,
      <a key="redux" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
        <SiRedux className="text-purple-600 text-3xl hover:scale-110 transition-transform" />
      </a>,
      <a key="tailwind" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
       className="mt-3 flex items-center justify-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600 text-lg font-semibold">
        <SiTailwindcss className="text-cyan-400 text-3xl hover:scale-110 transition-transform" />
      </a>,
    ],
    repoLink: "https://github.com/1234danav",
  },
];

const Page: React.FC = () => {
  return (
    <motion.main
      className="w-screen min-h-screen py-10 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("/images/project.webp")` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600 mb-10">
        Portfolio
      </h1>

      <div
        className="flex flex-wrap justify-center gap-12 px-6"
       
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="w-96 h-[550px] bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl flex flex-col items-center justify-start text-white text-lg font-semibold cursor-pointer hover:scale-105 transition-transform duration-300 p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            {/* Main Image */}
            <Image src={project.image} alt={project.alt} height={160} width={280} className="rounded-lg" />
            
            {/* Extra Images */}
            <div className="flex gap-2 mt-3">
              {project.extraImages.map((img, i) => (
                <Image key={i} src={img} alt={`extra-${i}`} height={100} width={130} className="rounded-lg" />
              ))}
            </div>

            
            <p className="text-center mt-3">{project.description}</p>

          
            <p className="pt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">
              Technologies used
            </p>
            <div className="flex items-center gap-4 mt-2">{project.technologies}</div>

            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600 text-lg font-semibold pl-8"
            >
              Get Code <SiGithub className="inline text-2xl ml-2 " />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};

export default Page;
