import { Loader2 } from 'lucide-react'

export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-brand-700 animate-spin" />
    </div>
  )
}
