"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import SectionHeader from "../SectionHeader"
import { useScene } from "@/app/lib/motion"
import { anatomia, fotosAnatomia } from "@/app/content/site"

const claves = Object.keys(fotosAnatomia)

// Foto fija que cambia según la zona activa, con su etiqueta encima
function Visor({ activa, className, sizes }) {
  const zona = anatomia.find((a) => a.zona === activa) || anatomia[0]
  return (
    <figure data-visor className={`relative overflow-hidden bg-tinta ${className}`}>
      {claves.map((k) => (
        <Image
          key={k}
          src={fotosAnatomia[k].src}
          alt={fotosAnatomia[k].alt}
          fill
          sizes={sizes}
          quality={72}
          className={`object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-editorial)] ${
            zona.foto === k ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
          }`}
        />
      ))}
      <figcaption className="absolute bottom-3 left-3 bg-crema px-3 py-2 lg:bottom-5 lg:left-5">
        <span className="label !text-tinta">
          {zona.procedimiento} · {zona.titulo}
        </span>
      </figcaption>
    </figure>
  )
}

export default function Anatomia() {
  const ref = useRef(null)
  const [activa, setActiva] = useState(anatomia[0].zona)

  // La zona activa es la etiqueta más cercana a la línea de lectura. En
  // móvil la línea baja porque la foto fija ocupa la parte superior.
  useEffect(() => {
    const items = [...(ref.current?.querySelectorAll("[data-etiqueta]") || [])]
    if (!items.length) return
    let raf = 0
    const calcular = () => {
      raf = 0
      const linea = window.innerHeight * (window.innerWidth < 1024 ? 0.66 : 0.5)
      let mejor = items[0]
      let distancia = Infinity
      for (const it of items) {
        const r = it.getBoundingClientRect()
        const d = Math.abs(r.top + r.height / 2 - linea)
        if (d < distancia) {
          distancia = d
          mejor = it
        }
      }
      setActiva(mejor.dataset.etiqueta)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calcular)
    }
    calcular()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  // La foto se revela con un clip-path suave al entrar
  useScene(ref, ({ gsap, el }) => {
    el.querySelectorAll("[data-visor]").forEach((v) => {
      gsap.from(v, {
        clipPath: "inset(10% 10% 10% 10%)",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: v, start: "top 85%", once: true },
      })
    })
  })

  return (
    <section ref={ref} className="bg-crema py-24 lg:py-36">
      <div className="contenedor">
        <SectionHeader etiqueta="Anatomía de un procedimiento" />

        <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="display max-w-[14ch] text-[clamp(2.4rem,5vw,4.25rem)]">
              Dónde se trabaja en Lipo HD y <em>BBL.</em>
            </h2>
            <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-tinta-suave">
              Una guía para entender las zonas. En consulta se define cuáles
              aplican a tu caso.
            </p>
            {/* Escritorio: sólo la foto queda fija, ajustada al alto de la pantalla */}
            <div className="sticky top-28 mt-12 hidden lg:block">
              <Visor
                activa={activa}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="h-[calc(100vh-10rem)] max-h-[760px] w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {/* Móvil: la foto queda fija mientras pasan las zonas */}
            <div className="sticky top-16 z-10 -mx-5 mt-8 bg-crema pb-3 sm:-mx-8 lg:hidden">
              <Visor activa={activa} sizes="100vw" className="h-[34vh] w-full" />
            </div>

            <ol className="lg:pt-[30vh]">
              {anatomia.map((a) => (
                <li
                  key={a.zona}
                  data-etiqueta={a.zona}
                  className={`border-t border-linea py-10 transition-opacity duration-500 lg:py-16 ${
                    activa === a.zona ? "lg:opacity-100" : "lg:opacity-40"
                  }`}
                >
                  <span className="label !text-dorado-hondo">{a.procedimiento}</span>
                  <h3 className="display mt-4 text-[clamp(2rem,4vw,3.25rem)]">
                    {a.titulo}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-tinta-suave">
                    {a.texto}
                  </p>
                </li>
              ))}
              <li className="border-t border-linea pt-8 lg:pb-[18vh]">
                <p className="text-sm leading-relaxed text-tinta-suave">
                  Imágenes con fines educativos. Cada plan se define tras una
                  evaluación médica individual. Los resultados varían en cada
                  paciente.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
