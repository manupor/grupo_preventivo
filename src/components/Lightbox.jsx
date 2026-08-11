import { useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, index, title, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!images || !images.length || index === null || index === undefined) return null

  const current = images[index]

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
        aria-label="Cerrar"
      >
        <X className="w-8 h-8" />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-1 md:left-6 text-white/80 hover:text-white p-2 z-10"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-9 h-9 md:w-10 md:h-10" />
        </button>
      )}

      <div
        className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
        />
        <div className="mt-4 text-center">
          {title && (
            <p className="text-brand-300 text-xs font-bold uppercase tracking-wider">{title}</p>
          )}
          <p className="text-white text-base mt-1">{current.alt}</p>
          <p className="text-slate-400 text-sm mt-1">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-1 md:right-6 text-white/80 hover:text-white p-2 z-10"
          aria-label="Siguiente foto"
        >
          <ChevronRight className="w-9 h-9 md:w-10 md:h-10" />
        </button>
      )}
    </div>
  )
}
