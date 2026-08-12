import {
  Zap, Wrench, Cable, TowerControl, BatteryCharging, Activity,
  ShieldCheck, Search, Thermometer, Droplets, Trash2, Factory,
  Settings, Building2, Stethoscope, Hotel, UtensilsCrossed, Home,
  Landmark, Briefcase, CheckCircle2, Clock, Users, MapPin, BadgeCheck,
  HardHat, Shield, DoorClosed,
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
  {
    id: 'espacios-confinados',
    title: 'Trabajos en espacios confinados',
    description: 'Ingreso, monitoreo de atmósferas y trabajos seguros en espacios confinados, con personal certificado y equipo de protección especializado.',
    icon: DoorClosed,
    category: 'industrial',
  },
]

export const serviceCategoryDetails = {
  electricidad: {
    title: 'Electricidad industrial y comercial',
    intro: 'Diseñamos, instalamos y damos mantenimiento a sistemas eléctricos que garantizan la continuidad operativa de su planta, comercio o edificación, cumpliendo con la normativa vigente.',
    capabilities: [
      'Mantenimiento preventivo y correctivo de tableros y equipos',
      'Instalaciones eléctricas certificadas industriales y comerciales',
      'Diagnóstico y evaluación de transformadores',
      'Instalación de sistemas de pararrayos',
      'Termografías infrarrojas y análisis de calidad de energía',
    ],
    benefits: [
      'Reduce fallas imprevistas y paros de producción',
      'Prolonga la vida útil de equipos eléctricos',
      'Cumple con la normativa costarricense de electricidad',
      'Previene incendios y accidentes eléctricos',
    ],
    industries: ['Industria', 'Comercio', 'Hospitales', 'Instituciones públicas'],
    highlights: ['Cámaras termográficas de alta resolución', 'Personal técnico certificado'],
  },
  energia: {
    title: 'Alquiler y suministro de energía',
    intro: 'Soluciones móviles de energía para mantener su operación funcionando sin interrupciones, sin importar el tamaño ni la duración del proyecto.',
    capabilities: [
      'Generadores de respaldo hasta 700 kW',
      'Torres de iluminación móviles',
      'Cables Camlock 2/0 y 4/0',
      'Instalación, conexión y puesta en marcha',
      'Soporte técnico durante todo el alquiler',
    ],
    benefits: [
      'Continuidad operativa ante cortes de energía',
      'Respaldo confiable para eventos y construcción',
      'Entrega rápida a nivel nacional',
      'Tarifas competitivas por flota propia',
    ],
    industries: ['Hoteles', 'Construcción', 'Eventos', 'Industria'],
    highlights: ['Flota propia de generadores', 'Mantenimiento preventivo de equipos de alquiler'],
  },
  industrial: {
    title: 'Servicios industriales especializados',
    intro: 'Atendemos necesidades críticas de mantenimiento e higiene industrial que garantizan cumplimiento ambiental y operación segura.',
    capabilities: [
      'Limpieza de trampas de grasa',
      'Limpieza de tanques sépticos',
      'Mantenimiento de plantas de tratamiento',
      'Trabajos en espacios confinados',
      'Mantenimiento de bombas, compresores y sistemas críticos',
    ],
    benefits: [
      'Cumplimiento de normativa ambiental',
      'Prevención de obstrucciones y malos olores',
      'Personal certificado para espacios confinados',
      'Reducción de riesgos operativos',
    ],
    industries: ['Restaurantes', 'Hoteles', 'Condominios', 'Industria'],
    highlights: ['Equipo de protección especializado', 'Monitoreo de atmósferas en espacios confinados'],
  },
}

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

export const galleryCategories = [
  {
    id: 'mantenimiento-electrico',
    title: 'Mantenimiento Eléctrico',
    industryHint: 'Industria y comercio',
    images: [1, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
      src: `/images/galeria/mantenimiento-electrico/mantenimiento-electrico-${n}.png`,
      alt: `Mantenimiento eléctrico ${n}`,
    })),
  },
  {
    id: 'generadores',
    title: 'Generadores',
    industryHint: 'Alquiler de energía',
    images: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11].map((n) => ({
      src: `/images/galeria/generadores/generador-${n}.png`,
      alt: `Generador ${n}`,
    })),
  },
  {
    id: 'equipos',
    title: 'Equipos',
    industryHint: 'Flota propia',
    images: [1, 2, 3].map((n) => ({
      src: `/images/galeria/equipos/equipo-${n}.png`,
      alt: `Equipo ${n}`,
    })),
  },
  {
    id: 'espacios-confinados',
    title: 'Espacios Confinados',
    industryHint: 'Servicios industriales',
    images: [1, 2].map((n) => ({
      src: `/images/galeria/espacios-confinados/espacio-confinado-${n}.png`,
      alt: `Trabajo en espacio confinado ${n}`,
    })),
  },
  {
    id: 'pararrayos',
    title: 'Pararrayos',
    industryHint: 'Protección eléctrica',
    images: [1, 2, 3, 4, 5, 6].map((n) => ({
      src: `/images/galeria/pararrayos/pararrayo-${n}.png`,
      alt: `Pararrayos ${n}`,
    })),
  },
  {
    id: 'transformadores',
    title: 'Transformadores',
    industryHint: 'Distribución eléctrica',
    images: [1, 2, 3, 4, 5, 6].map((n) => ({
      src: `/images/galeria/transformadores/transformador-${n}.png`,
      alt: `Transformador ${n}`,
    })),
  },
  {
    id: 'termografias',
    title: 'Termografías',
    industryHint: 'Diagnóstico predictivo',
    images: [
      { n: 1, ext: 'jpg' }, { n: 2, ext: 'jpg' }, { n: 3, ext: 'png' },
      { n: 4, ext: 'png' }, { n: 5, ext: 'png' }, { n: 6, ext: 'jpg' },
    ].map(({ n, ext }) => ({
      src: `/images/galeria/termografias/termografia-${n}.${ext}`,
      alt: `Termografía ${n}`,
    })),
  },
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
  phone: '+506 8712-1650',
  email: 'info@grupopreventivo.com',
  address: 'Costa Rica',
  schedule: 'Lunes a viernes: 7:00 a.m. - 5:00 p.m.',
  years: 14,
  whatsapp: '50687121650',
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
