import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/constants'

export default function ServicesHome() {
  const featuredServices = services.slice(0, 6)

  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="text-energy-600 font-semibold text-sm uppercase tracking-wide">Servicios</span>
          <h2 className="section-title mt-2">Soluciones integrales para su industria</h2>
          <p className="section-subtitle">Ofrecemos servicios especializados en electricidad, energía, mantenimiento industrial y servicios complementarios.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={`/servicios#${service.id}`}
              delay={index * 0.05}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/servicios" className="btn-primary">
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  )
}
