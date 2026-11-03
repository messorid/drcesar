"use client"

import { useState } from "react"
import SectionHeader from "../SectionHeader"
import { faqs } from "@/app/content/site"

export default function Preguntas() {
  const [abierta, setAbierta] = useState(0)

  return (
    <section className="bg-crema py-24 lg:py-36">
      <div className="contenedor grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader etiqueta="Preguntas" />
          <h2 className="display mt-10 max-w-[12ch] text-[clamp(2.4rem,5vw,4.25rem)]">
            Preguntas <em>frecuentes</em>
          </h2>
        </div>

        <div className="border-t border-linea lg:col-span-7 lg:col-start-6">
          {faqs.map((f, i) => {
            const open = abierta === i
            return (
              <div key={f.pregunta} className="border-b border-linea">
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setAbierta(open ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left lg:py-8"
                  >
                    <span className="font-serif text-[1.45rem] leading-snug lg:text-[1.8rem]">
                      {f.pregunta}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative mt-3 block h-3 w-3 shrink-0 transition-transform duration-500 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      <span className="absolute left-0 top-1/2 h-px w-3 bg-tinta" />
                      <span className="absolute left-1/2 top-0 h-3 w-px bg-tinta" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-editorial)] ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-8 leading-relaxed text-tinta-suave">
                      {f.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
