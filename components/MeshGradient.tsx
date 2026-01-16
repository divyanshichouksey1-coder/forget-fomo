'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    let animationFrame: number
    let time = 0

    const draw = () => {
      time += 0.005
      const width = canvas.width
      const height = canvas.height
      const scrollInfluence = scrollY * 0.0005

      // Create gradient mesh with scroll influence
      const gradient1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time + scrollInfluence) * 100,
        height * 0.3 + Math.cos(time * 0.7 + scrollInfluence) * 50,
        0,
        width * 0.3 + Math.sin(time + scrollInfluence) * 100,
        height * 0.3 + Math.cos(time * 0.7 + scrollInfluence) * 50,
        width * 0.8
      )
      gradient1.addColorStop(0, 'rgba(255, 71, 126, 0.4)')
      gradient1.addColorStop(1, 'rgba(255, 71, 126, 0)')

      const gradient2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(time * 1.2 + scrollInfluence) * 150,
        height * 0.7 + Math.sin(time * 1.2 + scrollInfluence) * 100,
        0,
        width * 0.7 + Math.cos(time * 1.2 + scrollInfluence) * 150,
        height * 0.7 + Math.sin(time * 1.2 + scrollInfluence) * 100,
        width * 0.9
      )
      gradient2.addColorStop(0, 'rgba(230, 57, 70, 0.3)')
      gradient2.addColorStop(1, 'rgba(230, 57, 70, 0)')

      const gradient3 = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time * 0.8 + scrollInfluence * 0.5) * 80,
        height * 0.5 + Math.cos(time * 0.8 + scrollInfluence * 0.5) * 120,
        0,
        width * 0.5 + Math.sin(time * 0.8 + scrollInfluence * 0.5) * 80,
        height * 0.5 + Math.cos(time * 0.8 + scrollInfluence * 0.5) * 120,
        width * 0.6
      )
      gradient3.addColorStop(0, 'rgba(255, 71, 126, 0.2)')
      gradient3.addColorStop(1, 'rgba(255, 71, 126, 0)')

      ctx.fillStyle = '#0F1115'
      ctx.fillRect(0, 0, width, height)

      ctx.globalCompositeOperation = 'screen'
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, width, height)

      ctx.globalCompositeOperation = 'source-over'
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrame)
    }
  }, [scrollY])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}

