"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import SectionHeader from "../SectionHeader"
import Silueta from "../Silueta"
import Reveal from "../motion/Reveal"
import { procedimientos } from "@/app/content/site"

// Tarjeta con la ilustración que sigue al cursor sobre la lista (escritorio).
function useSeguidor(lista) {
  const cardRef = useRef(null)
  const [activo, setActivo] = useState(null)

  useEffect(() => {
    const zona = lista.current
    const card = cardRef.current
    if (!zona || !card) return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const pos = { x: 0, y: 0 }
    const meta = { x: 0, y: 0 }
    let raf

    const loop = () => {
      const k = reduce ? 1 : 0.14
      pos.x += (meta.x - pos.x) * k
      pos.y += (meta.y - pos.y) * k
      card.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      const r = zona.getBoundingClientRect()
      meta.x = e.clientX - r.left
      meta.y = e.clientY - r.top
    }
    const onEnter = (e) => {
      onMove(e)
      pos.x = meta.x
      pos.y = meta.y
      raf = requestAnimationFrame(loop)
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      setActivo(null)
    }

    zona.addEventListener("pointermove", onMove)
    zona.addEventListener("pointerenter", onEnter)
    zona.addEventListener("pointerleave", onLeave)
    return () => {
      cancelAnimationFrame(raf)
      zona.removeEventListener("pointermove", onMove)
      zona.removeEventListener("pointerenter", onEnter)
      zona.removeEventListener("pointerleave", onLeave)
    }
  }, [lista])

  return { cardRef, activo, setActivo }
}

export default function Procedimientos({ numero }) {
  const listaRef = useRef(null)
  const { cardRef, activo, setActivo } = useSeguidor(listaRef)
  const actual = procedimientos.find((p) => p.id === activo)

  return (
    <section id="procedimientos" className="scroll-mt-20 bg-arena py-24 lg:py-36">
      {/* Ancla de compatibilidad con el link antiguo /#servicios */}
      <span id="servicios" className="block scroll-mt-40" aria-hidden="true" />

      <div className="contenedor">
        <SectionHeader numero={numero} etiqueta="Procedimientos" />
        <div className="mt-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <h2 className="display max-w-[14ch] text-[clamp(2.4rem,6vw,4.75rem)]">
            Áreas de <em>especialidad</em>
          </h2>
          <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-tinta-suave lg:mt-0">
            Cada plan quirúrgico parte de una evaluación individual. Conoce en
            qué consiste cada procedimiento.
          </p>
        </div>

        {/* Escritorio: lista tipográfica */}
        <div ref={listaRef} className="relative mt-20 hidden lg:block">
          <ul className="border-t border-tinta/20">
            {procedimientos.map((p, i) => (
              <li key={p.id} className="border-b border-tinta/20">
                <Link
                  href={p.href}
                  onPointerEnter={() => setActivo(p.id)}
                  onFocus={() => setActivo(p.id)}
                  onBlur={() => setActivo(null)}
                  className={`group grid grid-cols-12 items-baseline gap-6 py-9 transition-opacity duration-500 ${
                    activo && activo !== p.id ? "opacity-35" : ""
                  }`}
                >
                  <span className="label col-span-1">0{i + 1}</span>
                  <span className="display col-span-7 text-[clamp(3rem,6.2vw,6rem)] transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:translate-x-4">
                    {p.nombre}
                  </span>
                  <span className="col-span-3 text-sm leading-relaxed text-tinta-suave">
                    {p.detalle}
                  </span>
                  <span
                    aria-hidden="true"
                    className="col-span-1 justify-self-end font-serif text-3xl transition-transform duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            ref={cardRef}
            aria-hidden="true"
            className={`pointer-events-none absolute left-0 top-0 z-10 w-[260px] transition-opacity duration-500 ${
              actual ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`overflow-hidden bg-crema p-6 shadow-[0_30px_60px_-30px_rgba(28,26,25,0.45)] transition-[clip-path] duration-700 ease-[var(--ease-editorial)] ${
                actual ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(50%_0_50%_0)]"
              }`}
            >
              <Silueta zonas={actual?.zonas || []} className="h-[300px] w-full" />
              <p className="label mt-4">{actual?.detalle}</p>
            </div>
          </div>
        </div>

        {/* Móvil: tarjetas verticales */}
        <Reveal className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
          {procedimientos.map((p, i) => (
            <Link
              key={p.id}
              href={p.href}
              data-reveal
              className="flex flex-col bg-crema p-4 active:bg-white sm:p-5"
            >
              <span className="label">0{i + 1}</span>
              <Silueta zonas={p.zonas} className="mx-auto my-3 h-40 w-full" />
              <span className="display text-[1.65rem] leading-[1.02]">
                {p.nombre}
              </span>
              <span className="mt-2 text-[0.8rem] leading-snug text-tinta-suave">
                {p.detalle}
              </span>
              <span className="label mt-4 !text-tinta">Ver más →</span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
