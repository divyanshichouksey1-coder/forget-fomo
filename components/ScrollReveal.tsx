'use client'

import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  }

  const initial = directions[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initial }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initial }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
    >
      {children}
    </motion.div>
  )
}

