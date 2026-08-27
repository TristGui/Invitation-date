import Link from "next/link"
import DaysCounter from "@/components/days-counter"
import { CalendarHeart, MapPin, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fdf2f4] flex flex-col items-center justify-center p-6 text-[#5c2434]">
      {/* En-tête */}
      <div className="text-center max-w-lg mb-4">
        <div className="inline-flex items-center justify-center p-3 bg-rose-100 text-rose-500 rounded-full mb-4">
          <Sparkles className="w-6 h-6" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-3">
          Notre Univers
        </h1>
        <p className="text-rose-700/80 text-base sm:text-lg">
          Bienvenue sur notre petit espace à nous.
        </p>
      </div>

      {/* Compteur de jours */}
      <DaysCounter />

      {/* Grille des accès / cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full mt-4">
        
        {/* Carte : Organiser un date (Pointe vers /date) */}
        <Link 
          href="/date" 
          className="group bg-white p-6 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center cursor-pointer hover:-translate-y-1"
        >
          <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-100 transition-colors">
            <CalendarHeart className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-serif font-semibold mb-2 text-[#5c2434]">
            On se fait un date ?
          </h2>
          <p className="text-sm text-rose-950/60 leading-relaxed">
            Choisis l'activité et le jour qui te conviennent, je m'occupe du reste.
          </p>
        </Link>

        {/* Carte : Adresses & Voyages */}
        <Link 
          href="/carte"
          className="group bg-card p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center cursor-pointer hover:-translate-y-1"
        >
          <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-3 group-hover:bg-rose-100 transition-colors">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-serif font-semibold mb-1 text-[#5c2434]">
            Nos adresses & voyages
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            La carte de nos restos préférés et de nos escapades.
          </p>
        </Link>

      </div>
    </main>
  )
}