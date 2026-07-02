import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import { projects } from '../data/constants'

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Electricidad', value: 'electricidad' },
  { label: 'Energía', value: 'energia' },
  { label: 'Industrial', value: 'industrial' },
]

export default function ProjectsHome() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects.slice(0, 4)
    : projects.filter((p) => p.serviceType === activeFilter).slice(0, 4)

  return (
    <section className="section bg-slate-50">
      <div className="container-site">
        <SectionHeader
          label="Proyectos"
          title="Resultados que respaldan nuestra experiencia"
          subtitle="Conozca algunos de los proyectos que hemos ejecutado para clientes en diferentes sectores."
        />

        <FadeIn className="flex flex-wrap justify-center gap-2 mb-10" delay={0.1}>
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
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                client={project.client}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-10" delay={0.2}>
          <Link to="/proyectos" className="btn-primary">
            Ver galería completa
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
