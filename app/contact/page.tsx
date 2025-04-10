'use client'
import React from 'react'
import ContactForm from '../components/form'
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
}

const Page: React.FC = () => {
  return (
    <motion.div
      style={{ backgroundImage: 'url(/images/contactbg.jpg)' }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.div
        className="absolute left-20 bottom-16 w-[70%] md:w-[30%]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, x: -30, transition: { duration: 0.5 } }}
      >
        <ContactForm />
      </motion.div>
    </motion.div>
  )
}

export default Page
