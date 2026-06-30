import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
  'Más de 14 años de experiencia',
  'Cobertura en todo Costa Rica',
  'Ingenieros y técnicos certificados',
  'Enfoque en seguridad y calidad',
]

export default function AboutHome() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-energy-600 font-semibold text-sm uppercase tracking-wide">Sobre nosotros</span>
            <h2 className="section-title text-left mt-2">Un aliado estratégico para su operación</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Grupo Preventivo nace con el compromiso de ofrecer soluciones integrales en ingeniería y mantenimiento industrial. 
              A lo largo de más de 14 años hemos acompañado a empresas de diversos sectores, ayudándolas a prevenir fallas, 
              cumplir normativas y mantener sus instalaciones funcionando con confiabilidad y eficiencia.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-energy-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/nosotros" className="btn-primary">
              Conozca nuestra historia
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/800x600/0b1f3a/60a5fa?text=Equipo+Grupo+Preventivo"
                alt="Equipo de Grupo Preventivo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 hidden md:block">
              <p className="text-4xl font-extrabold text-brand-700">14+</p>
              <p className="text-sm text-slate-600">años de experiencia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
