export const metadata = {
  title: "Términos y Condiciones | Dr Cesar Rosales",
  description:
    "Términos y condiciones del sitio web del Dr Cesar Rosales, cirujano plástico en Barinas y Caracas. Información legal sobre el uso del sitio y atención médica.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/terminos-y-condiciones",
  },
  openGraph: {
    title: "Términos y Condiciones | Dr Cesar Rosales",
    description:
      "Consulta los términos y condiciones del sitio web del Dr Cesar Rosales.",
    url: "https://www.drcesarrosales.com/terminos-y-condiciones",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Términos y Condiciones Dr Cesar Rosales",
      },
    ],
  },
}

export default function TerminosPage() {
  return (
    <main className="w-full bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
          Términos y Condiciones
        </h1>

        <p className="mt-10 text-sm sm:text-base text-white/70 leading-relaxed">
          El presente documento establece los términos y condiciones de uso del
          sitio web del Dr Cesar Rosales. Al acceder y utilizar este sitio, el
          usuario acepta cumplir con los términos aquí descritos.
        </p>

        {/* 1 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">1. Información médica</h2>
          <p className="text-white/70 leading-relaxed">
            La información proporcionada en este sitio web tiene fines
            exclusivamente informativos y no sustituye una consulta médica
            presencial, diagnóstico profesional ni tratamiento especializado.
          </p>
        </section>

        {/* 2 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">2. Atención médica</h2>
          <p className="text-white/70 leading-relaxed">
            Toda atención médica se realiza previa evaluación clínica
            individual. Los resultados de los procedimientos pueden variar
            según cada paciente y no se garantizan resultados específicos.
          </p>
        </section>

        {/* 3 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">3. Agendamiento de consultas</h2>
          <p className="text-white/70 leading-relaxed">
            Las consultas se coordinan directamente por WhatsApp y están sujetas
            a disponibilidad según la ciudad de atención. La confirmación de
            citas será indicada por el equipo médico.
          </p>
        </section>

        {/* 4 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">4. Uso del sitio web</h2>
          <p className="text-white/70 leading-relaxed">
            El usuario se compromete a utilizar este sitio web de forma
            responsable y conforme a la ley. Queda prohibido el uso del sitio
            con fines fraudulentos, ilegales o que afecten la integridad del
            contenido.
          </p>
        </section>

        {/* 5 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">5. Propiedad intelectual</h2>
          <p className="text-white/70 leading-relaxed">
            Todo el contenido de este sitio web, incluyendo textos, imágenes,
            logotipos y diseño, es propiedad del Dr Cesar Rosales o se utiliza
            con autorización. Queda prohibida su reproducción sin consentimiento
            previo.
          </p>
        </section>

        {/* 6 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">6. Responsabilidad</h2>
          <p className="text-white/70 leading-relaxed">
            El Dr Cesar Rosales no se hace responsable por interpretaciones
            erróneas de la información contenida en el sitio ni por decisiones
            tomadas sin una evaluación médica presencial.
          </p>
        </section>

        {/* 7 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">7. Modificaciones</h2>
          <p className="text-white/70 leading-relaxed">
            Los presentes términos y condiciones pueden ser modificados en
            cualquier momento sin previo aviso. Se recomienda revisar
            periódicamente esta sección.
          </p>
        </section>

        {/* 8 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">8. Legislación aplicable</h2>
          <p className="text-white/70 leading-relaxed">
            Estos términos se rigen por las leyes vigentes de la República
            Bolivariana de Venezuela.
          </p>
        </section>

        {/* Disclaimer final */}
        <p className="mt-20 text-xs text-white/50 text-center leading-relaxed">
          Este sitio web cumple con fines informativos y educativos. Para una
          evaluación médica adecuada, se recomienda acudir a una consulta
          presencial con un profesional de la salud.
        </p>
      </div>
    </main>
  )
}
