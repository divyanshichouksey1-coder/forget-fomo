'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface LogoEntranceProps {
  onComplete: () => void
}

export default function LogoEntrance({ onComplete }: LogoEntranceProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-fomo-pink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative h-32 w-auto md:h-48"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
        transition={{
          duration: 1.5,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <Image
          src="/logo.jpeg"
          alt="Forget FOMO Logo"
          width={200}
          height={192}
          className="h-full w-auto object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

