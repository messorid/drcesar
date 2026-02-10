"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "¿Cómo puedo agendar una consulta con el Dr Cesar Rosales?",
    answer:
      "Las consultas se agendan directamente por WhatsApp. Solo debes escribirnos, indicar el procedimiento de tu interés y consultar la disponibilidad según la ciudad.",
  },
  {
    question: "¿En qué ciudades atiende el Dr Cesar Rosales?",
    answer:
      "El Dr Cesar Rosales atiende actualmente en Barinas y Caracas. Nuestro equipo te indicará fechas y disponibilidad para cada ubicación.",
  },
  {
    question: "¿Qué procedimientos realiza el Dr Cesar Rosales?",
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
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
      {/* Glow sutil */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold text-white"
        >
          Preguntas frecuentes
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm sm:text-base text-white/70"
        >
          Resolvemos las dudas más comunes antes de tu consulta médica.
        </motion.p>

        {/* Accordion */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full flex justify-between items-center
                    px-6 py-5 text-left
                    transition-colors
                    hover:bg-white/10
                  "
                >
                  <h3 className="text-base sm:text-lg font-medium text-white">
                    {faq.question}
                  </h3>

                  <span className="ml-4 text-2xl font-light text-white">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-out
                    ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 pb-6 text-sm sm:text-base text-white/70 leading-relaxed">
                    {faq.answer}
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
