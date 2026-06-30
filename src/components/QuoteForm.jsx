import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { services } from '../data/constants'

const HONEYPOT_NAME = 'website'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    [HONEYPOT_NAME]: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData[HONEYPOT_NAME]) return
    setLoading(true)
    // TODO: conectar backend o servicio de correo
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ company: '', phone: '', email: '', service: '', message: '', [HONEYPOT_NAME]: '' })
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Solicitud recibida</h3>
        <p className="text-green-700">Hemos recibido su solicitud de cotización. Nuestro equipo la revisará y responderá en el menor tiempo posible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="md:col-span-2">
          <label htmlFor="quote-company" className="block text-sm font-medium text-slate-700 mb-1">Empresa / Nombre</label>
          <input
            id="quote-company"
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
          <input
            id="quote-phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="quote-email" className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
          <input
            id="quote-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="quote-service" className="block text-sm font-medium text-slate-700 mb-1">Servicio requerido</label>
          <select
            id="quote-service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition"
          >
            <option value="" disabled>Seleccione un servicio</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
            <option value="Otro">Otro / No estoy seguro</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="quote-message" className="block text-sm font-medium text-slate-700 mb-1">Detalles del proyecto / Mensaje</label>
          <textarea
            id="quote-message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition"
          />
        </div>
      </div>
      <input type="text" name={HONEYPOT_NAME} value={formData[HONEYPOT_NAME]} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
      <button type="submit" disabled={loading} className="btn-primary w-full md:w-auto bg-energy-500 hover:bg-energy-600 text-brand-900">
        {loading ? 'Enviando...' : 'Solicitar cotización'}
        <Send className="w-4 h-4" />
      </button>
    </form>
  )
}
