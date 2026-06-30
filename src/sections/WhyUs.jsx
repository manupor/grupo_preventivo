import { motion } from 'framer-motion'
import { benefits } from '../data/constants'

export default function WhyUs() {
  return (
    <section className="section bg-slate-50">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="text-energy-600 font-semibold text-sm uppercase tracking-wide">¿Por qué elegirnos?</span>
          <h2 className="section-title mt-2">Confianza construida con resultados</h2>
          <p className="section-subtitle">Combinamos experiencia, cobertura nacional y un equipo técnico capacitado para resolver sus necesidades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
