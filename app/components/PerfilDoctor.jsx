"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PerfilDoctor() {
  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[320px] w-[320px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <Link
          href="/sobre-mi"
          className="group grid gap-12 md:grid-cols-2 items-center"
        >
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/dr-cesar-rosales.JPG"
              alt="Dr Cesar Rosales Cirujano Plastico en Barinas y Caracas"
              width={900}
              height={1200}
              priority={false}
              className="
                w-full
                object-cover
                object-top
                transition-transform
                duration-700
                group-hover:scale-105
                h-[420px]
                md:h-auto
                md:max-h-[640px]
              "
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <span className="block text-sm uppercase tracking-wider text-white/50">
              Perfil profesional
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Dr Cesar Rosales
            </h2>

            <p className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
              Cirujano plástico con enfoque en cirugía estética y reconstructiva.
              Su práctica se basa en la seguridad del paciente, la evaluación
              personalizada y resultados armónicos acordes a cada caso.
            </p>

            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
              Atiende pacientes en Barinas y Caracas, ofreciendo una atención
              profesional respaldada por experiencia clínica y criterio médico.
            </p>

            <span className="mt-8 inline-block text-sm font-medium text-white underline underline-offset-4">
              Conocer más sobre el Dr Cesar Rosales
            </span>
          </motion.div>
        </Link>
      </div>
    </section>
  )
}
