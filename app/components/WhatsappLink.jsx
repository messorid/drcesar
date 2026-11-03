"use client"

import { usePathname } from "next/navigation"

function getContentName(pathname) {
  if (pathname.includes("/lipo-hd-barinas")) return "Lipo HD"
  if (pathname.includes("/liposuccion-caracas")) return "Liposuccion"
  if (pathname.includes("/bbl-barinas")) return "BBL"
  if (pathname.includes("/retiro-biopolimeros")) return "Retiro de Biopolimeros"
  if (pathname.includes("/cirugia-mamaria")) return "Cirugia Mamaria"
  return "Consulta General"
}

// <a> plano a propósito: con next/link el click hacia wa.me no siempre
// llegaba a disparar los eventos del Pixel antes de salir de la página.
export default function WhatsappLink({
  href,
  className,
  children,
  contentName,
  label,
  ...rest
}) {
  const pathname = usePathname() || "/"

  const handleClick = () => {
    const params = {
      content_name: contentName || getContentName(pathname),
      content_category: "cirugia_plastica",
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "Contact", params)
      window.fbq("track", "Lead", params)
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "click_whatsapp", {
        event_category: "CTA",
        event_label: label || params.content_name,
      })
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </a>
  )
}
