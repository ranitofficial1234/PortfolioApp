import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

const Page = () => {
  return (
    <main className="w-screen h-screen relative">
      <Navbar/>
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url("/images/bg.jpg")` }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-25 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-black-500 font-semibold">
            Crafting seamless and dynamic web experiences with the power of the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">
              {" "}
              MERN stack{" "}
            </span>
            🚀
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-600 hidden font-bold text-lg">
            Hi, I am Ranit Pramanik – a passionate MERN Stack Developer turning
            ideas into interactive web experiences!
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/about"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="rounded-[20px] group relative bg-blend-lighten px-5 border border-white py-3 text-lg max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-black inset-0 opacity-0 group-hover:opacity-20" />
              <span className="bg-gradient-to-r from-red-700 to-yellow-400 bg-clip-text text-transparent">
                My projects
              </span>
            </Link>
            <Link
              href="/contact"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/stars.png"
          alt="stars"
          height={1000}
          width={1000}
          className="absolute top-0 left-[150px] z-[10] opacity-80 shooting-star"
        />
      </div>
      <div className="absolute bottom-[147px] right-0 z-[10] pr-[90px]">
        <Image
          className="rotate-[17deg] pb-108 mr-80"
          src="/images/horse.png"
          alt="horse"
          height={150}
          width={150}
        />
      </div>
    </main>
  )
}

export default Page