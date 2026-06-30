import { Helmet } from 'react-helmet-async'
import Hero from '../sections/Hero'
import AboutHome from '../sections/AboutHome'
import WhyUs from '../sections/WhyUs'
import ServicesHome from '../sections/ServicesHome'
import Sectors from '../sections/Sectors'
import ProjectsHome from '../sections/ProjectsHome'
import GalleryHome from '../sections/GalleryHome'
import FAQHome from '../sections/FAQHome'
import ContactHome from '../sections/ContactHome'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Grupo Preventivo | Ingeniería en Mantenimiento Industrial en Costa Rica</title>
        <meta name="description" content="Más de 14 años de experiencia en soluciones eléctricas e industriales en Costa Rica. Mantenimiento, instalaciones, alquiler de energía, termografías y más." />
      </Helmet>
      <Hero />
      <AboutHome />
      <WhyUs />
      <ServicesHome />
      <Sectors />
      <ProjectsHome />
      <GalleryHome />
      <CTABanner
        title="¿Necesita una solución confiable para su industria?"
        description="Solicite una cotización sin compromiso y un asesor técnico le contactará en breve."
      />
      <FAQHome />
      <ContactHome />
    </>
  )
}
