"use client"

import { useRef } from "react"
import SectionHeader from "../SectionHeader"
import { useScene } from "@/app/lib/motion"
import { recuperacion } from "@/app/content/site"

export default function Recuperacion() {
  const ref = useRef(null)

  useScene(ref, ({ gsap, ScrollTrigger, el }) => {
    const mm = gsap.matchMedia()

    // Escritorio: la sección se fija y la línea de tiempo avanza en horizontal
    mm.add("(min-width: 1024px)", () => {
      el.classList.add("is-horizontal")
      const track = el.querySelector("[data-track]")
      const distancia = () => track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: () => -distancia(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distancia()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
      gsap.fromTo(
        el.querySelector("[data-progreso]"),
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${distancia()}`,
            scrub: true,
          },
        }
      )
      ScrollTrigger.refresh()
      return () => el.classList.remove("is-horizontal")
    })

    // Móvil: cada etapa aparece al entrar
    mm.add("(max-width: 1023px)", () => {
      el.querySelectorAll("[data-etapa]").forEach((etapa) => {
        gsap.from(etapa, {
          opacity: 0,
          y: 24,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: etapa, start: "top 88%", once: true },
        })
      })
    })
  })

  return (
    <section
      ref={ref}
      className="group overflow-hidden bg-tinta py-24 text-crema lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-0 lg:[&.is-horizontal]:h-screen"
    >
      <div className="contenedor">
        <SectionHeader etiqueta="Tu recuperación" tono="claro" />
        <h2 className="display mt-10 max-w-[16ch] text-[clamp(2.4rem,5.4vw,4.5rem)]">
          Tu recuperación, <em>paso a paso.</em>
        </h2>
      </div>

      <div className="contenedor mt-14 lg:mt-20 lg:max-w-none lg:px-0">
        <ol
          data-track
          className="relative space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16 lg:px-[max(3rem,calc((100vw-1360px)/2+3rem))] lg:group-[.is-horizontal]:flex lg:group-[.is-horizontal]:w-max lg:group-[.is-horizontal]:gap-0"
        >
          {recuperacion.map((r) => (
            <li
              key={r.etapa}
              data-etapa
              className="relative border-l border-crema/20 pb-12 pl-8 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pt-10 lg:group-[.is-horizontal]:w-[34vw] lg:group-[.is-horizontal]:pr-16"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-marca lg:-top-[5px] lg:left-0"
              />
              <h3 className="display text-[clamp(1.9rem,3.4vw,3rem)]">
                {r.etapa}
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed text-crema/75">
                {r.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="contenedor mt-14 lg:mt-16">
        <div className="hidden h-px w-full bg-crema/15 lg:group-[.is-horizontal]:block">
          <div data-progreso className="h-px origin-left scale-x-0 bg-marca" />
        </div>
        <p className="text-sm leading-relaxed text-crema/60 lg:group-[.is-horizontal]:mt-6">
          Los tiempos de recuperación son orientativos y dependen de cada
          paciente y procedimiento. Se definen en consulta.
        </p>
      </div>
    </section>
  )
}
