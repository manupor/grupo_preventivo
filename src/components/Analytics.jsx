import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// TODO: Reemplazar G-XXXXXXXXXX con el ID de medición de Google Analytics
const GA_ID = 'G-XXXXXXXXXX'

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_ID, { page_path: location.pathname + location.search })
    }
  }, [location])

  return null
}
