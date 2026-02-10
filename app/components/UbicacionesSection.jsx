"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const locations = [
  {
    id: "caracas",
    title: "Caracas",
    description:
      "Atención médica especializada en un entorno seguro y profesional.",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d245.19411521250538!2d-66.86010009219734!3d10.492321951879205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI5JzMyLjEiTiA2NsKwNTEnMzYuOCJX!5e0!3m2!1ses-419!2sus!4v1766981241043!5m2!1ses-419!2sus",
  },
  {
    id: "barinas",
    title: "Barinas",
    description:
      "Consultas y procedimientos con enfoque médico y reconstructivo.",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.881949610164!2d-70.25898162600816!3d8.607331395449043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b579d4df30779%3A0x45a695ebcf3a8c88!2sMEDISPA!5e0!3m2!1ses!2sus!4v1766981098213!5m2!1ses!2sus",
  },
]

export default function UbicacionesSection() {
  const [openId, setOpenId] = useState("caracas")

  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-white"
        >
          Ubicaciones de atención
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm sm:text-base text-white/70"
        >
          El Dr Cesar Rosales atiende en distintas ciudades para brindar
          atención médica especializada y personalizada.
        </motion.p>

        {/* Accordion */}
        <div className="mt-14 space-y-5">
          {locations.map((location) => {
            const isOpen = openId === location.id

            return (
              <div
                key={location.id}
                className="rounded-2xl border border-white/10 overflow-hidden bg-white/5"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setOpenId(isOpen ? null : location.id)
                  }
                  className={`
                    w-full flex justify-between items-center px-6 py-5 text-left
                    transition-colors
                    ${isOpen ? "bg-white/10" : "bg-transparent"}
                  `}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {location.title}
                    </h3>
                    <p className="text-sm text-white/60">
                      {location.description}
                    </p>
                  </div>

                  <span className="text-2xl font-light text-white">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-out
                    ${isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 pb-6 pt-4 bg-black border-t border-white/10">
                    <iframe
                      src={location.iframeSrc}
                      className="w-full h-[360px] rounded-xl border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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
