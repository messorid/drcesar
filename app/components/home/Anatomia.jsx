"use client"

import { useEffect, useRef, useState } from "react"
import SectionHeader from "../SectionHeader"
import Silueta from "../Silueta"
import { useScene } from "@/app/lib/motion"
import { anatomia } from "@/app/content/site"

const zonas = anatomia.map((a) => a.zona)

export default function Anatomia() {
  const ref = useRef(null)
  const [activa, setActiva] = useState(zonas[0])

  // La zona activa sigue a la etiqueta que está en el centro de la pantalla
  useEffect(() => {
    const items = ref.current?.querySelectorAll("[data-etiqueta]")
    if (!items?.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiva(e.target.dataset.etiqueta)
        })
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )
    items.forEach((i) => io.observe(i))
    return () => io.disconnect()
  }, [])

  // El contorno se dibuja con el scroll y las etiquetas aparecen una a una
  useScene(ref, ({ gsap, el }) => {
    gsap.fromTo(
      el.querySelectorAll(".trazo"),
      { strokeDashoffset: 1 },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "top 10%",
          scrub: 0.8,
        },
      }
    )
    el.querySelectorAll("[data-etiqueta]").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 85%", once: true },
      })
    })
  })

  return (
    <section ref={ref} className="bg-crema py-24 lg:py-36">
      <div className="contenedor">
        <SectionHeader etiqueta="Anatomía de un procedimiento" />

        <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="display max-w-[14ch] text-[clamp(2.4rem,5.4vw,4.5rem)]">
                Dónde se trabaja en Lipo HD y <em>BBL.</em>
              </h2>
              <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-tinta-suave">
                Una guía visual para entender las zonas. En consulta se define
                cuáles aplican a tu caso.
              </p>
              <div className="mt-12 hidden lg:block">
                <Silueta
                  numeradas={zonas}
                  activa={activa}
                  title="Ilustración de línea de una silueta de perfil con las zonas que se trabajan en Lipo HD y BBL"
                  className="mx-auto h-[56vh] w-auto"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {/* Móvil: la ilustración queda fija mientras pasan las zonas */}
            <div className="sticky top-16 z-10 -mx-5 mt-8 bg-crema/95 px-5 py-3 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:hidden">
              <Silueta
                numeradas={zonas}
                activa={activa}
                title="Ilustración de línea de una silueta de perfil con las zonas que se trabajan en Lipo HD y BBL"
                className="mx-auto h-[28vh] w-auto"
              />
            </div>

          <ol className="mt-2 lg:mt-[22vh]">
            {anatomia.map((a) => (
              <li
                key={a.zona}
                data-etiqueta={a.zona}
                className={`border-t border-linea py-10 transition-opacity duration-500 lg:py-16 ${
                  activa === a.zona ? "opacity-100" : "lg:opacity-40"
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
            <li className="border-t border-linea pt-8">
              <p className="text-sm leading-relaxed text-tinta-suave">
                Ilustración con fines educativos. Cada plan se define tras una
                evaluación médica individual.
              </p>
            </li>
          </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
