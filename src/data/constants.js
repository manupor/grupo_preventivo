import {
  Zap, Wrench, Cable, TowerControl, BatteryCharging, Activity,
  ShieldCheck, Search, Thermometer, Droplets, Trash2, Factory,
  Settings, Building2, Stethoscope, Hotel, UtensilsCrossed, Home,
  Landmark, Briefcase, CheckCircle2, Clock, Users, MapPin, BadgeCheck,
  HardHat, Shield,
} from 'lucide-react'

export const services = [
  {
    id: 'mantenimiento-electrico',
    title: 'Mantenimiento eléctrico preventivo y correctivo',
    description: 'Programas de mantenimiento que reducen fallas, prolongan la vida útil de equipos y garantizan la continuidad operativa de su planta o instalación.',
    icon: Wrench,
    category: 'electricidad',
  },
  {
    id: 'instalaciones-electricas',
    title: 'Instalaciones eléctricas industriales y comerciales',
    description: 'Diseño, ejecución y certificación de instalaciones eléctricas conforme a normativa costarricense y estándares internacionales.',
    icon: Zap,
    category: 'electricidad',
  },
  {
    id: 'alquiler-generadores',
    title: 'Alquiler y suministro de energía con generadores hasta 700 kW',
    description: 'Generadores de respaldo y plantas eléctricas móviles para eventos, obras, industria y emergencias. Potencia confiable cuando la necesite.',
    icon: BatteryCharging,
    category: 'energia',
  },
  {
    id: 'torres-iluminacion',
    title: 'Alquiler de torres de iluminación',
    description: 'Torres de iluminación móviles para construcción, eventos, minería y zonas de trabajo nocturnas. Entrega rápida a nivel nacional.',
    icon: TowerControl,
    category: 'energia',
  },
  {
    id: 'cables-camlock',
    title: 'Alquiler de cables Camlock 2/0 y 4/0',
    description: 'Cables de conexión industrial para generadores y equipos de alta potencia. Seguros, certificados y listos para operación.',
    icon: Cable,
    category: 'energia',
  },
  {
    id: 'calidad-energia',
    title: 'Calidad de energía',
    description: 'Análisis de armónicos, factor de potencia, disturbios y estabilidad de red. Optimizamos su sistema para eficiencia y menor consumo.',
    icon: Activity,
    category: 'electricidad',
  },
  {
    id: 'pararrayos',
    title: 'Pararrayos',
    description: 'Instalación, mantenimiento y certificación de sistemas de protección contra descargas atmosféricas para edificaciones e industria.',
    icon: ShieldCheck,
    category: 'electricidad',
  },
  {
    id: 'transformadores',
    title: 'Diagnóstico y evaluación de transformadores',
    description: 'Pruebas especializadas, análisis de aceite, termografías y evaluación del estado de transformadores de potencia y distribución.',
    icon: Search,
    category: 'electricidad',
  },
  {
    id: 'termografias',
    title: 'Termografías',
    description: 'Inspección térmica con cámara infrarroja para detectar puntos calientes, sobrecargas y conexiones defectuosas antes de que fallen.',
    icon: Thermometer,
    category: 'electricidad',
  },
  {
    id: 'trampas-grasa',
    title: 'Limpieza de trampas de grasa',
    description: 'Servicio de limpieza, mantenimiento y disposición responsable de residuos de grasa en restaurantes, hoteles e industria alimentaria.',
    icon: Droplets,
    category: 'industrial',
  },
  {
    id: 'tanques-septicos',
    title: 'Limpieza de tanques sépticos',
    description: 'Limpieza, bombeo y disposición final de tanques sépticos con personal capacitado y equipos adecuados.',
    icon: Trash2,
    category: 'industrial',
  },
  {
    id: 'plantas-tratamiento',
    title: 'Limpieza y mantenimiento de plantas de tratamiento',
    description: 'Operación, mantenimiento y limpieza de PTARs, asegurando cumplimiento ambiental y funcionamiento continuo.',
    icon: Factory,
    category: 'industrial',
  },
  {
    id: 'mantenimiento-especializado',
    title: 'Servicios especializados de mantenimiento',
    description: 'Soluciones a la medida para equipos críticos: bombas, compresores, sistemas de bombeo, aire acondicionado industrial y más.',
    icon: Settings,
    category: 'industrial',
  },
]

