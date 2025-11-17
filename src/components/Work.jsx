import { motion } from 'framer-motion'

const projects = [
  {
    tag: 'SaaS',
    title: 'Orbital Analytics',
    metric: '+214% signups',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    tag: 'Fintech',
    title: 'Nexus Pay',
    metric: '3.1x ROAS',
    img: 'https://images.unsplash.com/photo-1553697388-94e804e2f0f8?q=80&w=1600&auto=format&fit=crop'
  },
  {
    tag: 'AI',
    title: 'Helix Models',
    metric: '+68% demo bookings',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
]

export default function Work() {
  return (
    <section id="work" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Selected work</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">Real outcomes from recent engagements.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href="#"
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 text-white"
            >
              <img src={p.img} alt="" className="h-72 w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs uppercase tracking-wider text-white/70">{p.tag}</div>
                <div className="mt-1 text-xl font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-cyan-300">{p.metric}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
