'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, MessageCircle, Users, Heart, HelpCircle } from 'lucide-react'
import MeshGradient from '@/components/MeshGradient'

const faqs = [
  {
    question: 'How do I join the community?',
    answer: 'Simply fill out the form below with your details, and we\'ll add you to our WhatsApp group where all the magic happens!',
  },
  {
    question: 'What kind of events do you organize?',
    answer: 'We organize a variety of social events including Sip & Cycle sessions, Break Up Jams, Movie Nights, weekend trips, and casual meetups. There\'s something for everyone!',
  },
  {
    question: 'Is there a membership fee?',
    answer: 'No membership fee! We\'re all about building a community. Some events may have participation costs, but joining the community is completely free.',
  },
  {
    question: 'Do I need to attend every event?',
    answer: 'Not at all! Come to whatever events interest you. There\'s no pressure or commitment - just good vibes and great company.',
  },
  {
    question: 'Where are the events usually held?',
    answer: 'Most events are in Bangalore, with some weekend trips to nearby destinations like Pondicherry, Nandi Hills, and other scenic spots.',
  },
  {
    question: 'How do I stay updated?',
    answer: 'Once you join our WhatsApp group, you\'ll receive all event announcements, updates, and can chat with other members. It\'s the hub of our community!',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <MeshGradient />
      <main className="relative min-h-screen pt-20 md:pt-24">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
            >
              <motion.div
                className="inline-block mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-fomo-pink via-fomo-red to-fomo-pink flex items-center justify-center mx-auto shadow-2xl">
                  <Users className="text-white" size={40} />
                </div>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">Join the Fam</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Become part of Bangalore's most vibrant social events community. Fill out the form below and we'll add you to our WhatsApp group!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Join Form */}
              <motion.div
                variants={itemVariants}
                className="glass-strong rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle className="text-fomo-pink" size={28} />
                  <h2 className="text-3xl font-bold">Get Started</h2>
                </div>
                <p className="text-white/70 mb-8">
                  Tell us a bit about yourself and we'll get you connected to the community.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-fomo-pink to-fomo-red flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 0.8 }}
                    >
                      <CheckCircle className="text-white" size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Thanks for joining!</h3>
                    <p className="text-white/70">
                      We'll add you to our WhatsApp group soon. Keep an eye on your messages!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/20 focus:border-fomo-pink focus:outline-none focus:ring-2 focus:ring-fomo-pink/50 text-white placeholder-white/40 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white/80">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/20 focus:border-fomo-pink focus:outline-none focus:ring-2 focus:ring-fomo-pink/50 text-white placeholder-white/40 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/20 focus:border-fomo-pink focus:outline-none focus:ring-2 focus:ring-fomo-pink/50 text-white placeholder-white/40 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                        Tell us about yourself (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/20 focus:border-fomo-pink focus:outline-none focus:ring-2 focus:ring-fomo-pink/50 text-white placeholder-white/40 transition-all resize-none"
                        placeholder="What brings you to Forget FOMO? What events interest you?"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-fomo-pink to-fomo-red text-white font-semibold text-lg flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Join Now</span>
                      <Send size={20} />
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Why Join Section */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="glass-strong rounded-3xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Heart className="text-fomo-pink" size={28} />
                    <h2 className="text-3xl font-bold">Why Join?</h2>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'No FOMO - We plan, you just show up',
                      'Meet like-minded people in Bangalore',
                      'Diverse events for every interest',
                      'Zero commitment - come when you want',
                      'Build lasting friendships and memories',
                    ].map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-fomo-pink to-fomo-red flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="text-white" size={14} />
                        </div>
                        <span className="text-white/80">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="glass rounded-2xl p-6 text-center">
                  <p className="text-white/60 text-sm mb-2">Already part of the community?</p>
                  <p className="text-white/80">
                    Share this page with friends who might be interested!
                  </p>
                </div>
              </motion.div>
            </div>

            {/* FAQ Section */}
            <motion.div
              variants={itemVariants}
              className="mb-16"
            >
              <div className="flex items-center space-x-3 mb-8 justify-center">
                <HelpCircle className="text-fomo-pink" size={32} />
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-gradient">Frequently Asked Questions</span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-lg pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-8 h-8 rounded-full bg-fomo-pink/20 flex items-center justify-center">
                          <span className="text-fomo-pink text-xl">+</span>
                        </div>
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedFaq === index ? 'auto' : 0,
                        opacity: expandedFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-white/70">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              variants={itemVariants}
              className="text-center glass-strong rounded-3xl p-12"
            >
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Ready to Forget FOMO?</span>
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of Bangaloreans who've found their community. Fill out the form above and let's make some memories together!
              </p>
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {['Sip & Cycle', 'Movie Nights', 'Weekend Trips', 'Break Up Jams'].map((event, i) => (
                  <motion.div
                    key={event}
                    className="px-4 py-2 rounded-full glass text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {event}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  )
}

