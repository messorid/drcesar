"use client"

import Link from "next/link"

export default function StickyWhatsappCTA() {
  const whatsappMessage =
    "Hola Dr Cesar Rosales, deseo informacion sobre el tratamiento con Mounjaro"

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <Link
        href={`https://wa.me/584242913148?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        className="
          block w-full text-center py-4 text-base font-medium text-white
          bg-green-500
          animate-pulse
          shadow-[0_0_20px_rgba(34,197,94,0.9)]
          hover:bg-green-600
          transition
        "
      >
        Agendar consulta por WhatsApp
      </Link>
    </div>
  )
}
