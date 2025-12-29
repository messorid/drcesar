"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 1200) // duración total del loader

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
      {/* Contenedor */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Ciudades (arriba) */}
        <div className="absolute top-12 text-sm tracking-wide text-slate-300 animate-slide-down">
          Caracas · Barinas · San Cristóbal
        </div>

        {/* Logo */}
        <div className="animate-fade-scale">
          <Image
            src="/images/logo-dr-cesar.png"
            alt="Dr César Rosales"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* Servicios (abajo) */}
        <div className="absolute bottom-16 text-sm text-slate-300 animate-slide-up text-center px-6">
          Retiro de Biopolímeros · Reconstrucción <br />
          Contorno Corporal · Lipo HD · Cirugía Mamaria
        </div>
      </div>
    </div>
  )
}
