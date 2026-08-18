import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import CTABanner from '../components/CTABanner'
import { blogPosts, getPostBySlug } from '../data/blogPosts'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <NotFound />

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Grupo Preventivo</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <section className="pt-32 pb-12 bg-brand-900">
        <div className="container-site px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-900 hover:bg-brand-100 text-sm font-medium shadow-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-brand-800/60 border border-brand-700 text-brand-100 text-xs font-semibold uppercase tracking-wide mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 text-slate-300 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} de lectura
            </span>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden mb-10 aspect-video bg-slate-100"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="prose-content space-y-8">
            {post.content.map((block, index) => (
              <motion.div
                key={block.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-brand-900 mb-3">{block.heading}</h2>
                <p className="text-slate-700 leading-relaxed">{block.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-slate-200">
            <p className="text-slate-600 mb-4">
              ¿Necesita ayuda con esta especialidad en su operación? Nuestro equipo técnico puede asesorarle.
            </p>
            <Link to="/cotizar" className="btn-primary">
              Solicitar cotización
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-site px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-brand-900 mb-8">Más artículos técnicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="aspect-video bg-slate-100 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-brand-700 uppercase tracking-wide">{p.category}</span>
                    <h4 className="text-base font-bold text-brand-900 mt-1 line-clamp-2">{p.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner title="¿Necesita asesoría técnica?" description="Nuestros ingenieros pueden orientarle sobre la mejor solución para su caso." />
    </>
  )
}
