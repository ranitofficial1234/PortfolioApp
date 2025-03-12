"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navigation: React.FC = () => {
  const [isRouting, setIsRouting] = useState<boolean>(false);
  const path: string = usePathname();
  const [prevPath, setPrevPath] = useState<string>("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 bg-gray-800 p-3 rounded-md shadow-md border border-gray-600"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {isRouting && <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-400" />}
      
      <Link href="/home" className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition-all duration-200">
        H
      </Link>
      <Link href="/about" className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full shadow-md hover:bg-red-500 transition-all duration-200">
        A
      </Link>
      <Link href="/projects" className="flex items-center justify-center w-10 h-10 bg-yellow-600 text-white rounded-full shadow-md hover:bg-yellow-500 transition-all duration-200">
        P
      </Link>
      <Link href="/contact" className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full shadow-md hover:bg-green-500 transition-all duration-200">
        C
      </Link>
    </motion.div>
  );
};

export default Navigation;