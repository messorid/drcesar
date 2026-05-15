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
    <section className="relative w-full bg-ink py-28 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="eyebrow">Dónde Atendemos</span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-cream">
            Ubicaciones de <span className="gold-text">atención</span>
          </h2>
          <p className="mt-7 text-sm sm:text-base text-stone leading-relaxed">
            El Dr. César Rosales atiende en distintas ciudades para brindar
            atención médica especializada y personalizada.
          </p>
          <div className="gold-divider mx-auto mt-10 max-w-[160px]" />
        </motion.div>

        <div className="mt-16 space-y-5">
          {locations.map((location) => {
            const isOpen = openId === location.id

            return (
              <div
                key={location.id}
                className={`overflow-hidden rounded-2xl border transition-colors duration-500 ${
                  isOpen
                    ? "border-[rgba(201,169,106,0.4)] bg-ink-elevated"
                    : "border-[var(--border-soft)] bg-ink-soft"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : location.id)}
                  className="w-full flex justify-between items-center px-7 py-6 text-left"
                >
                  <div>
                    <h3 className="font-display text-2xl text-cream">
                      {location.title}
                    </h3>
                    <p className="mt-1 text-sm text-stone">
                      {location.description}
                    </p>
                  </div>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-gold)] text-lg text-gold transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-7 pb-7 pt-2">
                    <iframe
                      src={location.iframeSrc}
                      className="w-full h-[340px] rounded-xl border border-[var(--border-soft)]"
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
