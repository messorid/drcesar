export const metadata = {
  title: "Cirujano Plastico en Barinas | Dr Cesar Rosales",
  description:
    "Dr Cesar Rosales, cirujano plastico en Barinas. Especialista en cirugia plastica estetica y reconstructiva con enfoque medico y seguro.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/cirujano-plastico-barinas",
  },
  openGraph: {
    title: "Cirujano Plastico en Barinas | Dr Cesar Rosales",
    description:
      "Atencion especializada en cirugia plastica en Barinas. Evaluacion medica personalizada.",
    images: [
      {
        url: "/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "Cirujano Plastico en Barinas Dr Cesar Rosales",
      },
    ],
  },
}

export default function CirujanoPlasticoBarinasPage() {
  return (
    <main className="w-full bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Cirujano Plastico en Barinas
        </h1>

        {/* Intro */}
        <p className="mt-8 text-sm sm:text-base text-white/70 leading-relaxed">
          El Dr Cesar Rosales ofrece atencion especializada en cirugia plastica
          en Barinas, brindando una evaluacion medica personalizada para cada
          paciente. La consulta permite analizar de forma individual cada caso
          y determinar el tratamiento mas adecuado segun criterios medicos.
        </p>

        <p className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed">
          La cirugia plastica requiere un enfoque responsable, basado en la
          seguridad del paciente, la experiencia profesional y una adecuada
          planificacion quirurgica.
        </p>

        {/* Procedimientos */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Procedimientos de cirugia plastica en Barinas
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Retiro de biopolimeros y cirugia reconstructiva</li>
            <li>BBL</li>
            <li>Lipo HD</li>
            <li>Cirugia mamaria</li>
          </ul>
        </section>

        {/* Consulta */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Consulta con cirujano plastico en Barinas
          </h2>

          <p className="text-white/70 leading-relaxed">
            La consulta es el primer paso para evaluar si un paciente es
            candidato a un procedimiento de cirugia plastica. Durante la
            evaluacion se revisan antecedentes medicos, expectativas y se
            explica el proceso quirurgico de manera clara.
          </p>
        </section>

        {/* Seguridad */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Enfoque medico y seguridad del paciente
          </h2>

          <p className="text-white/70 leading-relaxed">
            El Dr Cesar Rosales trabaja bajo principios de etica medica,
            confidencialidad y seguridad, priorizando siempre la salud del
            paciente por encima de cualquier expectativa estetica.
          </p>
        </section>

        {/* CTA indirecto */}
        <p className="mt-20 text-sm text-white/60">
          Para conocer la disponibilidad de consultas en Barinas, se recomienda
          contactar directamente por WhatsApp y coordinar una evaluacion medica.
        </p>
      </div>
    </main>
  )
}
