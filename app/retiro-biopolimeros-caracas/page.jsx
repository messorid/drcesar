import Image from "next/image"
import BeforeAfterPro from "../components/BeforeAfterPro"
import FbViewContent from "../components/FbViewContent"
import SectionHeader from "../components/SectionHeader"
import Reveal from "../components/motion/Reveal"
import {
  CtaWhatsapp,
  ProcedimientoHero,
} from "../components/procedimiento/Procedimiento"
import { waLink } from "../content/site"

export const metadata = {
  title: "Retiro de Biopolimeros en Caracas | Dr Cesar Rosales",
  description:
    "Retiro de biopolimeros en Caracas Venezuela con evaluacion medica especializada. Cirugia reconstructiva segura con el Dr Cesar Rosales.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/retiro-biopolimeros-caracas",
  },
  openGraph: {
    title: "Retiro de Biopolimeros en Caracas | Dr Cesar Rosales",
    description:
      "Cirugia de retiro de biopolimeros en Caracas Venezuela con enfoque medico y reconstructivo.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Retiro de Biopolimeros en Caracas Dr Cesar Rosales",
      },
    ],
  },
}

const contentName = "Retiro de Biopolimeros"
const whatsappHref = waLink(
  "Hola Dr. César Rosales, deseo información sobre retiro de biopolímeros en Caracas"
)

export default function RetiroBiopolimerosCaracasPage() {
  return (
    <main className="w-full bg-crema text-tinta">
      <FbViewContent contentName={contentName} />

      <ProcedimientoHero
        etiqueta="Cirugía reconstructiva · Caracas"
        titulo={
          <>
            Retiro de <em>Biopolímeros</em>
          </>
        }
        intro="Evaluación especializada y manejo reconstructivo seguro, con criterio médico y acompañamiento profesional."
        whatsappHref={whatsappHref}
        contentName={contentName}
        imagen={{
          src: "/images/hero-dr-cesar.jpeg",
          alt: "Retiro de Biopolimeros en Caracas Venezuela",
        }}
      />

      {/* Antes y después */}
      <section className="bg-arena py-16 lg:py-24">
        <div className="contenedor">
          <SectionHeader numero="01" etiqueta="Resultados reales" />
          <h2 className="display mt-10 text-[clamp(2.1rem,4.6vw,3.75rem)]">
            Antes y <em>después</em>
          </h2>
          <div className="mt-10">
            <BeforeAfterPro
              beforeImage="/images/servicios/biopolimeros.jpg"
              afterImage="/images/servicios/Biopolimeros1.jpeg"
              altBefore="Antes retiro de biopolimeros"
              altAfter="Despues retiro de biopolimeros"
              labelBefore="Antes"
              labelAfter="Después"
              watermarkText="Dr César Rosales"
              autoplay={true}
              autoplayMs={1400}
            />
          </div>
          <p className="mt-6 text-sm text-tinta-suave">
            Los resultados varían en cada paciente.
          </p>
        </div>
      </section>

      {/* El procedimiento */}
      <section id="informacion" className="scroll-mt-20 bg-crema py-16 lg:py-24">
        <Reveal className="contenedor">
          <div data-reveal>
            <SectionHeader numero="02" etiqueta="El procedimiento" />
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div data-reveal className="lg:col-span-6">
              <h2 className="display text-[clamp(2.1rem,4.6vw,3.75rem)]">
                Cirugía de retiro de biopolímeros en <em>Caracas</em>
              </h2>
              <div className="prose-editorial mt-8 max-w-xl text-[1.02rem] leading-relaxed text-tinta-suave">
                <p>
                  El retiro de biopolímeros en Caracas es un procedimiento
                  quirúrgico complejo que requiere experiencia en cirugía
                  plástica y reconstrucción de tejidos.
                </p>
                <p>
                  Cada paciente necesita una evaluación personalizada para
                  determinar el plan adecuado y reducir riesgos, priorizando
                  siempre la seguridad y la salud.
                </p>
              </div>
            </div>
            <div
              data-reveal
              className="relative aspect-[4/5] overflow-hidden bg-tinta lg:col-span-5 lg:col-start-8"
            >
              <Image
                src="/images/servicios/Biopolimeros1.jpeg"
                alt="Cirugia de retiro de biopolimeros en Caracas"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <CtaWhatsapp
        titulo={
          <>
            Solicita tu evaluación con un <em>especialista.</em>
          </>
        }
        whatsappHref={whatsappHref}
        contentName={contentName}
      />
    </main>
  )
}
