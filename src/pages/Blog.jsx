import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'

const posts = [
  {
    id: 1,
    title: '5 señales de que su instalación eléctrica necesita mantenimiento',
    excerpt: 'Aprenda a identificar puntos calientes, fluctuaciones y otros indicadores que alertan sobre riesgos eléctricos.',
    category: 'Mantenimiento eléctrico',
    date: '2024-06-15',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Instalación+eléctrica',
  },
  {
    id: 2,
    title: '¿Cuándo alquilar un generador para su empresa?',
    excerpt: 'Descubra las situaciones en las que un generador de respaldo es la mejor solución para mantener la operación.',
    category: 'Alquiler de energía',
    date: '2024-05-28',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Generador',
  },
  {
    id: 3,
    title: 'Importancia de la limpieza de trampas de grasa en restaurantes',
    excerpt: 'Cumpla con normativas y evite obstrucciones, olores y riesgos sanitarios con un mantenimiento adecuado.',
    category: 'Servicios industriales',
    date: '2024-05-10',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Trampa+de+grasa',
  },
  {
    id: 4,
    title: 'Termografías: prevención antes de la falla',
    excerpt: 'La inspección térmica permite detectar conexiones defectuosas y sobrecargas antes de que causen daños.',
    category: 'Termografías',
    date: '2024-04-22',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Termografía',
  },
  {
    id: 5,
    title: 'Calidad de energía: factor de potencia y armónicos',
    excerpt: 'Optimice el consumo eléctrico, extienda la vida útil de sus equipos y reduzca penalizaciones.',
    category: 'Calidad de energía',
    date: '2024-04-05',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Calidad+de+energía',
  },
  {
    id: 6,
    title: 'Normativa de pararrayos en Costa Rica',
    excerpt: 'Conozca los requisitos para la protección contra descargas atmosféricas en edificaciones e industria.',
    category: 'Pararrayos',
    date: '2024-03-18',
    image: 'https://placehold.co/800x450/0b1f3a/60a5fa?text=Pararrayos',
  },
]

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
              <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-slate-100">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="px-2 py-1 rounded bg-brand-50 text-brand-700 font-medium">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
                  <button className="text-brand-700 font-semibold text-sm hover:text-brand-900 text-left">Leer más</button>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-10 text-sm">Las publicaciones pueden conectarse a un CMS o generarse como páginas estáticas.</p>
        </div>
      </section>

      <CTABanner title="¿Necesita asesoría técnica?" description="Nuestros ingenieros pueden orientarle sobre la mejor solución para su caso." />
    </>
  )
}
