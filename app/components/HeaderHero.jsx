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
      {/* Fondo desktop imagen — el desenfoque evita que el letrero del
          consultorio compita con el titular */}
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        <Image
          src="/images/fondohero.webp"
          alt=""
          fill
          priority
          quality={80}
          sizes="100vw"
          className="scale-105 object-cover blur-[6px]"
        />
      </div>

      {/* Fondo mobile imagen */}
      <div className="absolute inset-0 md:hidden" aria-hidden="true">
        <Image
          src="/images/hero-dr-cesar.webp"
          alt=""
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* ---------- Capas de profundidad ---------- */}

      {/* Mobile: se conserva el tratamiento original (la foto vertical ya es
          oscura y el resultado funcionaba bien) */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink md:hidden" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(10,9,8,0.85)_100%)] md:hidden" />

      {/* Desktop: recalibrado para una foto CLARA. El overlay anterior
          (55-70%) sobre pared blanca daba un gris medio y el texto quedaba
          por debajo de 4.5:1. Medido sobre la imagen real, este stack deja
          el peor caso en 5.4:1 y conserva visible el consultorio. */}
      <div className="absolute inset-0 hidden bg-ink/25 md:block" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(to_bottom,rgba(10,9,8,0.78)_0%,rgba(10,9,8,0.36)_22%,rgba(10,9,8,0.3)_50%,rgba(10,9,8,0.68)_82%,rgba(10,9,8,0.94)_100%)] md:block" />
      {/* Protección de texto: mancha oscura detrás del bloque central */}
      <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_70%_52%_at_50%_46%,rgba(10,9,8,0.46)_0%,rgba(10,9,8,0.2)_58%,transparent_100%)] md:block" />
      {/* Viñeta perimetral cálida */}
      <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_center,_transparent_38%,_rgba(10,9,8,0.55)_100%)] md:block" />

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
          className="eyebrow !text-gold-light [text-shadow:0_1px_10px_rgba(10,9,8,0.9)]"
        >
          Cirugía Plástica · Estética & Reconstructiva
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="hero-title mt-7 font-display font-medium leading-[1.05] text-5xl sm:text-6xl lg:text-8xl"
        >
          <span className="block text-cream">Dr. César</span>
          <span className="block gold-text-bright">Rosales</span>
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
              className="absolute whitespace-nowrap text-sm sm:text-base lg:text-lg tracking-[0.08em] text-cream/90 [text-shadow:0_1px_12px_rgba(10,9,8,0.9)]"
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
          className="absolute bottom-32 md:bottom-24 text-[0.7rem] uppercase tracking-[0.3em] text-sand [text-shadow:0_1px_10px_rgba(10,9,8,0.9)]"
        >
          Barinas · Caracas · San Cristóbal
        </motion.p>
      </div>

      {/* Indicador de scroll — elevado para no quedar bajo la barra sticky de
          WhatsApp en mobile */}
      <div className="absolute bottom-20 md:bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-5 justify-center rounded-full border border-[rgba(201,169,106,0.55)] pt-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-gold-pulse" />
        </div>
      </div>
    </section>
  )
}
