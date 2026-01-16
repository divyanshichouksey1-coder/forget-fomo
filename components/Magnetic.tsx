'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef, MouseEvent } from 'react'

interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
  scale?: number
}

export default function Magnetic({ children, className = '', strength = 0.3, scale = 1.05 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-20 * strength, 20 * strength])
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-20 * strength, 20 * strength])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: translateX,
        y: translateY,
      }}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}