export const sectors = [
  { label: 'Industria', icon: Factory },
  { label: 'Comercio', icon: Building2 },
  { label: 'Hospitales', icon: Stethoscope },
  { label: 'Hoteles', icon: Hotel },
  { label: 'Restaurantes', icon: UtensilsCrossed },
  { label: 'Condominios', icon: Home },
  { label: 'Instituciones públicas', icon: Landmark },
  { label: 'Empresas de servicios', icon: Briefcase },
]

export const benefits = [
  {
    title: 'Respuesta rápida',
    description: 'Atención ágil en todo el territorio nacional para emergencias y mantenimientos programados.',
    icon: Clock,
  },
  {
    title: 'Personal capacitado',
    description: 'Ingenieros y técnicos certificados con experiencia comprobada en el sector industrial.',
    icon: Users,
  },
  {
    title: 'Cobertura nacional',
    description: 'Operamos en todo Costa Rica, llevando soluciones eléctricas e industriales donde las necesite.',
    icon: MapPin,
  },
  {
    title: 'Seguridad',
    description: 'Cumplimiento estricto de normas de seguridad, salud ocupacional y protección ambiental.',
    icon: Shield,
  },
  {
    title: 'Calidad garantizada',
    description: 'Procesos validados, materiales certificados y control en cada etapa del proyecto.',
    icon: BadgeCheck,
  },
  {
    title: 'Experiencia de +14 años',
    description: 'Más de una década resolviendo desafíos eléctricos e industriales de empresas costarricenses.',
    icon: HardHat,
  },
]

export const faqs = [
  {
    question: '¿Atienden emergencias eléctricas fuera del horario regular?',
    answer: 'Sí. Contamos con equipos de respuesta para atender emergencias eléctricas e industriales en horario extendido. Contacte nuestra línea de atención para coordinar la respuesta más rápida posible.',
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer: 'Puede completar el formulario de cotización en esta web, escribirnos por WhatsApp o llamarnos directamente. Un asesor técnico le contactará para entender su necesidad y enviarle una propuesta detallada.',
  },
  {
    question: '¿Trabajan en todo Costa Rica?',
    answer: 'Sí. Grupo Preventivo tiene cobertura nacional y puede desplazar equipos, personal y maquinaria a cualquier zona del país.',
  },
  {
    question: '¿Qué tipo de garantía ofrecen sobre sus servicios?',
    answer: 'Garantizamos el cumplimiento de normas técnicas vigentes y la calidad de nuestros trabajos. Cada proyecto incluye documentación técnica, informes y seguimiento post-servicio según el alcance contratado.',
  },
  {
    question: '¿Tienen equipo propio de generadores y torres de iluminación?',
    answer: 'Sí. Contamos con flota propia de generadores de diversas capacidades, torres de iluminación y cables Camlock, lo que nos permite ofrecer tiempos de respuesta cortos y tarifas competitivas.',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Subestación industrial – antes y después',
    category: 'Mantenimiento eléctrico',
    client: 'Cliente industrial',
    description: 'Limpieza, termografía y ajuste de conexiones en subestación de 500 kVA. Se eliminaron puntos calientes y se normalizó el factor de potencia.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Subestación',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Subestación',
    serviceType: 'electricidad',
  },
  {
    id: 2,
    title: 'Instalación de generadores de respaldo',
    category: 'Alquiler de energía',
    client: 'Hotel en Guanacaste',
    description: 'Suministro de generadores de 300 kW durante temporada alta, garantizando operación continua de aires acondicionados y sistemas críticos.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Generadores',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Generadores',
    serviceType: 'energia',
  },
  {
    id: 3,
    title: 'Mantenimiento de planta de tratamiento',
    category: 'Servicios industriales',
    client: 'Condominio residencial',
    description: 'Limpieza, desazolve y ajuste de PTAR, cumpliendo con requisitos ambientales y mejorando el rendimiento del sistema.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+PTAR',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+PTAR',
    serviceType: 'industrial',
  },
  {
    id: 4,
    title: 'Termografía de tableros eléctricos',
    category: 'Termografías',
    client: 'Centro comercial',
    description: 'Inspección térmica en tableros principales y secundarios, identificando conexiones defectuosas y previendo fallas mayores.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Termografía',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Termografía',
    serviceType: 'electricidad',
  },
  {
    id: 5,
    title: 'Limpieza de trampas de grasa',
    category: 'Servicios industriales',
    client: 'Restaurante',
    description: 'Limpieza profunda de trampa de grasa y líneas de desague, eliminando olores y riesgos de obstrucción.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Trampa',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Trampa',
    serviceType: 'industrial',
  },
  {
    id: 6,
    title: 'Iluminación de obra con torres móviles',
    category: 'Alquiler de equipos',
    client: 'Constructora',
    description: 'Instalación de torres de iluminación en obra de infraestructura para trabajo nocturno seguro.',
    beforeImage: 'https://placehold.co/800x450/1e293b/94a3b8?text=Antes+-+Obra',
    afterImage: 'https://placehold.co/800x450/0f172a/60a5fa?text=Después+-+Obra',
    serviceType: 'energia',
  },
]

