import Image from "next/image"
import BeforeAfterPro from "../components/BeforeAfterPro"
import FbViewContent from "../components/FbViewContent"
import WhatsappLink from "../components/WhatsappLink"

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

const whatsappUrl =
  "https://wa.me/584245846191?text=" +
  encodeURIComponent(
    "Hola Dr César Rosales, deseo información sobre retiro de biopolímeros en Caracas"
  )

export default function RetiroBiopolimerosCaracasPage() {
  return (
    <main className="w-full bg-ink text-cream overflow-hidden">
      <FbViewContent contentName="Retiro de Biopolimeros" />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-dr-cesar.jpeg"
            alt="Retiro de Biopolimeros en Caracas Venezuela"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(10,9,8,0.85)_100%)]" />

        {/* Marcos ornamentales */}
        <span className="pointer-events-none absolute left-6 top-24 sm:left-10 h-10 w-10 border-l border-t border-gold/50" />
        <span className="pointer-events-none absolute right-6 top-24 sm:right-10 h-10 w-10 border-r border-t border-gold/50" />

        <div className="relative z-10 px-6 max-w-3xl">
          <span className="eyebrow">Cirugía Reconstructiva · Caracas</span>

          <h1 className="mt-7 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
            <span className="block text-cream">Retiro de</span>
            <span className="block gold-text">Biopolímeros</span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-sand leading-relaxed">
            Evaluación especializada y manejo reconstructivo seguro, con criterio
            médico y acompañamiento profesional.
          </p>

          <div className="gold-divider mx-auto mt-9 max-w-[200px]" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsappLink href={whatsappUrl} className="btn-gold w-full sm:w-auto">
              Agendar consulta en Caracas
            </WhatsappLink>
            <a href="#informacion" className="btn-outline w-full sm:w-auto">
              Más información
            </a>
          </div>
        </div>
      </section>

      {/* ANTES Y DESPUÉS */}
      <section className="py-28 bg-ink-soft px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow">Resultados Reales</span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl text-cream">
              Antes y <span className="gold-text">después</span>
            </h2>
            <div className="gold-divider mx-auto mt-10 max-w-[160px]" />
          </div>

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
      </section>

      {/* CONTENIDO SEO */}
      <section id="informacion" className="px-6 py-28 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">El Procedimiento</span>
              <h2 className="mt-6 text-3xl sm:text-4xl text-cream leading-tight">
                Cirugía de retiro de biopolímeros en{" "}
                <span className="gold-text">Caracas</span>
              </h2>

              <div className="gold-divider my-8 max-w-[120px]" />

              <p className="text-base text-sand leading-relaxed">
                El retiro de biopolímeros en Caracas es un procedimiento
                quirúrgico complejo que requiere experiencia en cirugía plástica
                y reconstrucción de tejidos.
              </p>

              <p className="mt-5 text-base text-sand leading-relaxed">
                Cada paciente necesita una evaluación personalizada para
                determinar el plan adecuado y reducir riesgos, priorizando
                siempre la seguridad y la salud.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -right-4 -bottom-4 h-20 w-20 border-r border-b border-gold/50" />
              <div className="relative w-full h-[440px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/servicios/Biopolimeros1.jpeg"
                  alt="Cirugia de retiro de biopolimeros en Caracas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative px-6 pb-32 pt-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cream leading-[1.1]">
            Solicita tu evaluación con un{" "}
            <span className="gold-text">especialista</span>
          </h2>
          <div className="mt-12 flex justify-center">
            <WhatsappLink href={whatsappUrl} className="btn-gold">
              Agendar por WhatsApp
            </WhatsappLink>
          </div>
        </div>
      </section>
    </main>
  )
}
