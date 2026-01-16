'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Upcoming Plans', href: '/upcoming' },
  { name: 'The Gallery', href: '/gallery' },
  { name: 'Join Us', href: '/join' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative h-10 w-auto md:h-12"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Image
                src="/logo.jpeg"
                alt="Forget FOMO Logo"
                width={120}
                height={48}
                className="h-full w-auto object-contain"
                priority
              />
            </motion.div>
            <span className="text-white font-semibold text-lg md:text-xl hidden lg:block">
              forget fomo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className={`relative px-4 py-2 rounded-full transition-colors ${
                      isActive
                        ? 'text-fomo-pink'
                        : 'text-white/80 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-fomo-pink/20"
                        layoutId="activeTab"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full glass hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-4 space-y-2 border-t border-white/10">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    className={`px-4 py-3 rounded-lg glass transition-colors ${
                      isActive
                        ? 'text-fomo-pink bg-fomo-pink/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Magnetic Cursor Effect */}
      <motion.div
        className="hidden lg:block fixed pointer-events-none w-6 h-6 rounded-full bg-fomo-pink/30 blur-xl"
        style={{ x, y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </motion.nav>
  )
}

