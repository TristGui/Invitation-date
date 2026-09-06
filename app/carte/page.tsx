"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Import dynamique du composant Leaflet
const PlacesMap = dynamic(() => import("@/components/places-map"), { ssr: false })

export default function CartePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center p-6">
      {/* Bouton Retour */}
      <div className="w-full max-w-4xl mb-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-rose-600 hover:text-rose-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>
      </div>

      <h1 className="text-3xl font-serif font-bold text-[#5c2434] mb-2">
        Nos Adresses & Souvenirs
      </h1>
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Retrouvez nos restaurants coup de cœur et les destinations parcourues ensemble.
      </p>

      {/* Affichage de la carte */}
      <PlacesMap />
    </main>
  )
}