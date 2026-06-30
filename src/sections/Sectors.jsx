import { motion } from 'framer-motion'
import { sectors } from '../data/constants'

export default function Sectors() {
  return (
    <section className="section bg-brand-900">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="text-energy-500 font-semibold text-sm uppercase tracking-wide">Sectores</span>
          <h2 className="section-title text-white mt-2">Atendemos diversos sectores</h2>
          <p className="section-subtitle text-slate-300">Nuestra experiencia abarca industrias, comercios, instituciones de salud, hoteles, restaurantes y más.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-brand-800/50 border border-brand-700 rounded-xl p-6 text-center hover:bg-brand-800 transition-colors"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-700 text-energy-500 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold">{sector.label}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
