import Link from "next/link"
import FbViewContent from "../components/FbViewContent"

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

export default function LipoHDBarinasPage() {
  return (
    <main className="w-full bg-black px-6 py-28 text-white">
      <FbViewContent contentName="Lipo HD Barinas" />
      <div className="mx-auto max-w-4xl">
        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Lipo HD en Barinas
        </h1>

        {/* Intro */}
        <p className="mt-8 text-sm sm:text-base text-white/70 leading-relaxed">
          La Lipo HD es un procedimiento de contorno corporal que requiere una
          planificacion medica detallada y experiencia quirurgica. En Barinas,
          el Dr Cesar Rosales realiza este procedimiento con un enfoque orientado
          a la seguridad del paciente y resultados definidos y armonicos.
        </p>

        <p className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed">
          Cada paciente es evaluado de manera individual para determinar si es
          candidato a la tecnica y establecer expectativas reales segun su
          anatomia y estado de salud.
        </p>

        {/* Que es */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Que es la Lipo HD
          </h2>

          <p className="text-white/70 leading-relaxed">
            La Lipo HD es una tecnica de liposuccion avanzada que busca definir
            grupos musculares y mejorar el contorno corporal, respetando la
            anatomia natural del paciente.
          </p>
        </section>

        {/* Consulta */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Consulta para Lipo HD en Barinas
          </h2>

          <p className="text-white/70 leading-relaxed">
            Durante la consulta se evalua el estado general de salud, la calidad
            de la piel y el tejido graso, asi como las expectativas del
            paciente, para determinar si es candidato al procedimiento.
          </p>
        </section>

        {/* Seguridad */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Seguridad y enfoque medico
          </h2>

          <p className="text-white/70 leading-relaxed">
            El Dr Cesar Rosales aplica tecnicas quirurgicas responsables y
            protocolos medicos adecuados, priorizando siempre la seguridad del
            paciente y un acompanamiento profesional durante todo el proceso.
          </p>
        </section>

        {/* 🔗 Enlaces internos SEO */}
        <section className="mt-20 border-t border-white/10 pt-10">
          <h3 className="text-lg font-medium text-white">
            Informacion relacionada
          </h3>

          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>
              <Link href="/cirujano-plastico-barinas" className="underline">
                Cirujano plastico en Barinas
              </Link>
            </li>
            <li>
              <Link href="/retiro-biopolimeros-barinas" className="underline">
                Retiro de biopolimeros en Barinas
              </Link>
            </li>
            <li>
              <Link href="/bbl-barinas" className="underline">
                BBL en Barinas
              </Link>
            </li>
            <li>
              <Link href="/como-agendar-consulta-barinas" className="underline">
                Como agendar una consulta en Barinas
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="underline">
                Pagina de contacto
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA indirecto */}
        <p className="mt-12 text-sm text-white/60">
          Para conocer la disponibilidad de consultas para Lipo HD en Barinas,
          se recomienda contactar por WhatsApp y coordinar una evaluacion medica
          personalizada.
        </p>
      </div>
    </main>
  )
}
