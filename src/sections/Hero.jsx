import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, ShieldCheck, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-900">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://placehold.co/1920x1080/0b1f3a/3b82f6?text=Grupo+Preventivo+-+Ingeniería+Industrial"
          alt="Fondo industrial"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/70" />

      <div className="container-site relative z-10 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
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
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl"
          >
            Grupo Preventivo es su aliado estratégico en ingeniería, mantenimiento eléctrico, alquiler de energía y servicios industriales en Costa Rica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link to="/cotizar" className="btn-primary bg-energy-500 hover:bg-energy-600 text-brand-900 text-base">
              Solicitar cotización
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/servicios" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              Conocer servicios
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-sm text-slate-300"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-energy-500" />
              <span>Respuesta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-energy-500" />
              <span>Personal certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-energy-500" />
              <span>Cobertura nacional</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
