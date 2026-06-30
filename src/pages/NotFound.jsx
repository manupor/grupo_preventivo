import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Grupo Preventivo</title>
        <meta name="description" content="La página solicitada no existe. Vuelva al inicio de Grupo Preventivo." />
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="container-site text-center px-4">
          <AlertTriangle className="w-16 h-16 text-energy-500 mx-auto mb-6" />
          <h1 className="text-5xl font-extrabold text-brand-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Página no encontrada</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">La página que busca no existe o ha sido movida. Le invitamos a regresar al inicio.</p>
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  )
}
