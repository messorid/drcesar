"use client"

import { motion } from "framer-motion"
import WhatsappLink from "./WhatsappLink"

const pasos = [
  {
    step: "I",
    title: "Contacto por WhatsApp",
    description:
      "Escríbenos directamente. Un especialista atenderá tu solicitud de forma personalizada.",
  },
  {
    step: "II",
    title: "Indica tu procedimiento",
    description:
      "Cuéntanos el procedimiento de tu interés y resuelve todas tus dudas con criterio médico.",
  },
  {
    step: "III",
    title: "Coordina tu cita",
    description:
      "Confirma disponibilidad y ciudad —Barinas o Caracas— y agenda tu evaluación.",
  },
]

export default function PasosConsulta() {
  const whatsappUrl =
    "https://wa.me/584245846191?text=" +
    encodeURIComponent(
      "Hola Dr César Rosales, deseo agendar una consulta"
    )

  return (
    <section className="relative w-full bg-ink-soft py-28 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="eyebrow">El Proceso</span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-cream">
            Cómo agendar tu <span className="brand-text">consulta</span>
          </h2>
          <div className="brand-divider mx-auto mt-10 max-w-[160px]" />
        </motion.div>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {pasos.map((paso, index) => (
            <motion.div
              key={paso.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border-brand)] font-display text-3xl brand-text">
                {paso.step}
              </span>
              <h3 className="mt-7 font-display text-2xl text-cream">
                {paso.title}
              </h3>
              <p className="mt-4 text-sm text-stone leading-relaxed max-w-xs mx-auto">
                {paso.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <WhatsappLink href={whatsappUrl} className="btn-brand">
            Iniciar por WhatsApp
          </WhatsappLink>
        </motion.div>
      </div>
    </section>
  )
}
