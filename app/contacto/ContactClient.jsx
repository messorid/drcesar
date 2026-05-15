"use client"

import { motion } from "framer-motion"
import WhatsappLink from "../components/WhatsappLink"

export default function ContactClient() {
  const whatsappUrl =
    "https://wa.me/584245846191?text=" +
    encodeURIComponent(
      "Hola Dr César Rosales, deseo información para agendar una consulta"
    )

  return (
    <main className="relative min-h-screen w-full bg-ink px-6 pt-36 pb-32 overflow-hidden">
      {/* Resplandor dorado */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(201,169,106,0.1),_transparent_70%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
        >
          Estamos para Atenderte
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 text-4xl sm:text-5xl lg:text-7xl text-cream"
        >
          <span className="gold-text">Contacto</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-sand leading-relaxed"
        >
          Agenda tu consulta médica o aclara tus dudas con nuestro equipo. La
          atención se realiza previa coordinación por WhatsApp.
        </motion.p>

        <div className="gold-divider mx-auto mt-12 max-w-[160px]" />

        {/* Tarjetas */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-9 text-left"
          >
            <span className="font-display text-3xl gold-text">01</span>
            <h2 className="mt-5 font-display text-2xl text-cream">
              Contacto directo
            </h2>
            <p className="mt-4 text-sm text-stone leading-relaxed">
              Para agendar tu consulta o consultar disponibilidad, escríbenos
              directamente por WhatsApp. Un especialista atenderá tu solicitud
              de forma personalizada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-9 text-left"
          >
            <span className="font-display text-3xl gold-text">02</span>
            <h2 className="mt-5 font-display text-2xl text-cream">
              Ubicaciones de atención
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-sand">
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-gold" /> Barinas
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-gold" /> Caracas
              </li>
            </ul>
            <p className="mt-5 text-xs text-stone/70">
              La disponibilidad varía según la ciudad y agenda médica.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <WhatsappLink href={whatsappUrl} className="btn-gold">
            Escribir por WhatsApp
          </WhatsappLink>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-10 text-xs uppercase tracking-[0.28em] text-stone"
        >
          Atención segura · Profesional · Personalizada
        </motion.p>
      </div>
    </main>
  )
}
