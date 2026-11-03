"use client"

import { useState } from "react"
import SectionHeader from "../SectionHeader"
import WhatsappLink from "../WhatsappLink"
import { WhatsappIcon } from "../StickyWhatsapp"
import Reveal from "../motion/Reveal"
import { MENSAJE_GENERAL, pasosAgenda, procedimientos, waLink } from "@/app/content/site"

const opciones = [
  ...procedimientos.map((p) => ({
    id: p.id,
    nombre: p.nombre,
    mensaje: p.mensaje,
    contentName: p.contentName,
  })),
  {
    id: "general",
    nombre: "Aún no lo sé",
    mensaje: MENSAJE_GENERAL,
    contentName: "Consulta General",
  },
]

export default function Agenda({ numero }) {
  const [elegido, setElegido] = useState("general")
  const opcion = opciones.find((o) => o.id === elegido)

  return (
    <section id="agenda" className="bg-piel/45 py-24 lg:py-36">
      <div className="contenedor">
        <SectionHeader numero={numero} etiqueta="Agenda" />
        <h2 className="display mt-10 max-w-[14ch] text-[clamp(2.4rem,5.4vw,4.5rem)]">
          Agenda en <em>3 pasos.</em>
        </h2>

        <Reveal as="ol" className="mt-14 grid gap-px border-y border-tinta/15 lg:grid-cols-3">
          {pasosAgenda.map((p, i) => (
            <li key={p.titulo} data-reveal className="py-8 lg:pr-10">
              <span className="display block text-5xl text-dorado-hondo">0{i + 1}</span>
              <h3 className="display mt-4 text-[1.9rem]">{p.titulo}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-tinta-suave">{p.texto}</p>
            </li>
          ))}
        </Reveal>

        <fieldset className="mt-14">
          <legend className="label">¿Qué procedimiento te interesa?</legend>
          <div className="mt-5 flex flex-wrap gap-2">
            {opciones.map((o) => (
              <label
                key={o.id}
                className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 ${
                  elegido === o.id
                    ? "border-tinta bg-tinta text-crema"
                    : "border-tinta/25 hover:border-tinta"
                }`}
              >
                <input
                  type="radio"
                  name="procedimiento"
                  value={o.id}
                  checked={elegido === o.id}
                  onChange={() => setElegido(o.id)}
                  className="sr-only"
                />
                {o.nombre}
              </label>
            ))}
          </div>
        </fieldset>

        <WhatsappLink
          href={waLink(opcion.mensaje)}
          contentName={opcion.contentName}
          label="Agenda 3 pasos"
          className="group mt-10 flex w-full items-center justify-between gap-6 bg-tinta px-6 py-7 text-crema transition-colors hover:bg-black sm:px-10 lg:py-10"
        >
          <span className="display text-[clamp(1.9rem,4.6vw,3.75rem)]">
            Escribir por <em>WhatsApp</em>
          </span>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crema text-tinta transition-transform duration-500 group-hover:rotate-[-12deg] lg:h-16 lg:w-16">
            <WhatsappIcon className="h-5 w-5 lg:h-6 lg:w-6" />
          </span>
        </WhatsappLink>
        <p className="mt-4 text-sm text-tinta-suave">
          Se abrirá WhatsApp con un mensaje listo sobre{" "}
          {elegido === "general" ? "tu consulta" : opcion.nombre}.
        </p>
      </div>
    </section>
  )
}
