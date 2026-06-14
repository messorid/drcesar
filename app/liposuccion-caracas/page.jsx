import Image from "next/image"
import FbViewContent from "../components/FbViewContent"
import WhatsappLink from "../components/WhatsappLink"

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

const whatsappUrl =
  "https://wa.me/584245846191?text=" +
  encodeURIComponent(
    "Hola Dr César Rosales, deseo información sobre liposucción en Caracas"
  )

export default function LiposuccionCaracasPage() {
  return (
    <main className="w-full bg-ink text-cream overflow-hidden">
      <FbViewContent contentName="Consulta General" />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-dr-cesar.jpeg"
            alt="Liposuccion en Caracas Venezuela"
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
          <span className="eyebrow">Remodelación Corporal · Caracas</span>

          <h1 className="mt-7 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
            <span className="block text-cream">Liposucción en</span>
            <span className="block gold-text">Caracas</span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-sand leading-relaxed">
            Remodelación corporal con técnica avanzada y un enfoque centrado en
            la seguridad del paciente.
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

      {/* CONTENIDO */}
      <section id="informacion" className="px-6 py-28 scroll-mt-20">
        <div className="mx-auto max-w-6xl space-y-24">
          {/* BLOQUE 1: TEXTO + IMAGEN */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">El Procedimiento</span>
              <h2 className="mt-6 text-3xl sm:text-4xl text-cream leading-tight">
                Cirugía de liposucción en{" "}
                <span className="gold-text">Caracas</span>
              </h2>

              <div className="gold-divider my-8 max-w-[120px]" />

              <p className="text-base text-sand leading-relaxed">
                La liposucción en Caracas es un procedimiento quirúrgico
                diseñado para eliminar grasa localizada y mejorar el contorno
                corporal. Cada paciente requiere una evaluación personalizada
                para determinar si es candidato ideal.
              </p>

              <p className="mt-5 text-base text-sand leading-relaxed">
                El procedimiento puede realizarse en abdomen, flancos, espalda,
                muslos o brazos, según la valoración médica individual.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -right-4 -bottom-4 h-20 w-20 border-r border-b border-gold/50" />
              <div className="relative w-full h-[440px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/servicios/lipo-hd.PNG"
                  alt="Liposuccion HD en Caracas Venezuela"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* BLOQUE 2 */}
          <div className="max-w-3xl">
            <span className="eyebrow">La Consulta</span>
            <h2 className="mt-6 text-3xl sm:text-4xl text-cream leading-tight">
              Consulta especializada en{" "}
              <span className="gold-text">Caracas</span>
            </h2>

            <div className="gold-divider my-8 max-w-[120px]" />

            <p className="text-base text-sand leading-relaxed">
              Durante la consulta se realiza una evaluación clínica completa,
              revisión de antecedentes y explicación detallada del alcance del
              procedimiento, riesgos y expectativas reales.
            </p>

            <p className="mt-5 text-base text-sand leading-relaxed">
              La prioridad es la seguridad del paciente y el acompañamiento
              médico antes, durante y después de la cirugía.
            </p>
          </div>

          {/* CTA FINAL */}
          <div className="surface-card rounded-2xl p-12 text-center">
            <h3 className="font-display text-2xl sm:text-3xl text-cream">
              Solicita tu evaluación médica en{" "}
              <span className="gold-text">Caracas</span>
            </h3>
            <p className="mt-4 text-sm text-stone leading-relaxed max-w-md mx-auto">
              Coordina una valoración personalizada y conoce si eres candidato
              al procedimiento.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsappLink href={whatsappUrl} className="btn-gold">
                Escribir por WhatsApp
              </WhatsappLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
