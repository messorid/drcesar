"use client"

import { useState } from "react"
import Image from "next/image"
import SectionHeader from "../SectionHeader"
// Sólo casos con consentimiento firmado (ver content/site.js).
import { casosPublicables, procedimientos } from "@/app/content/site"

function Comparador({ caso }) {
  const [pos, setPos] = useState(50)

  return (
    <figure className="relative">
      <div className="relative aspect-[4/5] select-none overflow-hidden bg-arena">
        <Image
          src={caso.despues}
          alt={`${caso.alt} — después`}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={caso.antes}
            alt={`${caso.alt} — antes`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-px bg-crema"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-crema font-mono text-xs text-tinta shadow-lg">
            ⟷
          </span>
        </div>

        <span className="label absolute left-3 top-3 bg-crema/90 px-2 py-1">Antes</span>
        <span className="label absolute right-3 top-3 bg-crema/90 px-2 py-1">Después</span>

        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Deslizar para comparar antes y después"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="label mt-3">{caso.alt}</figcaption>
    </figure>
  )
}

export default function AntesDespues() {
  const ids = [...new Set(casosPublicables.map((c) => c.procedimiento))]
  const [filtro, setFiltro] = useState("todos")
  const casos =
    filtro === "todos"
      ? casosPublicables
      : casosPublicables.filter((c) => c.procedimiento === filtro)

  if (!casosPublicables.length) return null

  return (
    <section className="bg-crema py-24 lg:py-36">
      <div className="contenedor">
        <SectionHeader etiqueta="Antes y después" />
        <h2 className="display mt-10 max-w-[14ch] text-[clamp(2.4rem,5.4vw,4.5rem)]">
          Resultados <em>reales.</em>
        </h2>

        <div className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5" role="group" aria-label="Filtrar por procedimiento">
          {["todos", ...ids].map((id) => {
            const nombre =
              id === "todos" ? "Todos" : procedimientos.find((p) => p.id === id)?.nombre || id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFiltro(id)}
                aria-pressed={filtro === id}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                  filtro === id
                    ? "border-tinta bg-tinta text-crema"
                    : "border-linea text-tinta hover:border-tinta"
                }`}
              >
                {nombre}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {casos.map((c) => (
            <Comparador key={c.antes} caso={c} />
          ))}
        </div>

        <p className="mt-10 text-sm text-tinta-suave">
          Los resultados varían en cada paciente. Fotos publicadas con
          consentimiento firmado.
        </p>
      </div>
    </section>
  )
}
