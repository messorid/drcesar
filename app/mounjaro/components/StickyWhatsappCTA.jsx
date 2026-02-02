"use client"

import Link from "next/link"

export default function StickyWhatsappCTA() {
  const whatsappMessage =
    "Hola Dr Cesar Rosales, deseo informacion sobre la consulta"

  const handleWhatsappClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        event_category: "CTA",
        event_label: "Sticky WhatsApp CTA",
        value: 1,
      })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <Link
        href={`https://wa.me/584245846191?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        onClick={handleWhatsappClick}
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
