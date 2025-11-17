import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/40 to-fuchsia-500/40 blur-3xl pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Ready to unlock your next growth curve?</h2>
          <p className="mt-4 text-white/70 max-w-2xl">Tell us about your goals and we’ll send a tailored plan within 48 hours.</p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            <input required placeholder="Your name" className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <input required type="email" placeholder="Work email" className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <button className="rounded-lg bg-white text-gray-900 font-semibold px-5 py-3 hover:bg-white/90">Request proposal</button>
          </form>
        </div>
      </div>
    </section>
  )
}
