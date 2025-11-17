import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[110vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
            Futuristic brand growth studio
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.05]">
            We design standout brands that scale.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
            A strategy-first marketing agency blending design, data and interactive 3D to create high-converting experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white font-semibold shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 transition-shadow">
              Get a free audit
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white/70 backdrop-blur px-5 py-3 text-gray-900 hover:bg-white">See our work</a>
          </div>
        </motion.div>
      </div>

      <ScrollCue />
    </section>
  )
}

function ScrollCue() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <div className="mx-auto h-9 w-5 rounded-full border border-gray-400/60 bg-white/50 backdrop-blur relative">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gray-700"
          />
        </div>
        <p className="mt-3 text-xs uppercase tracking-widest text-gray-600">Scroll</p>
      </motion.div>
    </div>
  )
}
