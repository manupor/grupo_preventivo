import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'
import { services, serviceCategoryDetails } from '../data/constants'

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

  const activeDetail = activeFilter !== 'all' ? serviceCategoryDetails[activeFilter] : null

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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter.value
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

          <AnimatePresence mode="wait">
            {activeDetail && (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10"
              >
                <div className="flex items-center gap-2 text-energy-600 font-semibold text-sm uppercase tracking-wide mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Especialidad</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-brand-900 mb-4">
                  {activeDetail.title}
                </h3>
                <p className="text-slate-600 text-lg max-w-3xl mb-10">{activeDetail.intro}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h4 className="font-bold text-brand-900 mb-4">Alcance del servicio</h4>
                    <ul className="space-y-3">
                      {activeDetail.capabilities.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-brand-900 mb-4">Beneficios para su operación</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {activeDetail.benefits.map((item) => (
                        <div
                          key={item}
                          className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h4 className="font-bold text-brand-900 mb-3">Industrias y aplicaciones</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeDetail.industries.map((industry) => (
                        <span
                          key={industry}
                          className="px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-medium"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>

                    {activeDetail.highlights && (
                      <ul className="mt-6 space-y-2">
                        {activeDetail.highlights.map((item) => (
                          <li key={item} className="text-sm text-slate-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-energy-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-3">
                    <p className="text-slate-600 text-sm md:text-right max-w-xs">
                      ¿Necesita esta especialidad para su operación? Un asesor técnico le ayuda a definir el alcance.
                    </p>
                    <Link to="/cotizar" className="btn-primary">
                      Solicitar cotización
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <CTABanner title="¿Necesita un servicio que no ve en la lista?" description="Contáctenos. Desarrollamos soluciones personalizadas según los requerimientos de su operación." />
    </>
  )
}
