"use client"

import { motion } from "framer-motion"

export default function EspecialidadesIntro() {
  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white"
        >
          Cirugía Plástica Especializada
        </motion.h2>

        {/* Especialidades */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
        >
          Retiro de Biopolímeros y Reconstrucción · Contorno Corporal ·
          Lipo HD · Cirugía Mamaria
        </motion.p>

        {/* Línea animada */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 h-px w-40 origin-center bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />

        {/* Mensaje CTA pasivo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-12 text-sm sm:text-base text-white/70"
        >
          Agenda tu consulta o aclara tus dudas con un especialista
        </motion.p>
      </div>
    </section>
  )
}
