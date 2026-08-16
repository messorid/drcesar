"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PerfilDoctor() {
  return (
    <section className="relative w-full bg-ink-soft py-28 px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl">
        <Link
          href="/sobre-mi"
          className="group grid gap-14 md:grid-cols-2 items-center"
        >
          {/* Imagen con marco de marca */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-brand/50" />
            <span className="absolute -right-4 -bottom-4 h-20 w-20 border-r border-b border-brand/50" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/dr-cesar-rosales.JPG"
                alt="Dr César Rosales Cirujano Plástico en Barinas y Caracas"
                width={900}
                height={1200}
                className="w-full object-cover object-top transition-transform duration-[1.1s] ease-out group-hover:scale-105 h-[440px] md:h-auto md:max-h-[640px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Perfil Profesional</span>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-cream">
              Dr. César <span className="brand-text">Rosales</span>
            </h2>

            <div className="brand-divider my-9 max-w-[120px]" />

            <p className="text-base text-sand leading-relaxed max-w-xl">
              Cirujano plástico con enfoque en cirugía estética y
              reconstructiva. Su práctica se fundamenta en la seguridad del
              paciente, la evaluación personalizada y resultados armónicos
              acordes a cada caso.
            </p>

            <p className="mt-5 text-base text-sand leading-relaxed max-w-xl">
              Atiende pacientes en Barinas y Caracas, ofreciendo una atención
              profesional respaldada por experiencia clínica y criterio médico.
            </p>

            <span className="mt-10 inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-[0.2em] text-brand-light">
              Conocer al especialista
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.div>
        </Link>
      </div>
    </section>
  )
}
