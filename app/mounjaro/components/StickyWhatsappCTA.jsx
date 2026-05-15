"use client"

import Link from "next/link"
import { fbEvent } from "@/app/lib/fbpixel"

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
    fbEvent("Contact")
    fbEvent("Lead")
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[rgba(201,169,106,0.35)] bg-ink/90 backdrop-blur-xl">
      <Link
        href={`https://wa.me/584245846191?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        onClick={handleWhatsappClick}
        className="group relative flex w-full items-center justify-center gap-3 overflow-hidden py-4 text-[0.8rem] uppercase tracking-[0.2em] font-medium text-gold-light transition-colors hover:text-cream"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold animate-gold-pulse" />
        Agendar consulta por WhatsApp
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(201,169,106,0.18)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        />
      </Link>
    </div>
  )
}
