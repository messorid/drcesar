"use client"

import { useRef } from "react"
import Image from "next/image"
import WhatsappLink from "../WhatsappLink"
import { useScene } from "@/app/lib/motion"
import { waLink } from "@/app/content/site"

export default function Hero() {
  const ref = useRef(null)

  // Zoom lento de la foto al hacer scroll. El estado inicial es la foto
  // tal cual, así no se afecta el LCP.
  useScene(
    ref,
    ({ gsap, el }) => {
      gsap.to(el.querySelector("[data-foto]"), {
        scale: 1.14,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      gsap.to(el.querySelector("[data-contenido]"), {
        yPercent: -12,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    },
    { eager: true }
  )

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-tinta text-crema lg:bg-[#4d4d56]"
    >
      <div data-foto className="absolute inset-x-0 top-0 bottom-[44%] origin-[60%_30%] will-change-transform lg:bottom-0 lg:left-[36%]">
        <Image
          src="/images/hero-retrato.jpg"
          alt="Dr. César Rosales, cirujano plástico, en retrato profesional"
          fill
          priority
          fetchPriority="high"
          quality={78}
          sizes="100vw"
          className="object-cover object-[50%_18%] lg:object-[50%_14%]"
        />
        {/* Móvil: funde el borde inferior de la foto con el panel oscuro del texto */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-tinta via-tinta/60 to-transparent lg:hidden" />
        {/* Funde el borde izquierdo de la foto con el fondo en escritorio */}
        <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#4d4d56] to-transparent lg:block" />
      </div>

      {/* Velos: arriba en móvil (navbar legible), a la izquierda en escritorio */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-tinta/50 to-transparent lg:hidden" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(28,26,25,0.72)_0%,rgba(28,26,25,0.38)_42%,transparent_70%)] lg:block" />

      <div
        data-contenido
        className="contenedor relative flex h-full flex-col justify-end pb-24 lg:justify-center lg:pb-0"
      >
        <h1>
          <span className="label mb-4 block !text-crema/80 lg:mb-6">
            Dr. César Rosales · Cirujano plástico
          </span>
          <span className="display block text-[clamp(2.35rem,9.6vw,7.5rem)] lg:max-w-[11ch]">
            <span className="block">Resultados naturales.</span>
            <em className="block">Criterio médico.</em>
          </span>
        </h1>

        <p className="mt-5 max-w-md font-mono lg:mt-6 text-[0.72rem] uppercase leading-relaxed tracking-[0.14em] text-crema/85">
          Cirugía Plástica · Estética &amp; Reconstructiva · Barinas y Caracas
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-8">
          <WhatsappLink href={waLink()} label="Hero" className="btn btn-claro">
            Agendar consulta
          </WhatsappLink>
          <a
            href="#procedimientos"
            className="btn hidden border border-crema/40 text-crema hover:border-crema sm:inline-flex"
          >
            Ver procedimientos
          </a>
        </div>
      </div>

    </section>
  )
}
