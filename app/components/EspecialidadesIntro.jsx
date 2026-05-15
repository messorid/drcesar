"use client"

import { motion } from "framer-motion"

const pilares = [
  {
    title: "Criterio Médico",
    text: "Cada procedimiento parte de una evaluación clínica rigurosa y personalizada.",
  },
  {
    title: "Resultados Naturales",
    text: "Armonía y proporción, respetando la anatomía y la esencia de cada paciente.",
  },
  {
    title: "Seguridad Integral",
    text: "Acompañamiento profesional antes, durante y después de la cirugía.",
  },
]

export default function EspecialidadesIntro() {
  return (
    <section className="relative w-full bg-ink py-28 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          Filosofía Quirúrgica
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-cream"
        >
          Cirugía Plástica <span className="gold-text">Especializada</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto text-base sm:text-lg text-sand leading-relaxed"
        >
          Retiro de Biopolímeros y Reconstrucción · Contorno Corporal · Lipo HD
          · Cirugía Mamaria — con un enfoque centrado en la seguridad y la
          excelencia estética.
        </motion.p>

        <div className="gold-divider mx-auto mt-14 max-w-[180px]" />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--border-soft)] sm:grid-cols-3">
          {pilares.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group relative bg-ink-soft px-8 py-12 transition-colors duration-500 hover:bg-ink-elevated"
            >
              <span className="font-display text-3xl gold-text">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-display text-2xl text-cream">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-stone leading-relaxed">
                {p.text}
              </p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
