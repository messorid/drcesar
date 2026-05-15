"use client"

import Link from "next/link"
import { fbEvent } from "@/app/lib/fbpixel"

export default function WhatsappLink({ href, className, children }) {
  const handleClick = () => {
    fbEvent("Contact")
    fbEvent("Lead")
  }
  return (
    <Link href={href} className={className} onClick={handleClick} target="_blank">
      {children}
    </Link>
  )
}
