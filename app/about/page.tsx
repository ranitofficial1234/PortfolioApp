"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiTypescript, SiPrisma, SiVercel } from "react-icons/si";
import CVDownload from "../components/cv";

const cvDetails = [
  { title: "About Me", content: "Aspiring Front-End Developer with a background in marketing and finance, currently pursuing MERN-stack development from Webskitters Academy." },
  { title: "Education", content: "MBA in Marketing and Finance (EIILM Kolkata, 2021-2023) | MERN-Stack Development (Webskitters Academy) | B.Com (Barrackpore Rastraguru Surendranath College, 2018-2021)" },
  { title: "Experience", content: "Worked for Dalmia Cement Bharat but looking for a job to kick-start my career in this Development Role." },
  { title: "Projects", content: "E-commerce Cosmetics Site, Food Ordering App, To-Do App." },
  { title: "Skills", content: "HTML, Bootstrap, CSS, Tailwind CSS, JavaScript (React.js, Next.js), TypeScript, Prisma. Soft Skills: Time management, Public Speaking, Team Player, Fast Learner." },
  { title: "Languages", content: "Bengali (Native), English (Moderate), Hindi (Fluent)." },
  { title: "Hobbies", content: "Playing Football, Singing, Weight Training, Bikes." },
  { title: "Links", content: "GitHub: github.com/1234danav | LinkedIn: https://www.linkedin.com/in/ranit-pramanik-006454290" }
];

const techIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind" },
  { icon: <FaReact className="text-blue-400" />, name: "React.js" },
  { icon: <TbBrandNextjs className="text-white" />, name: "Next.js" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
  { icon: <SiPrisma className="text-gray-400" />, name: "Prisma" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiVercel className="text-white" />, name: "Vercel" },
];

const Page: React.FC = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("/images/about.jpg")` }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
       
      </div>
      < CVDownload/>

   {/* Carousel Section */}
<div className="relative z-10 w-full max-w-2xl p-6 -mt-12">
  <Carousel 
    showThumbs={false} 
    infiniteLoop 
    autoPlay 
    interval={5000} 
    showStatus={false} 
    showArrows={false}
    className="overflow-hidden"
  >
    {cvDetails.map((item, index) => (
      <div key={index} className="group relative p-6 min-h-[200px] flex flex-col justify-center">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-extrabold text-white group-hover:text-blue-400 transition-colors duration-300">
            {item.title}
          </h2>
          <p className="text-gray-200 mt-3 text-lg leading-relaxed overflow-hidden text-ellipsis">
            {item.content}
          </p>
        </div>
      </div>
    ))}
  </Carousel>
</div>


      {/* Icons Slider */}
      <div className="relative z-10 w-full max-w-4xl mt-8 overflow-hidden">
        <h1 className="text-3xl text-center text-white mb-3">My TechStack</h1>
        <div className="slider-wrapper">
          <div className="animate-slide">
            {[...techIcons, ...techIcons].map((tech, index) => (
              <div key={index} className="flex flex-col items-center text-white text-lg min-w-[100px] px-4">
                <div className="text-5xl">{tech.icon}</div>
                <p className="text-sm mt-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx global>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .slider-wrapper {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          padding: 10px 0;
        }
        .animate-slide {
          display: flex;
          gap: 2rem;
          animation: slide 10s linear infinite;
        }
      `}</style>
    </main>
  );
};

export default Page;
