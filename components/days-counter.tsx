"use client"

import { useEffect, useState } from "react"

export default function DaysCounter() {
  const [daysCount, setDaysCount] = useState<number | null>(null)

  useEffect(() => {
    const startDate = new Date("2022-07-22T00:00:00")
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    setDaysCount(diffDays)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl border shadow-sm max-w-sm w-full text-center my-4">
      <span className="text-xs font-medium text-rose-400 uppercase tracking-widest mb-1">
        Ensemble depuis le 22 juillet 2022
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-extrabold text-[#5c2434]">
          {daysCount !== null ? daysCount : "..."}
        </span>
        <span className="text-xl font-semibold text-rose-500">jours</span>
      </div>
      <p className="text-xs text-muted-foreground mt-2 font-light">
        ...et ce n'est que le début ❤️
      </p>
    </div>
  )
}