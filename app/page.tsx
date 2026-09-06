import Link from "next/link"
import DaysCounter from "@/components/days-counter"
import { Link2, Lock, MapPin, Flame } from "lucide-react"

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-background px-4 py-12 text-center text-foreground">
      
      {/* En-tête Gothique */}
      <div className="max-w-lg mb-4 flex flex-col items-center">
        <div className="inline-flex items-center justify-center p-3 bg-red-950/40 text-red-700 rounded-full mb-3 border border-red-900/50">
          <Link2 className="w-6 h-6 rotate-45" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-widest text-red-800 uppercase">
          Liaison Éternelle
        </h1>
        <p className="text-zinc-500 text-xs mt-1 tracking-wider uppercase">
          Enchaînés par le temps
        </p>
      </div>

      {/* Compteur de jours */}
      <DaysCounter />

      {/* Liens du menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full mt-6">
        
        {/* Carte : Date / Pacte */}
        <Link 
          href="/date" 
          className="group bg-zinc-900/80 p-6 rounded-xl border border-zinc-800 hover:border-red-900 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
        >
          <div className="w-12 h-12 bg-red-950/30 rounded-full flex items-center justify-center text-red-600 mb-3 group-hover:scale-110 transition-transform border border-red-900/30">
            <Lock className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-serif font-semibold mb-1 text-zinc-200">
            Sceller un RDV
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Choisis notre prochaine escapade nocturne.
          </p>
        </Link>

        {/* Carte : Lieux */}
        <Link 
          href="/carte"
          className="group bg-zinc-900/80 p-6 rounded-xl border border-zinc-800 hover:border-red-900 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
        >
          <div className="w-12 h-12 bg-red-950/30 rounded-full flex items-center justify-center text-red-600 mb-3 group-hover:scale-110 transition-transform border border-red-900/30">
            <MapPin className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-serif font-semibold mb-1 text-zinc-200">
            Nos Repaires
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            La carte de nos lieux secrets et repères.
          </p>
        </Link>

      </div>
    </main>
  )
}