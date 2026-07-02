import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import { services } from '../data/constants'

export default function ServicesHome() {
  const featuredServices = services.slice(0, 6)

  return (
    <section className="section bg-white">
      <div className="container-site">
        <SectionHeader
          label="Servicios"
          title="Soluciones integrales para su industria"
          subtitle="Ofrecemos servicios especializados en electricidad, energía, mantenimiento industrial y servicios complementarios."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.05}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={`/servicios#${service.id}`}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-10" delay={0.2}>
          <Link to="/servicios" className="btn-primary">
            Ver todos los servicios
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
