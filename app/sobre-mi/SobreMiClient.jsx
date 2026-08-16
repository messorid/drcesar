"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import WhatsappLink from "../components/WhatsappLink"

const valores = [
  {
    title: "Criterio Médico",
    text: "Cada indicación quirúrgica parte de una evaluación clínica rigurosa y honesta.",
  },
  {
    title: "Resultados Naturales",
    text: "Armonía y proporción, respetando la anatomía y la identidad de cada paciente.",
  },
  {
    title: "Seguridad Integral",
    text: "Acompañamiento profesional antes, durante y después de cada procedimiento.",
  },
]

const especialidades = [
  "Retiro de Biopolímeros",
  "Cirugía Reconstructiva",
  "Lipo HD & Contorno Corporal",
  "Brazilian Butt Lift (BBL)",
  "Cirugía Mamaria",
  "Liposucción",
]

export default function SobreMiClient() {
  const whatsappUrl =
    "https://wa.me/584245846191?text=" +
    encodeURIComponent(
      "Hola Dr César Rosales, deseo información para agendar una consulta"
    )

  return (
    <main className="relative w-full bg-ink overflow-hidden">
      {/* HERO PERFIL */}
      <section className="relative px-6 pt-36 pb-24">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,_rgba(40,145,198,0.1),_transparent_70%)] blur-2xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative order-1 md:order-none"
          >
            <span className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-brand/50" />
            <span className="absolute -right-4 -bottom-4 h-20 w-20 border-r border-b border-brand/50" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/dr-cesar-rosales.JPG"
                alt="Dr César Rosales Cirujano Plástico en Barinas y Caracas"
                width={900}
                height={1200}
                priority
                className="w-full object-cover object-top h-[460px] md:h-auto md:max-h-[640px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow">Sobre el Especialista</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-cream leading-[1.05]">
              Dr. César <span className="brand-text">Rosales</span>
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.28em] text-stone">
              Cirujano Plástico
            </p>

            <div className="brand-divider my-9 max-w-[120px]" />

            <p className="text-base text-sand leading-relaxed">
              Cirujano plástico dedicado a la cirugía estética y reconstructiva,
              con una práctica fundamentada en la seguridad del paciente, la
              evaluación personalizada y la búsqueda de resultados armónicos y
              naturales.
            </p>
            <p className="mt-5 text-base text-sand leading-relaxed">
              Su enfoque combina criterio médico, técnica depurada y un
              acompañamiento cercano en cada etapa del proceso, ofreciendo
              atención profesional a pacientes en Barinas y Caracas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="px-6 py-24 bg-ink-soft">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="eyebrow">Filosofía</span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl text-cream">
              Principios que guían cada{" "}
              <span className="brand-text">procedimiento</span>
            </h2>
            <div className="brand-divider mx-auto mt-10 max-w-[160px]" />
          </motion.div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--border-soft)] sm:grid-cols-3">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="group relative bg-ink px-8 py-12 transition-colors duration-500 hover:bg-ink-elevated"
              >
                <span className="font-display text-3xl brand-text">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl text-cream">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm text-stone leading-relaxed">
                  {v.text}
                </p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Áreas de Práctica</span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl text-cream">
              <span className="brand-text">Especialidades</span>
            </h2>
            <div className="brand-divider mx-auto mt-10 max-w-[160px]" />
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {especialidades.map((esp, i) => (
              <motion.div
                key={esp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="surface-card flex items-center gap-4 rounded-xl px-6 py-5 text-left"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span className="font-display text-lg text-cream">{esp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pb-32 pt-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl text-cream leading-[1.1]"
          >
            Agenda tu consulta con un{" "}
            <span className="brand-text">especialista</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <WhatsappLink href={whatsappUrl} className="btn-brand">
              Agendar por WhatsApp
            </WhatsappLink>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
