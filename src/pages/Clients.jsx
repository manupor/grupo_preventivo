import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'
import { sectors, testimonials } from '../data/constants'

const clientLogos = [
  'https://placehold.co/200x80/ffffff/1e293b?text=Cliente+Industria',
  'https://placehold.co/200x80/ffffff/1e293b?text=Cliente+Comercio',
  'https://placehold.co/200x80/ffffff/1e293b?text=Cliente+Hotel',
  'https://placehold.co/200x80/ffffff/1e293b?text=Cliente+Hospital',
  'https://placehold.co/200x80/ffffff/1e293b?text=Cliente+Restaurante',
  'https://placehold.co/200x80/ffffff/1e293b?text=Cliente+Condominio',
  'https://placehold.co/200x80/ffffff/1e293b?text=Institución+Pública',
  'https://placehold.co/200x80/ffffff/1e293b?text=Empresa+Servicios',
]

export default function Clients() {
  return (
    <>
      <Helmet>
        <title>Clientes | Grupo Preventivo</title>
        <meta name="description" content="Empresas e instituciones que confían en Grupo Preventivo para mantenimiento eléctrico e industrial en Costa Rica." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Clientes y sectores</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Atendemos a empresas e instituciones de diversos sectores en todo Costa Rica.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionHeader title="Sectores que atendemos" subtitle="Nuestra experiencia se adapta a las necesidades de cada industria." />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {sectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <motion.div key={sector.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 mx-auto rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mb-3">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-brand-900">{sector.label}</h3>
                </motion.div>
              )
            })}
          </div>

          <div className="mb-20">
            <SectionHeader title="Confían en nosotros" subtitle="Logos representativos de clientes que han trabajado con Grupo Preventivo." />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clientLogos.map((logo, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-center h-24 shadow-sm">
                  <img src={logo} alt={`Cliente ${index + 1}`} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 mt-4 text-sm">Reemplace estos placeholders con los logos reales de sus clientes autorizados.</p>
          </div>

          <div>
            <SectionHeader title="Testimonios" subtitle="Voz de nuestros clientes sobre la calidad de nuestro trabajo." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                  <p className="text-slate-700 italic mb-4">"{t.text}"</p>
                  <p className="font-bold text-brand-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Únase a la lista de clientes satisfechos" description="Solicite una cotización y descubra por qué empresas de Costa Rica confían en Grupo Preventivo." />
    </>
  )
}
