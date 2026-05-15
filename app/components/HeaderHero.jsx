"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import WhatsappLink from "./WhatsappLink"

const especialidades = [
  "Retiro de Biopolímeros & Reconstrucción",
  "Lipo HD & Contorno Corporal",
  "Cirugía Mamaria",
  "Brazilian Butt Lift (BBL)",
]

export default function HeaderHero() {
  const [current, setCurrent] = useState(0)

  const whatsappUrl =
    "https://wa.me/584245846191?text=" +
    encodeURIComponent(
      "Hola Dr César Rosales, deseo información para agendar una consulta"
    )

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % especialidades.length),
      3200
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      {/* Fondo desktop video */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="h-full w-full object-cover"
          src="/videos/hero-background.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Fondo mobile imagen */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/hero-dr-cesar.jpeg"
          alt="Dr César Rosales Cirujano Plástico"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Capas de profundidad / viñeta cálida */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(10,9,8,0.85)_100%)]" />

      {/* Marcos ornamentales */}
      <div className="pointer-events-none absolute inset-5 sm:inset-8 border border-[rgba(201,169,106,0.16)]" />
      <span className="pointer-events-none absolute left-5 top-5 sm:left-8 sm:top-8 h-8 w-8 border-l border-t border-gold/60" />
      <span className="pointer-events-none absolute right-5 top-5 sm:right-8 sm:top-8 h-8 w-8 border-r border-t border-gold/60" />
      <span className="pointer-events-none absolute left-5 bottom-5 sm:left-8 sm:bottom-8 h-8 w-8 border-l border-b border-gold/60" />
      <span className="pointer-events-none absolute right-5 bottom-5 sm:right-8 sm:bottom-8 h-8 w-8 border-r border-b border-gold/60" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="eyebrow"
        >
          Cirugía Plástica · Estética & Reconstructiva
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="mt-7 font-display font-medium leading-[1.05] text-5xl sm:text-6xl lg:text-8xl"
        >
          <span className="block text-cream">Dr. César</span>
          <span className="block gold-text">Rosales</span>
        </motion.h1>

        {/* Especialidad rotativa */}
        <div className="relative mt-8 flex h-9 w-full items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="absolute whitespace-nowrap text-sm sm:text-base lg:text-lg tracking-[0.08em] text-sand"
            >
              {especialidades[current]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="gold-divider mt-9 max-w-[220px] origin-center"
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-11 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <WhatsappLink href={whatsappUrl} className="btn-gold w-full sm:w-auto">
            Agendar consulta
          </WhatsappLink>
          <Link href="#servicios" className="btn-outline w-full sm:w-auto">
            Ver procedimientos
          </Link>
        </motion.div>

        {/* Ubicaciones */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-16 sm:bottom-20 text-[0.7rem] uppercase tracking-[0.3em] text-stone"
        >
          Barinas · Caracas · San Cristóbal
        </motion.p>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-5 justify-center rounded-full border border-[rgba(201,169,106,0.4)] pt-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-gold-pulse" />
        </div>
      </div>
    </section>
  )
}
