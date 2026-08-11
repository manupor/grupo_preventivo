import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import Lightbox from '../components/Lightbox'
import { galleryCategories } from '../data/constants'

export default function ProjectsHome() {
  const [activeTab, setActiveTab] = useState(galleryCategories[0].id)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const activeCategory = galleryCategories.find((cat) => cat.id === activeTab)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + activeCategory.images.length) % activeCategory.images.length)
  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % activeCategory.images.length)

  return (
    <section className="section bg-slate-50">
      <div className="container-site">
        <SectionHeader
          label="Proyectos"
          title="Resultados que respaldan nuestra experiencia"
          subtitle="Conozca fotografías reales de nuestros trabajos, organizadas por especialidad."
        />

        <FadeIn className="flex flex-wrap justify-center gap-2 mb-10" delay={0.1}>
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === cat.id
                  ? 'bg-brand-700 text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
            >
              {cat.title}
            </button>
          ))}
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activeCategory.images.map((item, index) => (
            <FadeIn key={`${activeCategory.id}-${index}`} delay={index * 0.05}>
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-xl aspect-square w-full"
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
              </button>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-10" delay={0.2}>
          <Link to="/proyectos" className="btn-primary">
            Ver galería completa
          </Link>
        </FadeIn>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={activeCategory.images}
          index={lightboxIndex}
          title={activeCategory.title}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
