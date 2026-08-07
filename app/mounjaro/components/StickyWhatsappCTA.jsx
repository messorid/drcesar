"use client"

import { fbEvent } from "@/app/lib/fbpixel"

const WHATSAPP_MESSAGE =
  "Hola Dr Cesar Rosales, deseo informacion sobre la consulta"

const WHATSAPP_URL = `https://wa.me/584245846191?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

function WhatsappIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

export default function StickyWhatsappCTA() {
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
    <>
      {/* ---------- Mobile: barra inferior ---------- */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[rgba(201,169,106,0.35)] bg-ink/95 backdrop-blur-xl md:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsappClick}
          aria-label="Agendar consulta por WhatsApp"
          className="group relative flex min-h-[56px] w-full cursor-pointer items-center justify-center gap-3 overflow-hidden py-4 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-gold-light transition-colors hover:text-cream"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-gold-pulse" />
          Agendar consulta por WhatsApp
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[rgba(201,169,106,0.18)] to-transparent transition-transform duration-1000 group-hover:translate-x-full"
          />
        </a>
      </div>

      {/* ---------- Desktop: botón flotante ----------
          La barra full-width se leía como pie de página; un botón dorado
          con el glifo de WhatsApp se reconoce de inmediato sobre el fondo
          oscuro y mantiene la identidad de marca. */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsappClick}
        aria-label="Agendar consulta por WhatsApp"
        className="group fixed bottom-8 right-8 z-40 hidden cursor-pointer items-center gap-3 rounded-full border border-[rgba(246,233,200,0.65)] bg-[linear-gradient(135deg,#e6cfa0,#c9a96a_55%,#a8884f)] px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#1a1306] shadow-[0_10px_34px_-8px_rgba(201,169,106,0.65)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-8px_rgba(201,169,106,0.85)] md:inline-flex"
      >
        {/* Halo pulsante: refuerza la visibilidad sin desplazar el layout */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-gold-light/70 animate-whatsapp-halo"
        />
        <WhatsappIcon className="h-5 w-5 shrink-0" />
        Agendar consulta
      </a>
    </>
  )
}
