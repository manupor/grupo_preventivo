import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SectionHeader from '../components/SectionHeader'
import { companyInfo } from '../data/constants'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contáctenos | Grupo Preventivo</title>
        <meta name="description" content="Contacte a Grupo Preventivo. Teléfono, WhatsApp, correo, formulario y ubicación. Atención en todo Costa Rica." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contáctenos</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Estamos a un mensaje de distancia. Escríbanos y le responderemos a la brevedad.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-2">
              <SectionHeader title="Envíenos un mensaje" subtitle="Complete el formulario y un asesor técnico se comunicará con usted." />
              <ContactForm />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-brand-900 mb-4">Datos de contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">Teléfono</p>
                      <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-slate-600 hover:text-brand-700">{companyInfo.phone}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">Correo</p>
                      <a href={`mailto:${companyInfo.email}`} className="text-slate-600 hover:text-brand-700">{companyInfo.email}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">Dirección</p>
                      <p className="text-slate-600">{companyInfo.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">Horario</p>
                      <p className="text-slate-600">{companyInfo.schedule}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hola,%20me%20interesa%20contactar%20a%20Grupo%20Preventivo.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbanos por WhatsApp
              </a>
            </motion.div>
          </div>

          <div className="mt-16">
            <SectionHeader title="Ubicación" subtitle="Encuéntrenos en Costa Rica." />
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/7] bg-slate-100">
              <iframe
                title="Ubicación Grupo Preventivo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.923456789!2d-84.090724!3d9.928069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNDEuMSJOIDg0wrAwNScyNi42Ilc!5e0!3m2!1ses!2scr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-sm text-slate-500 mt-2">Reemplace el iframe por la ubicación real de la empresa en Google Maps.</p>
          </div>
        </div>
      </section>
    </>
  )
}
