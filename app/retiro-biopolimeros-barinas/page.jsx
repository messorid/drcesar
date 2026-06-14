export const metadata = {
  title: "Retiro de Biopolimeros en Barinas | Dr Cesar Rosales",
  description:
    "Retiro de biopolimeros en Barinas con evaluacion medica especializada. El Dr Cesar Rosales ofrece cirugia reconstructiva con enfoque seguro y personalizado.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/retiro-biopolimeros-barinas",
  },
  openGraph: {
    title: "Retiro de Biopolimeros en Barinas | Dr Cesar Rosales",
    description:
      "Cirugia de retiro de biopolimeros en Barinas con enfoque medico y reconstructivo.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Retiro de Biopolimeros en Barinas Dr Cesar Rosales",
      },
    ],
  },
}

import FbViewContent from "../components/FbViewContent"

export default function RetiroBiopolimerosBarinasPage() {
  return (
    <main className="w-full bg-black px-6 py-28 text-white">
      <FbViewContent contentName="Consulta General" />
      <div className="mx-auto max-w-4xl">
        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Retiro de Biopolimeros en Barinas
        </h1>

        {/* Intro */}
        <p className="mt-8 text-sm sm:text-base text-white/70 leading-relaxed">
          El retiro de biopolimeros es un procedimiento quirurgico que requiere
          una evaluacion medica cuidadosa y experiencia en cirugia
          reconstructiva. En Barinas, el Dr Cesar Rosales realiza este tipo de
          cirugia con un enfoque centrado en la seguridad del paciente.
        </p>

        <p className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed">
          Cada caso es distinto, por lo que es fundamental analizar el tipo de
          material infiltrado, la zona afectada y el estado general de salud
          del paciente antes de indicar el procedimiento.
        </p>

        {/* Que es */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Que implica el retiro de biopolimeros
          </h2>

          <p className="text-white/70 leading-relaxed">
            El procedimiento busca retirar la mayor cantidad posible del
            material infiltrado, disminuir complicaciones y mejorar la funcion
            y apariencia de la zona tratada. La cirugia puede requerir tecnicas
            reconstructivas adicionales segun el caso.
          </p>
        </section>

        {/* Consulta */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Consulta para retiro de biopolimeros en Barinas
          </h2>

          <p className="text-white/70 leading-relaxed">
            Durante la consulta se realiza una evaluacion clinica completa,
            revision de estudios previos y se explica de manera clara el alcance
            del procedimiento, riesgos y expectativas reales.
          </p>
        </section>

        {/* Seguridad */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Enfoque medico y seguridad
          </h2>

          <p className="text-white/70 leading-relaxed">
            El Dr Cesar Rosales prioriza la seguridad del paciente, el manejo
            responsable de cada caso y el acompanamiento medico antes, durante
            y despues de la cirugia.
          </p>
        </section>

        {/* CTA indirecto */}
        <p className="mt-20 text-sm text-white/60">
          Para conocer la disponibilidad de consultas para retiro de
          biopolimeros en Barinas, se recomienda contactar directamente por
          WhatsApp y coordinar una evaluacion medica especializada.
        </p>
      </div>
    </main>
  )
}
