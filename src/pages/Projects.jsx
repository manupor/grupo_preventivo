import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'
import { projects, testimonials, gallery } from '../data/constants'

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Electricidad', value: 'electricidad' },
  { label: 'Energía', value: 'energia' },
  { label: 'Industrial', value: 'industrial' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.serviceType === activeFilter)

  return (
    <>
      <Helmet>
        <title>Proyectos | Grupo Preventivo</title>
        <meta name="description" content="Galería de proyectos de mantenimiento eléctrico, instalaciones industriales y servicios especializados de Grupo Preventivo en Costa Rica." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Proyectos y galería</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Resultados visibles de nuestro trabajo. Use los filtros para explorar por tipo de servicio.</p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-site">
          <SectionHeader title="Proyectos destacados" subtitle="Antes y después de algunas de nuestras intervenciones." />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.value
                    ? 'bg-brand-700 text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                client={project.client}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="mb-20">
            <SectionHeader title="Testimonios" subtitle="Lo que dicen nuestros clientes sobre su experiencia." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <p className="text-slate-700 italic mb-4">"{t.text}"</p>
                  <p className="font-bold text-brand-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 mt-6 text-sm">Aquí se integrarán las reseñas reales de Google Business.</p>
          </div>

          <div>
            <SectionHeader title="Galería" subtitle="Imágenes de equipos, personal, vehículos y trabajos." />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-xl aspect-square">
                  <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-medium text-sm">{item.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="¿Tiene un proyecto similar?" description="Cuéntenos los detalles y le ayudamos a planificar la solución adecuada." />
    </>
  )
}
