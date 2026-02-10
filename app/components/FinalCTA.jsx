"use client"

import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-black py-28 px-6 overflow-hidden">
      {/* Glow central */}
      <div className="pointer-events-none absolute inset-0 flex justify-center items-center">
        <div className="h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white"
        >
          Agenda tu consulta con un especialista
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed"
        >
          Recibe una evaluación médica personalizada, aclara tus dudas y
          conoce las opciones de tratamiento más adecuadas para tu caso.
          Nuestro equipo te orientará durante todo el proceso.
        </motion.p>

        {/* Refuerzo WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-sm sm:text-base text-white/60">
            Escríbenos directamente por WhatsApp para consultar disponibilidad
            en Barinas o Caracas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
