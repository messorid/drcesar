"use client"

import { useRef } from "react"
import { useScene } from "@/app/lib/motion"
import { manifiesto } from "@/app/content/site"

// "*palabra*" → dorado. Se separa por palabras para iluminarlas con el scroll.
const palabras = manifiesto.split(" ").map((p) => {
  const dorada = p.includes("*")
  return { texto: p.replaceAll("*", ""), dorada }
})

export default function Manifiesto() {
  const ref = useRef(null)

  useScene(ref, ({ gsap, el }) => {
    const spans = el.querySelectorAll("[data-palabra]")
    spans.forEach((s) => {
      gsap.fromTo(
        s,
        { color: "#8f857b" },
        {
          color: s.dataset.dorada ? "#9a7444" : "#1c1a19",
          ease: "none",
          scrollTrigger: {
            trigger: s,
            start: "top 82%",
            end: "top 52%",
            scrub: true,
          },
        }
      )
    })
  })

  return (
    <section ref={ref} className="bg-crema py-28 lg:py-44">
      <div className="contenedor">
        <blockquote className="max-w-[22ch] font-serif text-[clamp(2.1rem,6.4vw,5.6rem)] italic leading-[1.06] tracking-[-0.02em]">
          {palabras.map((p, i) => (
            <span key={i}>
              <span
                data-palabra
                data-dorada={p.dorada ? "1" : undefined}
                className={p.dorada ? "text-dorado-texto" : "text-tinta"}
              >
                {p.texto}
              </span>{" "}
            </span>
          ))}
        </blockquote>
      </div>
    </section>
  )
}
