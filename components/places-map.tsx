"use client"

import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Correction des icônes par défaut de Leaflet sous Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

// Vos adresses de restaurants à Paris / IDF
const restaurants = [
  { id: 1, name: "PNY Marais", lat: 48.85819138153039, lng: 2.3570741064783562, note: "Top pour un burger en amoureux !" },
  { id: 2, name: "La villa 9trois", lat: 48.864025780701134, lng: 2.4332550097704697, note: "Top pour un étoilé en amoureux !" },
  { id: 3, name: "La taverne de Zaho", lat: 48.8737686194688, lng: 2.3629348418253646, note: "Top pour des nouilles en amoureux !" },
  { id: 4, name: "Les Gros Tonton de Paname", lat: 48.868538570156744, lng: 2.3543216199354737, note: "Top pour des nouilles en amoureux !" }
]
// Vos destinations de voyage
const trips = [
  { id: 1, place: "Marrakech", lat: 31.6295, lng: -7.9811, desc: "Voyage en mars 2026 \ud83c\udf34" },
  { id: 2, place: "Guatemala", lat: 14.6349, lng: -90.5069, desc: "Aventure en ao\u00fbt 2026 \ud83c\udf0b" },
  { id: 3, place: "Venise", lat: 45.440363109186606, lng: 12.340798236436102, desc: "Voyage en mars 2024 \ud83c\udf0b" },
  { id: 5, place: "Chypre", lat: 35.042583179702405, lng: 33.237540196903296, desc: "Voyage en mai 2025 \ud83c\udf0b" },
  { id: 6, place: "Corfou", lat: 39.62537403113246, lng: 19.846881451067688, desc: "Voyage en ao\u00fbt 2025 \ud83c\udf0b" }
]
}
export default function PlacesMap() {
  const [tab, setTab] = useState<"paris" | "world">("paris")

  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-4">
      {/* Sélecteur d'onglets */}
      <div className="flex bg-rose-100/60 p-1 rounded-xl gap-1">
        <button
          onClick={() => setTab("paris")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            tab === "paris" ? "bg-white text-[#5c2434] shadow-sm" : "text-rose-700/70 hover:text-[#5c2434]"
          }`}
        >
          🇫🇷 Paris & Restos
        </button>
        <button
          onClick={() => setTab("world")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            tab === "world" ? "bg-white text-[#5c2434] shadow-sm" : "text-rose-700/70 hover:text-[#5c2434]"
          }`}
        >
          🌍 Vos Voyages
        </button>
      </div>

      {/* Carte Interactive */}
      <div className="w-full h-[500px] rounded-2xl overflow-hidden border shadow-sm z-0">
        {tab === "paris" ? (
          <MapContainer center={[48.8566, 2.3522]} zoom={12} className="w-full h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {restaurants.map((item) => (
              <Marker key={item.id} position={[item.lat, item.lng]} icon={customIcon}>
                <Popup>
                  <strong>{item.name}</strong>
                  <p className="text-xs text-gray-600 m-0">{item.note}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <MapContainer center={[20, 0]} zoom={2} className="w-full h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {trips.map((item) => (
              <Marker key={item.id} position={[item.lat, item.lng]} icon={customIcon}>
                <Popup>
                  <strong>{item.place}</strong>
                  <p className="text-xs text-gray-600 m-0">{item.desc}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  )
}