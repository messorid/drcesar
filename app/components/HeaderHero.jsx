"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HeaderHero() {
  const text = "Cirujano Plástico en Barinas y Caracas"
  const [typedText, setTypedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text.charAt(index))
        setIndex(index + 1)
      }, 55)
      return () => clearTimeout(timeout)
    }
  }, [index, text])

  return (
    <section className="relative w-full h-[100svh] overflow-hidden pb-32">
      {/* Desktop / Tablet video */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero-background.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Mobile image */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/hero-dr-cesar.jpeg"
          alt="Dr Cesar Rosales Cirujano Plastico en Barinas"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Desktop / Tablet content */}
      <div className="relative z-10 hidden md:flex h-full w-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <h1 className="relative inline-block text-5xl lg:text-6xl font-semibold tracking-tight overflow-hidden">
            <span className="relative z-10">Dr Cesar Rosales</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-white/90 min-h-[28px]">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>

      {/* Mobile content */}
      <div className="absolute bottom-28 left-0 right-0 z-10 px-6 md:hidden">
        <div className="text-center text-white">
          <h1 className="relative inline-block text-3xl font-semibold tracking-tight overflow-hidden">
            <span className="relative z-10">Dr Cesar Rosales</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
          </h1>

          <p className="mt-3 text-sm text-white/90 min-h-[22px]">
            {typedText || "Cirujano Plastico"}
          </p>
        </div>
      </div>
    </section>
  )
}
