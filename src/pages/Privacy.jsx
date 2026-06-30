import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Grupo Preventivo</title>
        <meta name="description" content="Política de privacidad de Grupo Preventivo. Conozca cómo protegemos su información personal." />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-900">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Política de privacidad</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Información sobre el tratamiento de datos personales.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-site max-w-4xl prose prose-slate">
          <p className="text-slate-600 mb-6">En Grupo Preventivo respetamos su privacidad. Esta política describe cómo recopilamos, usamos y protegemos la información personal que usted nos proporciona a través de nuestro sitio web.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">1. Información que recopilamos</h2>
          <p className="text-slate-600 mb-4">Podemos recopilar datos como nombre, nombre de empresa, correo electrónico, teléfono y detalles del servicio requerido, únicamente cuando usted los proporciona voluntariamente a través de nuestros formularios.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">2. Uso de la información</h2>
          <p className="text-slate-600 mb-4">Utilizamos la información para responder a solicitudes de cotización, contactarle sobre nuestros servicios y mejorar la experiencia del usuario en nuestro sitio.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">3. Protección de datos</h2>
          <p className="text-slate-600 mb-4">Implementamos medidas de seguridad razonables para proteger la información contra acceso no autorizado, alteración o divulgación.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">4. Compartir información</h2>
          <p className="text-slate-600 mb-4">No vendemos ni compartimos su información personal con terceros, salvo cuando sea necesario para cumplir con obligciones legales o prestar el servicio contratado.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">5. Cookies y analíticas</h2>
          <p className="text-slate-600 mb-4">Este sitio puede utilizar cookies y herramientas de analítica (como Google Analytics) para mejorar el rendimiento y la experiencia del usuario. Puede configurar su navegador para rechazar cookies.</p>

          <h2 className="text-2xl font-bold text-brand-900 mt-8 mb-4">6. Derechos del usuario</h2>
          <p className="text-slate-600 mb-4">Usted puede solicitar acceso, rectificación o eliminación de sus datos personales escribiendo a info@grupopreventivo.com.</p>

          <p className="text-slate-600 mt-8">Esta política puede actualizarse periódicamente. Le recomendamos revisarla con regularidad.</p>
        </div>
      </section>
    </>
  )
}
