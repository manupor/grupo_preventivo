import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import { benefits } from '../data/constants'

export default function WhyUs() {
  return (
    <section className="section bg-slate-50">
      <div className="container-site">
        <SectionHeader
          label="¿Por qué elegirnos?"
          title="Confianza construida con resultados"
          subtitle="Combinamos experiencia, cobertura nacional y un equipo técnico capacitado para resolver sus necesidades."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
