"use client"

import { useRef } from "react"
import SectionHeader from "../SectionHeader"
import { useScene } from "@/app/lib/motion"
import { pilares } from "@/app/content/site"

export default function Filosofia({ numero }) {
  const ref = useRef(null)

  useScene(ref, ({ gsap, SplitText, el }) => {
    el.querySelectorAll("[data-pilar]").forEach((col, i) => {
      const titulo = col.querySelector("h3")
      const split = SplitText.create(titulo, { type: "lines", mask: "lines" })
      const tl = gsap.timeline({
        delay: i * 0.12,
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      })
      tl.from(col.querySelector("[data-num]"), {
        yPercent: 100,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          split.lines,
          { yPercent: 105, duration: 1.1, stagger: 0.08, ease: "power4.out" },
          "<0.1"
        )
        .from(
          col.querySelector("p"),
          { opacity: 0, y: 16, duration: 0.9, ease: "power3.out" },
          "<0.3"
        )
    })
  })

  return (
    <section ref={ref} className="bg-crema pb-28 lg:pb-40">
      <div className="contenedor">
        <SectionHeader numero={numero} etiqueta="Filosofía" />
        <h2 className="display mt-10 max-w-[16ch] text-[clamp(2.4rem,6vw,4.75rem)]">
          Tres principios que guían <em>cada decisión.</em>
        </h2>

        <div className="mt-16 grid border-t border-linea lg:mt-24 lg:grid-cols-3">
          {pilares.map((p, i) => (
            <article
              key={p.titulo}
              data-pilar
              className="border-b border-linea py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-14 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="overflow-hidden">
                <span
                  data-num
                  className="display block text-[clamp(4.5rem,10vw,8rem)] text-dorado-texto"
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="display mt-6 text-[clamp(2rem,3.6vw,3rem)]">
                {p.titulo}
              </h3>
              <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-tinta-suave">
                {p.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
