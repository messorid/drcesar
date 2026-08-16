"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const servicios = [
  {
    title: "Brazilian Butt Lift",
    subtitle: "Proyección y contorno glúteo",
    image: "/images/servicios/bbl.jpeg",
    href: "/bbl-barinas",
  },
  {
    title: "Lipo HD",
    subtitle: "Definición y escultura corporal",
    image: "/images/servicios/lipo-hd.PNG",
    href: "/lipo-hd-barinas",
  },
  {
    title: "Cirugía Mamaria",
    subtitle: "Armonía y proporción natural",
    image: "/images/servicios/cirugia-mamaria.PNG",
    href: "/contacto",
  },
  {
    title: "Retiro de Biopolímeros",
    subtitle: "Reconstrucción y seguridad",
    image: "/images/servicios/Biopolimeros1.jpeg",
    href: "/retiro-biopolimeros-caracas",
  },
]

function Card({ servicio }) {
  return (
    <Link
      href={servicio.href}
      className="group relative block overflow-hidden rounded-2xl border border-[var(--border-soft)]"
    >
      <Image
        src={servicio.image}
        alt={servicio.title}
        width={600}
        height={800}
        className="h-[440px] w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
      />

      {/* El scrim se mantiene opaco hasta ~30% de alto: con subtítulos de dos
          líneas la etiqueta subía hasta la zona clara de la foto y perdía
          contraste (visible en "Reconstrucción y seguridad") */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-ink)_0%,rgba(15,18,20,0.92)_30%,rgba(15,18,20,0.45)_58%,transparent_100%)]" />
      <div className="absolute inset-3 rounded-xl border border-transparent transition-colors duration-500 group-hover:border-[rgba(40,145,198,0.4)]" />

      <div className="absolute inset-x-0 bottom-0 p-7">
        <span className="eyebrow">{servicio.subtitle}</span>
        <h3 className="mt-3 font-display text-2xl text-cream">
          {servicio.title}
        </h3>
        <span className="mt-4 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.18em] text-brand-light opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          Conocer más <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  )
}

export default function ServiciosCards() {
  return (
    <section
      id="servicios"
      className="relative w-full bg-ink py-28 overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="eyebrow">Procedimientos</span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-cream">
            Áreas de <span className="brand-text">Especialidad</span>
          </h2>
          <div className="brand-divider mx-auto mt-10 max-w-[160px]" />
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card servicio={s} />
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden flex gap-5 overflow-x-scroll pb-6 snap-x snap-mandatory scroll-smooth no-scrollbar">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="min-w-[78%] snap-center shrink-0"
            >
              <Card servicio={s} />
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center md:hidden">
          <span className="text-[0.7rem] uppercase tracking-[0.25em] text-stone">
            Desliza →
          </span>
        </div>
      </div>
    </section>
  )
}
