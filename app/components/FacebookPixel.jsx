"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function FacebookPixel() {
  const pathname = usePathname()
  const firstLoad = useRef(true)

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView")
    }
  }, [pathname])

  return null
}
