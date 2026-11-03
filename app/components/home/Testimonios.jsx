"use client"

import { useRef } from "react"
import SectionHeader from "../SectionHeader"
// Sólo testimonios reales con permiso (ver content/site.js).
import { testimoniosPublicables } from "@/app/content/site"

export default function Testimonios() {
  const pistaRef = useRef(null)

  if (!testimoniosPublicables.length) return null

  const mover = (dir) => {
    const pista = pistaRef.current
    if (!pista) return
    pista.scrollBy({ left: dir * pista.clientWidth * 0.85, behavior: "smooth" })
  }

  return (
    <section className="bg-crema py-24 lg:py-36">
      <div className="contenedor">
        <SectionHeader etiqueta="Testimonios" />
        <div className="mt-10 flex items-end justify-between gap-6">
          <h2 className="display max-w-[14ch] text-[clamp(2.4rem,5.4vw,4.5rem)]">
            En palabras de <em>nuestras pacientes.</em>
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button type="button" onClick={() => mover(-1)} aria-label="Testimonio anterior" className="flex h-12 w-12 items-center justify-center rounded-full border border-linea hover:border-tinta">←</button>
            <button type="button" onClick={() => mover(1)} aria-label="Testimonio siguiente" className="flex h-12 w-12 items-center justify-center rounded-full border border-linea hover:border-tinta">→</button>
          </div>
        </div>

        <ul
          ref={pistaRef}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
        >
          {testimoniosPublicables.map((t, i) => (
            <li
              key={i}
              className="flex w-[85%] shrink-0 snap-start flex-col justify-between bg-arena p-7 sm:w-[60%] lg:w-[38%] lg:p-10"
            >
              <blockquote className="font-serif text-[1.6rem] italic leading-snug lg:text-[2rem]">
                “{t.texto}”
              </blockquote>
              <p className="label mt-8">
                {t.autor}
                {t.detalle && ` · ${t.detalle}`}
                {t.fuente && ` · Vía ${t.fuente}`}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
