import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CTABanner({ title, description, buttonText = 'Solicitar cotización', buttonHref = '/cotizar' }) {
  return (
    <section className="bg-brand-900 py-16 md:py-20">
      <div className="container-site px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
            <p className="text-slate-300 max-w-2xl">{description}</p>
          </div>
          <Link
            to={buttonHref}
            className="btn-primary bg-energy-500 hover:bg-energy-600 text-brand-900 whitespace-nowrap"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
