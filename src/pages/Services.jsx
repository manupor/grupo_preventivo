import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'
import { services } from '../data/constants'

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Electricidad', value: 'electricidad' },
  { label: 'Energía', value: 'energia' },
  { label: 'Industrial', value: 'industrial' },
]

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter((s) => s.category === activeFilter)

  return (
    <>
      <Helmet>
        <title>Servicios | Grupo Preventivo</title>
        <meta name="description" content="Servicios de mantenimiento eléctrico, instalaciones industriales, alquiler de generadores, termografías, calidad de energía y más en Costa Rica." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Nuestros servicios</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Soluciones técnicas integrales para mantener su operación segura, eficiente y en continuidad.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionHeader title="Especialidades técnicas" subtitle="Seleccione una categoría para filtrar nuestros servicios." />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.value
                    ? 'bg-brand-700 text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={`/servicios#${service.id}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="¿Necesita un servicio que no ve en la lista?" description="Contáctenos. Desarrollamos soluciones personalizadas según los requerimientos de su operación." />
    </>
  )
}
