import { Link } from 'react-router-dom'
import FAQItem from '../components/FAQItem'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import { faqs } from '../data/constants'

export default function FAQHome() {
  return (
    <section className="section bg-white">
      <div className="container-site max-w-4xl">
        <SectionHeader
          label="FAQ"
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes de nuestros clientes."
        />

        <FadeIn>
          <div className="bg-white rounded-xl border border-slate-200 p-2 md:p-6 shadow-sm">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </FadeIn>

        <FadeIn className="text-center mt-8" delay={0.2}>
          <p className="text-slate-600 mb-4">¿Tiene otra consulta?</p>
          <Link to="/contacto" className="btn-primary">
            Contáctenos
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
