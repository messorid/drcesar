"use client"

import { useEffect, useRef, useState } from "react"
import SectionHeader from "../SectionHeader"
import { prefersReducedMotion, useScene } from "@/app/lib/motion"
import { pilares } from "@/app/content/site"

const INTERVALO = 4500

// Móvil: carrusel de tarjetas que avanza solo y se pausa cuando la persona
// lo toca. Escritorio: tres columnas.
function useCarrusel(pistaRef) {
  const [activa, setActiva] = useState(0)

  // La tarjeta activa es la que está centrada en la pista
  useEffect(() => {
    const pista = pistaRef.current
    if (!pista) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiva(Number(e.target.dataset.indice))
        })
      },
      { root: pista, threshold: 0.6 }
    )
    pista.querySelectorAll("[data-pilar]").forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [pistaRef])

  // Avance automático sólo en móvil, con la sección visible y sin
  // prefers-reduced-motion
  useEffect(() => {
    const pista = pistaRef.current
    if (!pista || prefersReducedMotion()) return
    const movil = window.matchMedia("(max-width: 1023px)")

    let visible = false
    let pausaHasta = 0
    const pausar = () => (pausaHasta = Date.now() + 8000)

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), {
      threshold: 0.5,
    })
    io.observe(pista)
    pista.addEventListener("pointerdown", pausar, { passive: true })
    pista.addEventListener("touchstart", pausar, { passive: true })

    const id = window.setInterval(() => {
      if (!movil.matches || !visible || Date.now() < pausaHasta) return
      const tarjetas = pista.querySelectorAll("[data-pilar]")
      const actual = Math.round(pista.scrollLeft / tarjetas[0].offsetWidth)
      const siguiente = tarjetas[(actual + 1) % tarjetas.length]
      pista.scrollTo({
        left: siguiente.offsetLeft - (pista.clientWidth - siguiente.offsetWidth) / 2,
        behavior: "smooth",
      })
    }, INTERVALO)

    return () => {
      window.clearInterval(id)
      io.disconnect()
      pista.removeEventListener("pointerdown", pausar)
      pista.removeEventListener("touchstart", pausar)
    }
  }, [pistaRef])

  const irA = (i) => {
    const pista = pistaRef.current
    const t = pista?.querySelectorAll("[data-pilar]")[i]
    if (!t) return
    pista.scrollTo({
      left: t.offsetLeft - (pista.clientWidth - t.offsetWidth) / 2,
      behavior: "smooth",
    })
  }

  return { activa, irA }
}

export default function Filosofia() {
  const ref = useRef(null)
  const pistaRef = useRef(null)
  const { activa, irA } = useCarrusel(pistaRef)

  // Escritorio: los títulos entran con split text
  useScene(ref, ({ gsap, SplitText, el }) => {
    gsap.matchMedia().add("(min-width: 1024px)", () => {
      el.querySelectorAll("[data-pilar]").forEach((col, i) => {
        const split = SplitText.create(col.querySelector("h3"), {
          type: "lines",
          mask: "lines",
        })
        gsap
          .timeline({
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 75%", once: true },
          })
          .from(split.lines, {
            yPercent: 105,
            duration: 1.1,
            stagger: 0.08,
            ease: "power4.out",
          })
          .from(
            col.querySelector("p"),
            { opacity: 0, y: 16, duration: 0.9, ease: "power3.out" },
            "<0.3"
          )
        return () => split.revert()
      })
    })
  })

  return (
    <section ref={ref} className="bg-crema pb-24 lg:pb-40">
      <div className="contenedor">
        <SectionHeader etiqueta="Filosofía" centrado />
        <h2 className="display mx-auto mt-10 max-w-[16ch] text-center text-[clamp(2.4rem,6vw,4.75rem)] lg:mx-0 lg:text-left">
          Tres principios que guían <em>cada decisión.</em>
        </h2>
      </div>

      <div className="mt-12 lg:mx-auto lg:mt-24 lg:max-w-[1360px] lg:px-12">
        <div
          ref={pistaRef}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Principios"
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-[7.5%] px-[7.5%] lg:grid lg:snap-none lg:grid-cols-3 lg:gap-0 lg:overflow-visible lg:border-t lg:border-linea lg:px-0"
        >
          {pilares.map((p, i) => (
            <article
              key={p.titulo}
              data-pilar
              data-indice={i}
              aria-label={`${i + 1} de ${pilares.length}`}
              className="flex w-[85%] shrink-0 snap-center flex-col items-center bg-arena px-7 py-12 text-center lg:w-auto lg:items-start lg:border-r lg:border-linea lg:bg-transparent lg:px-10 lg:py-14 lg:text-left lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span aria-hidden="true" className="block h-px w-12 bg-dorado" />
              <h3 className="display mt-8 text-[clamp(2.2rem,3.8vw,3.25rem)]">
                {p.titulo}
              </h3>
              <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-tinta-suave">
                {p.texto}
              </p>
            </article>
          ))}
        </div>

        {/* Indicadores del carrusel (sólo móvil) */}
        <div className="mt-8 flex justify-center gap-2 lg:hidden">
          {pilares.map((p, i) => (
            <button
              key={p.titulo}
              type="button"
              onClick={() => irA(i)}
              aria-label={`Ver ${p.titulo}`}
              aria-current={activa === i}
              className="flex h-11 w-8 items-center justify-center"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-500 ${
                  activa === i ? "w-7 bg-tinta" : "w-3 bg-tinta/25"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
