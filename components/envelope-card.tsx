"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, X, ZoomIn } from "lucide-react"

interface EnvelopeCardProps {
  imageSrc?: string
  letterTitle?: string
  letterMessage?: string
}

export default function EnvelopeCard({
  imageSrc = "/notre-photo.jpg",
  letterTitle = "Un mot pour toi",
  letterMessage = "Merci de partager toutes ces aventures avec moi. Clique sur la photo pour l'agrandir en plein écran !",
}: EnvelopeCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto my-8 px-4">
      {/* Conteneur principal de l'enveloppe */}
      <div
        onClick={handleOpen}
        className={`relative w-full aspect-[4/3] cursor-pointer transition-all duration-500 [perspective:1000px] ${
          !isOpen ? "hover:scale-105" : ""
        }`}
      >
        {/* Ombre portée au sol */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/15 blur-md rounded-full" />

        {/* Corps de l'enveloppe */}
        <div className="relative w-full h-full bg-[#d8a870] rounded-lg shadow-2xl overflow-hidden border border-[#b8864e] flex flex-col justify-end">
          
          {/* Fond intérieur de l'enveloppe (Motif élégant) */}
          <div className="absolute inset-0 bg-[#3a1c24] flex items-center justify-center">
            <div className="opacity-10 text-rose-200 text-xs font-mono select-none p-4 text-center leading-relaxed">
              ♥ MEMORIES ♥ MEMORIES ♥ MEMORIES ♥ MEMORIES ♥
            </div>
          </div>

          {/* LA LETTRE ET LA PHOTO (Qui glissent vers le haut à l'ouverture) */}
          <div
            className={`absolute left-4 right-4 bg-amber-50/95 p-4 rounded-t-lg shadow-md border border-amber-200/80 transition-all duration-700 ease-out z-20 flex flex-col items-center gap-3 ${
              isOpen
                ? "bottom-12 translate-y-0 opacity-100"
                : "bottom-2 translate-y-6 opacity-0 pointer-events-none"
            }`}
          >
            <h3 className="font-serif font-bold text-[#5c2434] text-center text-lg">
              {letterTitle}
            </h3>
            <p className="text-xs text-stone-600 text-center leading-relaxed">
              {letterMessage}
            </p>

            {/* Miniature cliquable pour voir en grand */}
            <div
              onClick={(e) => {
                e.stopPropagation()
                setIsFullScreen(true)
              }}
              className="relative w-full h-36 rounded-lg overflow-hidden border-2 border-white shadow-sm group cursor-zoom-in"
            >
              <Image
                src={imageSrc}
                alt="Notre souvenir"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs gap-1 font-medium">
                <ZoomIn className="w-4 h-4" /> Voir en grand
              </div>
            </div>
          </div>

          {/* Rabats latéraux (Origami Kraft) */}
          <div className="absolute inset-0 pointer-events-none z-30">
            {/* Gauche */}
            <div
              className="absolute inset-0 bg-[#c49258] shadow-[inset_-5px_0_10px_rgba(0,0,0,0.15)]"
              style={{ clipPath: "polygon(0 0, 50% 50%, 0 100%)" }}
            />
            {/* Droite */}
            <div
              className="absolute inset-0 bg-[#b8864e] shadow-[inset_5px_0_10px_rgba(0,0,0,0.15)]"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}
            />
            {/* Bas */}
            <div
              className="absolute inset-0 bg-[#cc9a60] shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"
              style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 45%)" }}
            />
          </div>

          {/* Rabat supérieur (S'ouvre vers le haut) */}
          <div
            className={`absolute inset-0 z-40 origin-top transition-transform duration-700 ease-in-out pointer-events-none ${
              isOpen ? "[transform:rotateX(180deg)]" : "[transform:rotateX(0deg)]"
            }`}
          >
            <div
              className="w-full h-full bg-[#d8a870] shadow-md border-b border-[#a3733e]"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 55%)" }}
            />
          </div>

          {/* Sceau de cire (Au centre, disparaît à l'ouverture) */}
          {!isOpen && (
            <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-rose-800 shadow-lg border-2 border-rose-900 flex items-center justify-center text-rose-100 animate-pulse">
                <Heart className="w-6 h-6 fill-current" />
              </div>
            </div>
          )}
        </div>
      </div>

      {!isOpen && (
        <p className="text-xs text-rose-700/70 mt-4 animate-bounce font-medium">
          Clique sur le sceau pour ouvrir l'enveloppe
        </p>
      )}

      {/* 2. MODALE PHOTO PLEIN ÉCRAN (Répond au problème de taille) */}
      {isFullScreen && (
        <div
          onClick={() => setIsFullScreen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-200"
        >
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center">
            <Image
              src={imageSrc}
              alt="Notre souvenir en grand"
              fill
              className="object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}