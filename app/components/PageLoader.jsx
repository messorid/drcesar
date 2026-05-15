"use client"

import { useEffect, useState } from "react"

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const leave = setTimeout(() => setLeaving(true), 1700)
    const hide = setTimeout(() => setVisible(false), 2300)
    return () => {
      clearTimeout(leave)
      clearTimeout(hide)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-ink transition-opacity duration-700 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center px-6">
        <span className="eyebrow animate-slide-down">
          Caracas · Barinas · San Cristóbal
        </span>

        <div className="my-10 flex flex-col items-center animate-fade-scale">
          <span className="flex h-24 w-24 items-center justify-center rounded-full border border-[var(--border-gold)] font-display text-4xl gold-text">
            CR
          </span>
          <h1 className="mt-6 font-display text-2xl tracking-wide text-cream">
            Dr. César Rosales
          </h1>
        </div>

        <div className="relative h-px w-44 overflow-hidden bg-[rgba(201,169,106,0.15)]">
          <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent animate-shine" />
        </div>

        <p className="mt-10 text-center text-xs tracking-[0.18em] text-stone uppercase animate-slide-up">
          Retiro de Biopolímeros · Reconstrucción
          <br />
          Contorno Corporal · Lipo HD · Cirugía Mamaria
        </p>
      </div>
    </div>
  )
}
