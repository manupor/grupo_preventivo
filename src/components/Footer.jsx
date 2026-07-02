import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  empresa: [
    { label: 'Nosotros', to: '/nosotros' },
    { label: 'Servicios', to: '/servicios' },
    { label: 'Proyectos', to: '/proyectos' },
    { label: 'Clientes', to: '/clientes' },
    { label: 'Blog', to: '/blog' },
  ],
  servicios: [
    { label: 'Mantenimiento eléctrico', to: '/servicios' },
    { label: 'Instalaciones eléctricas', to: '/servicios' },
    { label: 'Alquiler de generadores', to: '/servicios' },
    { label: 'Termografías', to: '/servicios' },
    { label: 'Calidad de energía', to: '/servicios' },
  ],
  legal: [
    { label: 'Política de privacidad', to: '/privacidad' },
    { label: 'Términos y condiciones', to: '/terminos' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-slate-300">
      <div className="container-site px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.svg"
                alt="Grupo Preventivo"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              Más de 14 años brindando soluciones eléctricas e industriales confiables en Costa Rica. Su aliado estratégico en mantenimiento preventivo y correctivo.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-brand-800 hover:bg-brand-700 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-brand-800 hover:bg-brand-700 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-brand-800 hover:bg-brand-700 transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-energy-500" />
                <span>+506 0000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-energy-500" />
                <span>info@grupopreventivo.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-energy-500" />
                <span>Costa Rica</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-energy-500" />
                <span>Lunes - Viernes: 7:00 a.m. - 5:00 p.m.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Grupo Preventivo. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} to={link.to} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
