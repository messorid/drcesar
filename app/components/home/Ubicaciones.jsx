"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SectionHeader from "../SectionHeader"
import WhatsappLink from "../WhatsappLink"
import { ubicaciones, waLink } from "@/app/content/site"

export default function Ubicaciones({ numero }) {
  const [activa, setActiva] = useState(ubicaciones[0].id)
  const u = ubicaciones.find((x) => x.id === activa)

  const onKeyDown = (e) => {
    const i = ubicaciones.findIndex((x) => x.id === activa)
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault()
      const dir = e.key === "ArrowRight" ? 1 : -1
      const sig = ubicaciones[(i + dir + ubicaciones.length) % ubicaciones.length]
      setActiva(sig.id)
      document.getElementById(`tab-${sig.id}`)?.focus()
    }
  }

  return (
    <section className="bg-crema py-24 lg:py-36">
      <div className="contenedor">
        <SectionHeader numero={numero} etiqueta="Ubicaciones" />
        <h2 className="display mt-10 max-w-[14ch] text-[clamp(2.4rem,5.4vw,4.5rem)]">
          ¿Dónde te <em>atiendo?</em>
        </h2>

        <div
          role="tablist"
          aria-label="Ciudad"
          onKeyDown={onKeyDown}
          className="mt-12 flex w-full max-w-xl rounded-full border border-linea p-1"
        >
          {ubicaciones.map((x) => (
            <button
              key={x.id}
              id={`tab-${x.id}`}
              role="tab"
              type="button"
              aria-selected={activa === x.id}
              aria-controls={`panel-${x.id}`}
              tabIndex={activa === x.id ? 0 : -1}
              onClick={() => setActiva(x.id)}
              className={`min-h-[44px] flex-1 rounded-full px-3 text-[0.82rem] transition-colors duration-500 sm:text-sm ${
                activa === x.id ? "bg-tinta text-crema" : "text-tinta hover:bg-arena"
              }`}
            >
              {x.ciudad}
            </button>
          ))}
        </div>

        <div
          key={u.id}
          id={`panel-${u.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${u.id}`}
          className="mt-12 grid gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <p className="display text-[clamp(3rem,7vw,6rem)]">{u.ciudad}</p>
            <p className="mt-6 max-w-sm leading-relaxed text-tinta-suave">
              {u.descripcion}
            </p>

            {(u.direccion || u.dias) && (
              <dl className="mt-8 border-t border-linea">
                {u.direccion && (
                  <div className="border-b border-linea py-4">
                    <dt className="label">Dirección</dt>
                    <dd className="mt-2">{u.direccion}</dd>
                  </div>
                )}
                {u.dias && (
                  <div className="border-b border-linea py-4">
                    <dt className="label">Días de consulta</dt>
                    <dd className="mt-2">{u.dias}</dd>
                  </div>
                )}
              </dl>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappLink
                href={waLink(
                  `Hola Dr. César Rosales, deseo agendar una consulta en ${u.ciudad}`
                )}
                label={`Ubicacion ${u.ciudad}`}
                className="btn btn-primario"
              >
                Agendar en {u.ciudad}
              </WhatsappLink>
              <Link href={u.href} className="btn btn-linea">
                Ver detalles
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            {u.foto && (
              <div className="relative mb-4 aspect-[3/2] overflow-hidden">
                <Image
                  src={u.foto}
                  alt={`Consultorio en ${u.ciudad}`}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            {u.mapa ? (
              <iframe
                src={u.mapa}
                title={`Mapa de la consulta en ${u.ciudad}`}
                className="h-[320px] w-full border-0 grayscale-[0.6] lg:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-[240px] items-center justify-center bg-arena p-8 text-center lg:h-[440px]">
                <p className="max-w-xs font-serif text-2xl italic leading-snug">
                  Escríbenos para conocer las próximas fechas en {u.ciudad}.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
