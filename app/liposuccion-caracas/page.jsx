import Image from "next/image"
import FbViewContent from "../components/FbViewContent"
import SectionHeader from "../components/SectionHeader"
import Reveal from "../components/motion/Reveal"
import {
  Bloque,
  CtaWhatsapp,
  ProcedimientoHero,
} from "../components/procedimiento/Procedimiento"
import { waLink } from "../content/site"

export const metadata = {
  title: "Liposuccion en Caracas | Dr Cesar Rosales",
  description:
    "Liposuccion en Caracas Venezuela con evaluacion medica especializada. Remodelacion corporal segura con el Dr Cesar Rosales.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/liposuccion-caracas",
  },
  openGraph: {
    title: "Liposuccion en Caracas | Dr Cesar Rosales",
    description:
      "Cirugia de liposuccion en Caracas Venezuela con enfoque medico profesional.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Liposuccion en Caracas Dr Cesar Rosales",
      },
    ],
  },
}

const contentName = "Consulta General"
const whatsappHref = waLink(
  "Hola Dr. César Rosales, deseo información sobre liposucción en Caracas"
)

export default function LiposuccionCaracasPage() {
  return (
    <main className="w-full bg-crema text-tinta">
      <FbViewContent contentName={contentName} />

      <ProcedimientoHero
        etiqueta="Remodelación corporal · Caracas"
        titulo={
          <>
            Liposucción en <em>Caracas</em>
          </>
        }
        intro="Remodelación corporal con técnica avanzada y un enfoque centrado en la seguridad del paciente."
        whatsappHref={whatsappHref}
        contentName={contentName}
        imagen={{
          src: "/images/hero-dr-cesar.jpeg",
          alt: "Liposuccion en Caracas Venezuela",
        }}
      />

      {/* El procedimiento: texto + imagen */}
      <section id="informacion" className="scroll-mt-20 bg-arena py-16 lg:py-24">
        <Reveal className="contenedor">
          <div data-reveal>
            <SectionHeader numero="01" etiqueta="El procedimiento" />
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div data-reveal className="lg:col-span-6">
              <h2 className="display text-[clamp(2.1rem,4.6vw,3.75rem)]">
                Cirugía de liposucción en <em>Caracas</em>
              </h2>
              <div className="prose-editorial mt-8 max-w-xl text-[1.02rem] leading-relaxed text-tinta-suave">
                <p>
                  La liposucción en Caracas es un procedimiento quirúrgico
                  diseñado para eliminar grasa localizada y mejorar el contorno
                  corporal. Cada paciente requiere una evaluación personalizada
                  para determinar si es candidato ideal.
                </p>
                <p>
                  El procedimiento puede realizarse en abdomen, flancos,
                  espalda, muslos o brazos, según la valoración médica
                  individual.
                </p>
              </div>
            </div>
            <div
              data-reveal
              className="relative aspect-[4/5] overflow-hidden bg-tinta lg:col-span-5 lg:col-start-8"
            >
              <Image
                src="/images/servicios/lipo-hd.PNG"
                alt="Liposuccion HD en Caracas Venezuela"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <Bloque
        numero="02"
        etiqueta="La consulta"
        titulo={
          <>
            Consulta especializada en <em>Caracas</em>
          </>
        }
      >
        <p>
          Durante la consulta se realiza una evaluación clínica completa,
          revisión de antecedentes y explicación detallada del alcance del
          procedimiento, riesgos y expectativas reales.
        </p>
        <p>
          La prioridad es la seguridad del paciente y el acompañamiento médico
          antes, durante y después de la cirugía.
        </p>
      </Bloque>

      <CtaWhatsapp
        titulo={
          <>
            Solicita tu evaluación médica en <em>Caracas</em>
          </>
        }
        texto="Coordina una valoración personalizada y conoce si eres candidato al procedimiento."
        whatsappHref={whatsappHref}
        contentName={contentName}
      />
    </main>
  )
}
