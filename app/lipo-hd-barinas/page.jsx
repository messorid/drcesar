import Link from "next/link"
import FbViewContent from "../components/FbViewContent"
import WhatsappLink from "../components/WhatsappLink"

export const metadata = {
  title: "Lipo HD en Barinas | Dr Cesar Rosales Cirujano Plastico",
  description:
    "Lipo HD en Barinas con evaluacion medica especializada. El Dr Cesar Rosales realiza procedimientos de contorno corporal con enfoque seguro y personalizado.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/lipo-hd-barinas",
  },
  openGraph: {
    title: "Lipo HD en Barinas | Dr Cesar Rosales",
    description:
      "Cirugia Lipo HD en Barinas con criterio medico y enfoque profesional.",
    images: [
      {
        url: "/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "Lipo HD en Barinas Dr Cesar Rosales",
      },
    ],
  },
}

const whatsappUrl =
  "https://wa.me/584245846191?text=" +
  encodeURIComponent(
    "Hola Dr César Rosales, deseo información sobre Lipo HD en Barinas"
  )

const relacionados = [
  { href: "/cirujano-plastico-barinas", label: "Cirujano plástico en Barinas" },
  {
    href: "/retiro-biopolimeros-barinas",
    label: "Retiro de biopolímeros en Barinas",
  },
  { href: "/bbl-barinas", label: "BBL en Barinas" },
  {
    href: "/como-agendar-consulta-barinas",
    label: "Cómo agendar una consulta en Barinas",
  },
  { href: "/contacto", label: "Página de contacto" },
]

export default function LipoHDBarinasPage() {
  return (
    <main className="w-full bg-ink text-cream overflow-hidden">
      <FbViewContent contentName="Lipo HD Barinas" />

      {/* HERO */}
      <section className="relative px-6 pt-40 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,_rgba(201,169,106,0.1),_transparent_70%)] blur-2xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="eyebrow">Contorno Corporal · Barinas</span>
          <h1 className="mt-7 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
            <span className="block text-cream">Lipo HD en</span>
            <span className="block gold-text">Barinas</span>
          </h1>
          <p className="mt-7 text-base sm:text-lg text-sand leading-relaxed">
            Definición y escultura corporal con planificación médica detallada y
            resultados armónicos.
          </p>
          <div className="gold-divider mx-auto mt-9 max-w-[200px]" />
          <div className="mt-10 flex justify-center">
            <WhatsappLink href={whatsappUrl} className="btn-gold">
              Agendar consulta
            </WhatsappLink>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-base text-sand leading-relaxed">
            La Lipo HD es un procedimiento de contorno corporal que requiere una
            planificación médica detallada y experiencia quirúrgica. En Barinas,
            el Dr. César Rosales realiza este procedimiento con un enfoque
            orientado a la seguridad del paciente y resultados definidos y
            armónicos.
          </p>
          <p className="mt-5 text-base text-sand leading-relaxed">
            Cada paciente es evaluado de manera individual para determinar si es
            candidato a la técnica y establecer expectativas reales según su
            anatomía y estado de salud.
          </p>

          <div className="mt-16 space-y-12">
            <article>
              <span className="eyebrow">Qué es</span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl text-cream">
                Qué es la Lipo HD
              </h2>
              <p className="mt-5 text-base text-stone leading-relaxed">
                La Lipo HD es una técnica de liposucción avanzada que busca
                definir grupos musculares y mejorar el contorno corporal,
                respetando la anatomía natural del paciente.
              </p>
            </article>

            <div className="gold-divider" />

            <article>
              <span className="eyebrow">La Consulta</span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl text-cream">
                Consulta para Lipo HD en Barinas
              </h2>
              <p className="mt-5 text-base text-stone leading-relaxed">
                Durante la consulta se evalúa el estado general de salud, la
                calidad de la piel y el tejido graso, así como las expectativas
                del paciente, para determinar si es candidato al procedimiento.
              </p>
            </article>

            <div className="gold-divider" />

            <article>
              <span className="eyebrow">Compromiso</span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl text-cream">
                Seguridad y enfoque médico
              </h2>
              <p className="mt-5 text-base text-stone leading-relaxed">
                El Dr. César Rosales aplica técnicas quirúrgicas responsables y
                protocolos médicos adecuados, priorizando siempre la seguridad
                del paciente y un acompañamiento profesional durante todo el
                proceso.
              </p>
            </article>
          </div>

          {/* CTA */}
          <div className="mt-20 surface-card rounded-2xl p-10 text-center">
            <h3 className="font-display text-2xl sm:text-3xl text-cream">
              Coordina tu evaluación médica
            </h3>
            <p className="mt-4 text-sm text-stone leading-relaxed max-w-md mx-auto">
              Consulta la disponibilidad para Lipo HD en Barinas y agenda una
              evaluación personalizada.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsappLink href={whatsappUrl} className="btn-gold">
                Escribir por WhatsApp
              </WhatsappLink>
            </div>
          </div>

          {/* Enlaces internos */}
          <section className="mt-20 border-t border-[var(--border-gold)] pt-12">
            <span className="eyebrow">Información Relacionada</span>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {relacionados.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group flex items-center gap-3 text-sm text-sand transition-colors hover:text-gold-light"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {r.label}
                    <span className="ml-auto opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  )
}
