"use client"

import { motion } from "framer-motion"

const pasos = [
  {
    step: "01",
    title: "Agenda por WhatsApp",
    description:
      "Haz click en el botón de Agendar consulta por WhatsApp y comunícate directamente con nuestro equipo.",
  },
  {
    step: "02",
    title: "Indica tu procedimiento",
    description:
      "Cuéntanos qué procedimiento deseas realizar y aclara todas tus dudas con un especialista.",
  },
  {
    step: "03",
    title: "Confirma ciudad y disponibilidad",
    description:
      "Consulta la disponibilidad de atención en Barinas o Caracas y coordina tu cita.",
  },
]

export default function PasosConsulta() {
  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
      {/* Glow sutil */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[280px] w-[280px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-white"
        >
          Pasos para agendar tu consulta
        </motion.h2>

        {/* Pasos */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {pasos.map((paso, index) => (
            <motion.div
              key={paso.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <span className="block text-sm text-white/50">
                Paso {paso.step}
              </span>

              <h3 className="mt-2 text-xl font-medium text-white">
                {paso.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                {paso.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Texto final */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-sm sm:text-base text-white/70"
        >
          Nuestro equipo te orientará durante todo el proceso para brindarte
          una atención segura, profesional y personalizada.
        </motion.p>
      </div>
    </section>
  )
}
