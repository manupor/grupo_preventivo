import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SectionHeader from '../components/SectionHeader'
import { companyInfo } from '../data/constants'

const steps = [
  'Complete el formulario con los datos de su empresa y el servicio requerido.',
  'Un asesor técnico revisará su solicitud en menos de 24 horas hábiles.',
  'Le enviamos una propuesta detallada con alcance, tiempos y costos.',
  'Confirmamos la orden de trabajo y programamos la visita.',
]

export default function Quote() {
  return (
    <>
      <Helmet>
        <title>Solicitar Cotización | Grupo Preventivo</title>
        <meta name="description" content="Solicite una cotización de mantenimiento eléctrico, alquiler de generadores, termografías o servicios industriales en Costa Rica." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Solicitar cotización</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Cuéntenos su necesidad y le prepararemos una propuesta a la medida.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-2">
              <SectionHeader title="Formulario de cotización" subtitle="Complete los campos y nuestro equipo técnico le contactará." />
              <QuoteForm />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-brand-900 mb-4">¿Cómo funciona?</h3>
                <ul className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-6 h-6 rounded-full bg-brand-700 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-brand-900 mb-4">Contacto directo</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-700" />
                    <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-slate-700 hover:text-brand-700">{companyInfo.phone}</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-700" />
                    <a href={`mailto:${companyInfo.email}`} className="text-slate-700 hover:text-brand-700">{companyInfo.email}</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-700" />
                    <span className="text-slate-700">{companyInfo.schedule}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-50 rounded-xl border border-brand-100 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 mt-0.5" />
                  <p className="text-sm text-brand-900">
                    <strong>Respuesta rápida:</strong> Reciba una propuesta inicial en menos de 24 horas hábiles.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
