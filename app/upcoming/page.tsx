'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import MeshGradient from '@/components/MeshGradient'
import EventCard from '@/components/EventCard'
import ScrollReveal from '@/components/ScrollReveal'
import Magnetic from '@/components/Magnetic'

const allEvents = [
  {
    id: 1,
    title: 'Cozy Movie Night: ZNMD',
    date: 'January 18th, 2024',
    location: 'Bangalore',
    type: 'Movie Night',
    featured: true,
  },
  {
    id: 2,
    title: 'Pondicherry Coastal Escape',
    date: 'Weekend Trip - Feb 3-4',
    location: 'Pondicherry',
    type: 'Trip',
  },
  {
    id: 3,
    title: 'Sunday Morning Sip & Cycle',
    date: 'Every Sunday, 7 AM',
    location: 'Cubbon Park',
    type: 'Sip & Cycle',
  },
  {
    id: 4,
    title: 'The Anti-Social Social Club: Coffee Meetup',
    date: 'TBD',
    location: 'Bangalore',
    type: 'Meetup',
  },
  {
    id: 5,
    title: 'Break Up Jams Session',
    date: 'January 25th',
    location: 'TBD',
    type: 'Break Up Jams',
  },
  {
    id: 6,
    title: 'Weekend Hiking Adventure',
    date: 'February 10th',
    location: 'Nandi Hills',
    type: 'Trip',
  },
]

const eventTypes = ['All', 'Movie Night', 'Trip', 'Sip & Cycle', 'Meetup', 'Break Up Jams']

export default function UpcomingPlans() {
  const [selectedType, setSelectedType] = useState('All')

  const filteredEvents =
    selectedType === 'All'
      ? allEvents
      : allEvents.filter((event) => event.type === selectedType)

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
                  <span className="text-gradient">Upcoming Plans</span>
                </h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Check out what we have planned next. Join us for unforgettable experiences!
                </p>
              </div>
            </ScrollReveal>

            {/* Filter Buttons */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {eventTypes.map((type, index) => (
                  <ScrollReveal key={type} delay={0.3 + index * 0.05}>
                    <Magnetic strength={0.15}>
                      <motion.button
                        onClick={() => setSelectedType(type)}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${
                          selectedType === type
                            ? 'bg-gradient-to-r from-fomo-pink to-fomo-red text-white'
                            : 'glass text-white/80 hover:text-white hover:bg-white/20'
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        {type}
                      </motion.button>
                    </Magnetic>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            {/* Events Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {filteredEvents.map((event, index) => (
                <ScrollReveal key={event.id} delay={index * 0.1}>
                  <EventCard
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    type={event.type}
                    featured={event.featured}
                  />
                </ScrollReveal>
              ))}
            </motion.div>

            {filteredEvents.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xl text-white/60">
                  No events found for this category. Check back soon!
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>
      </main>
    </>
  )
}

