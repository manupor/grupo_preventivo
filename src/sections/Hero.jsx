import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, ShieldCheck, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-900">
      <div className="absolute inset-0">
        <img
          src="/images/galeria/equipos/equipo-1.png"
          alt="Fondo industrial"
          className="w-full h-full object-cover saturate-[1.05] contrast-[1.03]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 from-0% via-brand-900/65 via-35% to-transparent to-60%" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/25 via-transparent to-brand-900/25" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16 md:py-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-800/60 border border-brand-700 text-brand-100 text-sm font-medium mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>+14 años de experiencia en soluciones eléctricas e industriales</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Mantenimiento industrial que mantiene su operación en marcha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-[560px]"
          >
            Grupo Preventivo es su aliado estratégico en ingeniería, mantenimiento eléctrico, alquiler de energía y servicios industriales en Costa Rica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link to="/cotizar" className="btn-primary bg-brand-600 hover:bg-brand-700 text-white text-base shadow-none">
              Solicitar cotización
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/servicios" className="btn-secondary bg-transparent text-white border-white/30 hover:bg-white/10">
              Conocer servicios
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-500" />
              <span>Respuesta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              <span>Personal certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-500" />
              <span>Cobertura nacional</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
