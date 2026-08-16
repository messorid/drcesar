"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "¿Cómo puedo agendar una consulta con el Dr. César Rosales?",
    answer:
      "Las consultas se agendan directamente por WhatsApp. Solo debes escribirnos, indicar el procedimiento de tu interés y consultar la disponibilidad según la ciudad.",
  },
  {
    question: "¿En qué ciudades atiende el Dr. César Rosales?",
    answer:
      "El Dr. César Rosales atiende actualmente en Barinas y Caracas. Nuestro equipo te indicará fechas y disponibilidad para cada ubicación.",
  },
  {
    question: "¿Qué procedimientos realiza el Dr. César Rosales?",
    answer:
      "Realiza procedimientos de cirugía plástica estética y reconstructiva, incluyendo retiro de biopolímeros, BBL, Lipo HD y cirugía mamaria.",
  },
  {
    question: "¿La consulta es presencial o virtual?",
    answer:
      "La consulta es principalmente presencial para una evaluación médica adecuada. En algunos casos, se puede realizar una orientación inicial previa por WhatsApp.",
  },
  {
    question: "¿Qué debo llevar a la consulta?",
    answer:
      "Se recomienda llevar estudios médicos previos, exámenes recientes y toda la información relacionada con procedimientos anteriores, si aplica.",
  },
  {
    question: "¿Los procedimientos son personalizados?",
    answer:
      "Sí. Cada paciente recibe una evaluación individual y un plan quirúrgico adaptado a su caso, siempre priorizando la seguridad y la salud.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative w-full bg-ink py-28 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="eyebrow">Antes de tu Consulta</span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-cream">
            Preguntas <span className="brand-text">frecuentes</span>
          </h2>
          <div className="brand-divider mx-auto mt-10 max-w-[160px]" />
        </motion.div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-colors duration-500 ${
                  isOpen
                    ? "border-[rgba(40,145,198,0.4)] bg-ink-elevated"
                    : "border-[var(--border-soft)] bg-ink-soft"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center gap-6 px-7 py-6 text-left"
                >
                  <h3 className="font-display text-lg sm:text-xl text-cream">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-brand)] text-lg text-brand transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-7 pb-7 text-sm sm:text-base text-stone leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
