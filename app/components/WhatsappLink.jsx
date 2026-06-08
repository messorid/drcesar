"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { fbEvent } from "@/app/lib/fbpixel"

function getContentName(pathname) {
  if (pathname.includes("/lipo-hd-barinas")) return "Lipo HD"
  if (pathname.includes("/bbl-barinas")) return "BBL"
  if (pathname.includes("/retiro-biopolimeros-caracas")) return "Retiro de Biopolimeros"
  return "Consulta General"
}

export default function WhatsappLink({ href, className, children }) {
  const pathname = usePathname()
  const handleClick = () => {
    const params = { content_name: getContentName(pathname), content_category: "cirugia_plastica" }
    fbEvent("Contact", params)
    fbEvent("Lead", params)
  }
  return (
    <Link href={href} className={className} onClick={handleClick} target="_blank">
      {children}
    </Link>
  )
}
