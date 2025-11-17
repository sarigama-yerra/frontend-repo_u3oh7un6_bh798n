import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, BarChart3, Rocket, Layers } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Brand & Identity',
    desc: 'Positioning, voice, and visual systems that make you unmistakable.'
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    desc: 'Full-funnel acquisition optimized with experimentation and data.'
  },
  {
    icon: Rocket,
    title: 'Launch & GTM',
    desc: 'Narratives, creative and assets that convert on day one.'
  },
  {
    icon: Layers,
    title: 'Interactive Web',
    desc: '3D experiences and animations that increase engagement.'
  }
]

export default function Services() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12])

  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-white/40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 style={{ rotate }} className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
          Growth, engineered
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          We blend brand, performance and 3D to build momentum across the entire customer journey.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
