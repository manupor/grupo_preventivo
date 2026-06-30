import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gallery } from '../data/constants'

export default function GalleryHome() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="text-energy-600 font-semibold text-sm uppercase tracking-wide">Galería</span>
          <h2 className="section-title mt-2">Conozca nuestra operación</h2>
          <p className="section-subtitle">Personal, vehículos, equipos y trabajos que respaldan nuestro compromiso con la calidad.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
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
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/proyectos" className="btn-secondary">
            Ver más imágenes
          </Link>
        </div>
      </div>
    </section>
  )
}
