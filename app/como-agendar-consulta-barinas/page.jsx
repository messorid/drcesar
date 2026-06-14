export const metadata = {
  title:
    "Como agendar consulta con cirujano plastico en Barinas | Dr Cesar Rosales",
  description:
    "Guia clara para agendar una consulta con cirujano plastico en Barinas. Proceso de contacto, evaluacion medica y coordinacion de citas.",
  alternates: {
    canonical:
      "https://www.drcesarrosales.com/como-agendar-consulta-barinas",
  },
  openGraph: {
    title:
      "Como agendar consulta con cirujano plastico en Barinas",
    description:
      "Conoce el proceso para agendar una consulta de cirugia plastica en Barinas.",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Agendar consulta cirujano plastico en Barinas",
      },
    ],
  },
}

export default function ComoAgendarConsultaBarinasPage() {
  return (
    <main className="w-full bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Como agendar consulta con cirujano plastico en Barinas
        </h1>

        {/* Intro */}
        <p className="mt-8 text-sm sm:text-base text-white/70 leading-relaxed">
          Agendar una consulta con un cirujano plastico en Barinas es el primer
          paso para recibir una evaluacion medica adecuada. La consulta permite
          aclarar dudas, revisar antecedentes y determinar el procedimiento mas
          indicado segun cada caso.
        </p>

        {/* Paso 1 */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Paso 1. Contacto por WhatsApp
          </h2>

          <p className="text-white/70 leading-relaxed">
            El proceso inicia escribiendo directamente por WhatsApp. El
            paciente indica el procedimiento de interes y consulta la
            disponibilidad de atencion en Barinas.
          </p>
        </section>

        {/* Paso 2 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">
            Paso 2. Orientacion inicial
          </h2>

          <p className="text-white/70 leading-relaxed">
            Antes de la consulta presencial se brinda una orientacion inicial
            para resolver dudas generales y explicar el proceso de evaluacion
            medica.
          </p>
        </section>

        {/* Paso 3 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">
            Paso 3. Consulta presencial
          </h2>

          <p className="text-white/70 leading-relaxed">
            Durante la consulta presencial se realiza una evaluacion clinica
            completa, se revisan antecedentes medicos y se establecen
            expectativas reales sobre el procedimiento.
          </p>
        </section>

        {/* Procedimientos */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Procedimientos evaluados durante la consulta
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Retiro de biopolimeros</li>
            <li>BBL</li>
            <li>Lipo HD</li>
            <li>Cirugia mamaria</li>
          </ul>
        </section>

        {/* Cierre */}
        <p className="mt-20 text-sm text-white/60">
          La disponibilidad de consultas en Barinas depende de la agenda
          medica. Para conocer fechas disponibles, se recomienda escribir por
          WhatsApp y coordinar la evaluacion.
        </p>
      </div>
    </main>
  )
}
