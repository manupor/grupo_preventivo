import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const HONEYPOT_NAME = 'website'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', [HONEYPOT_NAME]: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData[HONEYPOT_NAME]) return // spam honeypot
    setLoading(true)
    // TODO: conectar backend o servicio de correo (Netlify Forms, Formspree, EmailJS, etc.)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '', [HONEYPOT_NAME]: '' })
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Mensaje enviado</h3>
        <p className="text-green-700">Gracias por contactarnos. Un asesor se comunicará con usted pronto.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition"
          />
        </div>
      </div>
      <input type="text" name={HONEYPOT_NAME} value={formData[HONEYPOT_NAME]} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
      <button type="submit" disabled={loading} className="btn-primary w-full md:w-auto">
        {loading ? 'Enviando...' : 'Enviar mensaje'}
        <Send className="w-4 h-4" />
      </button>
    </form>
  )
}
