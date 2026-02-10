"use client"

import { motion } from "framer-motion"

export default function ContactClient() {
  return (
    <main className="relative min-h-screen w-full bg-black px-6 py-28 overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white"
        >
          Contacto
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed"
        >
          Agenda tu consulta médica o aclara tus dudas con nuestro equipo.
          La atención se realiza previa coordinación por WhatsApp.
        </motion.p>

        {/* Info principal */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h2 className="text-xl font-medium text-white">
              Contacto directo
            </h2>

            <p className="mt-4 text-sm sm:text-base text-white/70">
              Para agendar tu consulta o consultar disponibilidad,
              escríbenos directamente por WhatsApp.
            </p>

            <p className="mt-6 text-sm sm:text-base text-white/90 font-medium">
              Botón disponible en todo el sitio
            </p>
          </motion.div>

          {/* Ubicaciones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left"
          >
            <h2 className="text-xl font-medium text-white">
              Ubicaciones de atención
            </h2>

            <ul className="mt-6 space-y-4 text-sm sm:text-base text-white/70">
              <li>• Barinas</li>
              <li>• Caracas</li>
            </ul>

            <p className="mt-6 text-sm text-white/60">
              La disponibilidad varía según la ciudad y agenda médica.
            </p>
          </motion.div>
        </div>

        {/* Mensaje final */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-sm sm:text-base text-white/60"
        >
          Nuestro equipo te acompañará durante todo el proceso para brindarte
          una atención segura, profesional y personalizada.
        </motion.p>
      </div>
    </main>
  )
}
