import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'
import { blogPosts as posts } from '../data/blogPosts'

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Grupo Preventivo</title>
        <meta name="description" content="Artículos técnicos sobre mantenimiento eléctrico, energía, instalaciones industriales y servicios especializados en Costa Rica." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Blog técnico</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Consejos, normativas y tendencias del sector eléctrico e industrial.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site">
          <SectionHeader title="Últimas publicaciones" subtitle="Contenido preparado para posicionar el sitio en búsquedas técnicas." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="aspect-video bg-slate-100 overflow-hidden block">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="px-2 py-1 rounded bg-brand-50 text-brand-700 font-medium">{post.category}</span>
                    <span>{new Date(post.date).toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-brand-700 font-semibold text-sm hover:text-brand-900 transition-colors"
                  >
                    Leer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="¿Necesita asesoría técnica?" description="Nuestros ingenieros pueden orientarle sobre la mejor solución para su caso." />
    </>
  )
}
