'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface EventCardProps {
  title: string
  date: string
  location?: string
  type: string
  featured?: boolean
  image?: string
  video?: string
}

export default function EventCard({
  title,
  date,
  location,
  type,
  featured = false,
  image,
  video,
}: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  // Magnetic effect - card follows cursor slightly
  const magneticX = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15])
  const magneticY = useTransform(mouseYSpring, [-0.5, 0.5], [-15, 15])

  useEffect(() => {
    if (videoRef.current && isHovered && video) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, video will play on user interaction
      })
      setVideoPlaying(true)
    } else if (videoRef.current && !isHovered && video) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setVideoPlaying(false)
    }
  }, [isHovered, video])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
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
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative glass rounded-2xl overflow-hidden cursor-pointer ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        x: magneticX,
        y: magneticY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: featured ? 1.02 : 1.05, z: 50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        {video ? (
          <>
            <motion.video
              ref={videoRef}
              src={video}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.5 }}
            />
            {!videoPlaying && image && (
              <motion.img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </>
        ) : image ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-fomo-pink/20 to-fomo-red/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-fomo-charcoal/90 via-fomo-charcoal/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
        <motion.div
          className="inline-block mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="px-3 py-1 rounded-full bg-fomo-pink/30 text-fomo-pink text-sm font-medium">
            {type}
          </span>
        </motion.div>

        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 text-white/80">
            <Calendar size={18} />
            <span>{date}</span>
          </div>
          {location && (
            <div className="flex items-center space-x-2 text-white/80">
              <MapPin size={18} />
              <span>{location}</span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          x: useTransform(mouseXSpring, [-0.5, 0.5], ['-100%', '100%']),
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />
    </motion.div>
  )
}