export const gallery = [
  { id: 1, src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Personal+GP', alt: 'Personal de Grupo Preventivo', category: 'personal' },
  { id: 2, src: 'https://placehold.co/800x600/0f172a/60a5fa?text=Vehículos+y+equipos', alt: 'Vehículos y equipos', category: 'equipos' },
  { id: 3, src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Trabajo+eléctrico', alt: 'Trabajo eléctrico', category: 'trabajos' },
  { id: 4, src: 'https://placehold.co/800x600/0f172a/60a5fa?text=Instalación+industrial', alt: 'Instalación industrial', category: 'instalaciones' },
  { id: 5, src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Generador', alt: 'Generador de respaldo', category: 'equipos' },
  { id: 6, src: 'https://placehold.co/800x600/0f172a/60a5fa?text=Torre+de+iluminación', alt: 'Torre de iluminación', category: 'equipos' },
  { id: 7, src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Termografía', alt: 'Termografía', category: 'trabajos' },
  { id: 8, src: 'https://placehold.co/800x600/0f172a/60a5fa?text=Planta+de+tratamiento', alt: 'Planta de tratamiento', category: 'instalaciones' },
]

export const testimonials = [
  {
    id: 1,
    text: 'Respuesta rápida y profesional. Resolvieron nuestra falla eléctrica en menos de lo esperado.',
    author: 'Ing. Carlos M.',
    role: 'Gerente de planta',
  },
  {
    id: 2,
    text: 'El servicio de alquiler de generadores nos salvó la temporada alta. Totalmente recomendados.',
    author: 'María F.',
    role: 'Administradora de hotel',
  },
  {
    id: 3,
    text: 'Cumplen con los plazos, dejan documentación clara y el personal es muy técnico.',
    author: 'Andrés Q.',
    role: 'Mantenimiento de condominio',
  },
]

export const companyInfo = {
  name: 'Grupo Preventivo',
  slogan: 'Ingeniería en Mantenimiento Industrial',
  phone: '+506 0000-0000',
  email: 'info@grupopreventivo.com',
  address: 'Costa Rica',
  schedule: 'Lunes a viernes: 7:00 a.m. - 5:00 p.m.',
  years: 14,
  whatsapp: '50600000000',
}

export const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Clientes', to: '/clientes' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contáctenos', to: '/contacto' },
  { label: 'Cotizar', to: '/cotizar' },
]

export const siteKeywords = [
  'mantenimiento eléctrico Costa Rica',
  'ingeniería industrial Costa Rica',
  'alquiler generadores Costa Rica',
  'torres iluminación Costa Rica',
  'termografías Costa Rica',
  'calidad de energía Costa Rica',
  'limpieza trampas grasa Costa Rica',
  'mantenimiento plantas tratamiento Costa Rica',
]
