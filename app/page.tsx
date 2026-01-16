'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import MeshGradient from '@/components/MeshGradient'
import LogoEntrance from '@/components/LogoEntrance'
import EventCard from '@/components/EventCard'
import Magnetic from '@/components/Magnetic'
import ScrollReveal from '@/components/ScrollReveal'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const featuredEvent = {
  title: 'Cozy Movie Night: ZNMD',
  date: 'January 18th',
  location: 'Bangalore',
  type: 'Movie Night',
  featured: true,
}

const upcomingEvents = [
  {
    title: 'Pondicherry Coastal Escape',
    date: 'Weekend Trip',
    location: 'Pondicherry',
    type: 'Trip',
  },
  {
    title: 'Sunday Morning Sip & Cycle',
    date: 'Every Sunday',
    location: 'Cubbon Park',
    type: 'Sip & Cycle',
  },
  {
    title: 'The Anti-Social Social Club: Coffee Meetup',
    date: 'TBD',
    location: 'Bangalore',
    type: 'Meetup',
  },
]

export default function Home() {
  const [logoComplete, setLogoComplete] = useState(false)

  return (
    <>
      {!logoComplete && <LogoEntrance onComplete={() => setLogoComplete(true)} />}
      <MeshGradient />
      <main className="relative min-h-screen pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={logoComplete ? 'visible' : 'hidden'}
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 flex justify-center"
            >
              <motion.div
                className="relative h-32 w-auto md:h-40"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/logo.jpeg"
                  alt="Forget FOMO Logo"
                  width={200}
                  height={160}
                  className="h-full w-auto object-contain"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-gradient">Forget FOMO</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Bangalore-Based Social Events Community
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/60 mb-12 max-w-xl mx-auto"
            >
              We make plans so you don't have to ;)
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic strength={0.2}>
                <Link href="/join">
                  <motion.button
                    className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-fomo-pink to-fomo-red text-white font-semibold text-lg overflow-hidden"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Join the Fam</span>
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-fomo-red to-fomo-pink"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link href="/upcoming">
                  <motion.button
                    className="px-8 py-4 rounded-full glass text-white font-semibold text-lg"
                    whileTap={{ scale: 0.95 }}
                  >
                    View Upcoming Plans
                  </motion.button>
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 hidden lg:block"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="text-fomo-pink/30" size={40} />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-10 hidden lg:block"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="text-fomo-red/30" size={50} />
          </motion.div>
        </section>

        {/* Featured Event Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                <span className="text-gradient">Featured Event</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <EventCard {...featuredEvent} />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Quick Preview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                <span className="text-gradient">What We Do</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Sip & Cycle', 'Break Up Jams', 'Movie Nights'].map((activity, index) => (
                <ScrollReveal key={activity} delay={index * 0.1}>
                  <Magnetic strength={0.15}>
                    <div className="glass rounded-2xl p-8 text-center h-full">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-fomo-pink to-fomo-red mx-auto mb-4 flex items-center justify-center"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <Sparkles className="text-white" size={24} />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">{activity}</h3>
                      <p className="text-white/60">
                        Join us for unforgettable experiences and new connections
                      </p>
                    </div>
                  </Magnetic>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 md:p-16">
              <ScrollReveal delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Ready to Join?</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-white/80 mb-8">
                  Become part of Bangalore's most vibrant social events community
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Magnetic strength={0.2}>
                  <Link href="/join">
                    <motion.button
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-fomo-pink to-fomo-red text-white font-semibold text-lg"
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </Magnetic>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  )
}

