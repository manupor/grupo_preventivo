import { MessageCircle } from 'lucide-react'

const PHONE = '50600000000' // TODO: reemplazar con número real de Grupo Preventivo
const MESSAGE = 'Hola,%20me%20interesa%20solicitar%20una%20cotización%20con%20Grupo%20Preventivo.'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
