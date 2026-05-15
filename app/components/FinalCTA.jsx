"use client"

import { motion } from "framer-motion"
import WhatsappLink from "./WhatsappLink"

export default function FinalCTA() {
  const whatsappUrl =
    "https://wa.me/584245846191?text=" +
    encodeURIComponent(
      "Hola Dr César Rosales, deseo agendar una consulta con un especialista"
    )

  return (
    <section className="relative w-full bg-ink py-32 px-6 overflow-hidden">
      {/* Resplandor dorado */}
      <div className="pointer-events-none absolute inset-0 flex justify-center items-center">
        <div className="h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(201,169,106,0.12),_transparent_70%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          Tu Transformación Comienza Aquí
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-7 text-4xl sm:text-5xl lg:text-7xl text-cream leading-[1.08]"
        >
          Agenda tu consulta con un{" "}
          <span className="gold-text">especialista</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-8 text-base sm:text-lg text-sand leading-relaxed max-w-2xl mx-auto"
        >
          Recibe una evaluación médica personalizada, aclara tus dudas y conoce
          las opciones de tratamiento más adecuadas para tu caso. Atención en
          Barinas y Caracas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <WhatsappLink href={whatsappUrl} className="btn-gold">
            Agendar por WhatsApp
          </WhatsappLink>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          viewport={{ once: true }}
          className="mt-8 text-xs uppercase tracking-[0.28em] text-stone"
        >
          Respuesta personalizada · Atención profesional
        </motion.p>
      </div>
    </section>
  )
}
