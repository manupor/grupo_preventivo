import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import { companyInfo } from '../data/constants'

export default function ContactHome() {
  return (
    <section className="section bg-slate-50">
      <div className="container-site">
        <SectionHeader
          label="Contacto"
          title="Hablemos de su proyecto"
          subtitle="Estamos listos para atenderle. Escríbanos, llámenos o visítenos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FadeIn direction="left" className="lg:col-span-2">
            <ContactForm />
          </FadeIn>

          <FadeIn direction="right" className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand-900 mb-4">Información de contacto</h3>
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
                    <p className="font-medium text-slate-800">Ubicación</p>
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
              href={`https://wa.me/${companyInfo.whatsapp}?text=Hola,%20me%20interesa%20solicitar%20una%20cotización%20con%20Grupo%20Preventivo.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbanos por WhatsApp
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
