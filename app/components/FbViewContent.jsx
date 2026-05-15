"use client"

import { useEffect } from "react"
import { fbEvent } from "@/app/lib/fbpixel"

export default function FbViewContent({ contentName, contentCategory = "Cirugia Plastica" }) {
  useEffect(() => {
    fbEvent("ViewContent", {
      content_name: contentName,
      content_category: contentCategory,
    })
  }, [])
  return null
}
