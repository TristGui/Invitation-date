"use client"

import { useState } from "react"
import Image from "next/image"

export function EnvelopeCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      {/* Container principal de l'enveloppe avec perspective 3D */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full max-w-sm h-[500px] cursor-pointer perspective-1000 group"
      >
        {/* 1. PHOTO ET CONTENU (Derrière) */}
        <div 
          className={`absolute inset-x-4 top-4 bottom-4 transition-all duration-700 ease-in-out z-20 rounded-lg overflow-hidden shadow-2xl ${
            isOpen ? "-translate-y-32 scale-105 z-40" : "translate-y-0"
          }`}
        >
          <Image
            src="/photoTE.jpg"
            alt="Notre photo"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay avec message personnalisé au bas de la photo */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-center">
            <p className="font-serif text-xl font-bold">Réserve ta date ❤️</p>
          </div>
        </div>

        {/* 2. BASE ET RABAT INFÉRIEUR (Devant la photo au départ) */}
        <div className="absolute inset-0 bg-stone-300 rounded-xl shadow-xl z-30 overflow-hidden pointer-events-none border border-stone-400">
          {/* Triangle du bas fait en CSS clip-path */}
          <div 
            className="absolute inset-0 bg-stone-200"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 45%)" }}
          />
          {/* Triangles des côtés */}
          <div 
            className="absolute inset-0 bg-stone-300/80"
            style={{ clipPath: "polygon(0 0, 0 100%, 50% 50%)" }}
          />
          <div 
            className="absolute inset-0 bg-stone-300/80"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 50%)" }}
          />
        </div>

        {/* 3. RABAT SUPÉRIEUR ANIMÉ (Au-dessus) */}
        <div 
          className={`absolute inset-0 z-40 origin-top transition-transform duration-700 ease-in-out pointer-events-none ${
            isOpen ? "[transform:rotateX(180deg)] z-10" : "[transform:rotateX(0deg)]"
          }`}
        >
          <div 
            className="w-full h-full bg-stone-300 shadow-md border-b border-stone-400"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 55%)" }}
          />
        </div>

        {/* 4. SCEAU DE CIRE */}
        <div 
          className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
            isOpen ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-amber-700 border-2 border-amber-600 shadow-lg flex items-center justify-center text-amber-200 text-2xl font-serif font-bold">
            💍
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-stone-400 animate-pulse">
        {isOpen ? "Clique pour refermer" : "Clique sur le sceau pour ouvrir"}
      </p>
    </div>
  )
}