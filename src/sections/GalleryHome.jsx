import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import { gallery } from '../data/constants'

export default function GalleryHome() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <SectionHeader
          label="Galería"
          title="Conozca nuestra operación"
          subtitle="Personal, vehículos, equipos y trabajos que respaldan nuestro compromiso con la calidad."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.05}
              className={`group relative overflow-hidden rounded-xl aspect-square ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium text-sm">{item.alt}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-10" delay={0.2}>
          <Link to="/proyectos" className="btn-secondary">
            Ver más imágenes
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
