import { Helmet } from 'react-helmet-async'

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | Grupo Preventivo</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de Grupo Preventivo." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Términos y condiciones</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Condiciones de uso de nuestro sitio web y servicios.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site max-w-4xl prose prose-slate">
          <p className="text-slate-600 mb-6">Al acceder y utilizar el sitio web de Grupo Preventivo, usted acepta los siguientes términos y condiciones. Si no está de acuerdo, le recomendamos no utilizar el sitio.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">1. Uso del sitio</h2>
          <p className="text-slate-600 mb-4">El contenido de este sitio es informativo y comercial. Usted se compromete a utilizarlo de manera lícita y a no realizar actividades que puedan dañar el sitio o afectar su disponibilidad.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">2. Propiedad intelectual</h2>
          <p className="text-slate-600 mb-4">Todos los contenidos, imágenes, logotipos y textos son propiedad de Grupo Preventivo o de sus respectivos titulares. Queda prohibida su reproducción total o parcial sin autorización previa.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">3. Cotizaciones y contratos</h2>
          <p className="text-slate-600 mb-4">Las cotizaciones solicitadas a través del sitio web son preliminares y no constituyen una oferta contractual. Los términos comerciales finales se confirman por escrito entre las partes.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">4. Limitación de responsabilidad</h2>
          <p className="text-slate-600 mb-4">Grupo Preventivo no se responsabiliza por daños derivados del uso incorrecto de la información publicada en el sitio, ni por fallas técnicas ajenas a su control.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">5. Modificaciones</h2>
          <p className="text-slate-600 mb-4">Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">6. Ley aplicable</h2>
          <p className="text-slate-600 mb-4">Estos términos se rigen por las leyes de la República de Costa Rica. Cualquier disputa se someterá a la jurisdicción de los tribunales costarricenses.</p>
        </div>
      </section>
    </>
  )
}
