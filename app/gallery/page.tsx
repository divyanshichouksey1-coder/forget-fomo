'use client'

import { motion } from 'framer-motion'
import { Camera, MapPin, Film } from 'lucide-react'
import MeshGradient from '@/components/MeshGradient'
import ScrollReveal from '@/components/ScrollReveal'
import Magnetic from '@/components/Magnetic'

const galleryItems = [
  {
    id: 1,
    title: 'Past Trips',
    description: 'Adventures and memories from our weekend getaways',
    category: 'Trips',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: 2,
    title: 'Movie Nights',
    description: 'Cozy evenings with great films and great company',
    category: 'Movie Nights',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80',
  },
  {
    id: 3,
    title: 'Break Up Jams',
    description: 'Music, vibes, and unforgettable moments',
    category: 'Break Up Jams',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
  },
  {
    id: 4,
    title: 'Sip & Cycle',
    description: 'Morning rides and coffee conversations',
    category: 'Sip & Cycle',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    id: 5,
    title: 'Community Vibes',
    description: 'The best moments with the Forget FOMO family',
    category: 'Community',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
  },
  {
    id: 6,
    title: 'Special Events',
    description: 'Celebrations and milestones together',
    category: 'Events',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
]

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'large':
      return 'md:col-span-2 md:row-span-2'
    case 'medium':
      return 'md:col-span-1 md:row-span-2'
    case 'small':
      return 'md:col-span-1 md:row-span-1'
    default:
      return ''
  }
}

export default function Gallery() {
  return (
    <>
      <MeshGradient />
      <main className="relative min-h-screen pt-20 md:pt-24">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <ScrollReveal>
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="text-gradient">The Gallery</span>
                </h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Past vibes, unforgettable memories, and the moments that make us Forget FOMO
                </p>
              </div>
            </ScrollReveal>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
              {galleryItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <Magnetic strength={0.1}>
                    <motion.div
                      className={`glass rounded-2xl overflow-hidden cursor-pointer group ${getSizeClasses(
                        item.size
                      )}`}
                      whileHover={{ y: -5 }}
                    >
                  {/* Image Background */}
                  <div className="relative w-full h-full min-h-[300px]">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fomo-charcoal/95 via-fomo-charcoal/70 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <motion.div
                        className="mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="px-3 py-1 rounded-full bg-fomo-pink/30 text-fomo-pink text-sm font-medium">
                          {item.category}
                        </span>
                      </motion.div>

                      <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {item.title}
                      </motion.h3>

                      <motion.p
                        className="text-white/80 text-sm md:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Icon */}
                      <motion.div
                        className="absolute top-6 right-6 w-12 h-12 rounded-full glass-strong flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                      >
                        {item.category === 'Trips' ? (
                          <MapPin className="text-fomo-pink" size={20} />
                        ) : item.category === 'Movie Nights' ? (
                          <Film className="text-fomo-pink" size={20} />
                        ) : (
                          <Camera className="text-fomo-pink" size={20} />
                        )}
                      </motion.div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-fomo-pink/20 to-fomo-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                    </motion.div>
                  </Magnetic>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA */}
            <ScrollReveal delay={0.6}>
              <div className="text-center mt-16">
                <p className="text-xl text-white/80 mb-6">
                  Want to be part of these memories?
                </p>
                <Magnetic strength={0.2}>
                  <motion.a
                    href="/join"
                    className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-fomo-pink to-fomo-red text-white font-semibold text-lg"
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Us Now
                  </motion.a>
                </Magnetic>
              </div>
            </ScrollReveal>
          </motion.div>
        </section>
      </main>
    </>
  )
}

