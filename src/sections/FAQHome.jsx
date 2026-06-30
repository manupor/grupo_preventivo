import { Link } from 'react-router-dom'
import FAQItem from '../components/FAQItem'
import { faqs } from '../data/constants'

export default function FAQHome() {
  return (
    <section className="section bg-white">
      <div className="container-site max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-energy-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
          <h2 className="section-title mt-2">Preguntas frecuentes</h2>
          <p className="section-subtitle">Resolvemos las dudas más comunes de nuestros clientes.</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-2 md:p-6 shadow-sm">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-600 mb-4">¿Tiene otra consulta?</p>
          <Link to="/contacto" className="btn-primary">
            Contáctenos
          </Link>
        </div>
      </div>
    </section>
  )
}
