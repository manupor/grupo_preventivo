import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'
import Lightbox from '../components/Lightbox'
import { testimonials, galleryCategories } from '../data/constants'

export default function Projects() {
  const [activeTab, setActiveTab] = useState(galleryCategories[0].id)
  const [lightbox, setLightbox] = useState(null)

  const activeCategory = galleryCategories.find((cat) => cat.id === activeTab)

  const lightboxCategory = lightbox
    ? galleryCategories.find((cat) => cat.id === lightbox.categoryId)
    : null

  const openLightbox = (categoryId, index) => setLightbox({ categoryId, index })
  const closeLightbox = () => setLightbox(null)
  const prevImage = () =>
    setLightbox((l) => ({
      ...l,
      index: (l.index - 1 + lightboxCategory.images.length) % lightboxCategory.images.length,
    }))
  const nextImage = () =>
    setLightbox((l) => ({
      ...l,
      index: (l.index + 1) % lightboxCategory.images.length,
    }))

  return (
    <>
      <Helmet>
        <title>Proyectos | Grupo Preventivo</title>
        <meta name="description" content="Galería de proyectos de mantenimiento eléctrico, instalaciones industriales y servicios especializados de Grupo Preventivo en Costa Rica." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Proyectos</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Fotografías reales de nuestros trabajos, organizadas por especialidad.</p>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-site">
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
            <SectionHeader title="Proyectos por especialidad" subtitle="Seleccione una categoría para ver las fotografías." />

            <div className="flex flex-wrap justify-center gap-2 mb-10">
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
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activeCategory.images.map((item, i) => (
                <button
                  type="button"
                  key={`${activeCategory.id}-${i}`}
                  onClick={() => openLightbox(activeCategory.id, i)}
                  className="group relative overflow-hidden rounded-xl aspect-square text-left"
                >
                  <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/95 via-brand-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-energy-400 text-[11px] font-bold uppercase tracking-wide mb-1">
                      {activeCategory.title}
                    </span>
                    <span className="text-white font-semibold text-sm mb-1">{item.alt}</span>
                    {activeCategory.industryHint && (
                      <span className="text-white/70 text-xs mb-3">{activeCategory.industryHint}</span>
                    )}
                    <span className="inline-flex items-center gap-1 text-white text-xs font-semibold">
                      Ver proyecto <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="¿Tiene un proyecto similar?" description="Cuéntenos los detalles y le ayudamos a planificar la solución adecuada." />

      {lightboxCategory && (
        <Lightbox
          images={lightboxCategory.images}
          index={lightbox.index}
          title={lightboxCategory.title}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  )
}
