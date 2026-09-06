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

      {/* Carte : Organiser un date (Pointe vers /date) */}
        {/* 2. Formulaire / Pacte (Invitation) */}
      <section className="w-full max-w-xl bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 shadow-xl">
        <h2 className="text-xl font-serif text-red-700 mb-4 text-center tracking-wide uppercase">
          Sceller un RDV
        </h2>
        <DateInvitation />
      </section>

    </main>
  )
}