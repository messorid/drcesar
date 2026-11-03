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
    <main className="w-full bg-crema pb-24 pt-28 lg:pb-32 lg:pt-36">
      <div className="contenedor max-w-[880px]">
        <p className="label">Información legal</p>
        <h1 className="display mt-6 text-[clamp(2.8rem,7vw,5.5rem)]">
          Términos y Condiciones
        </h1>

        <p className="mt-10 text-[1.05rem] leading-relaxed text-tinta-suave">
          El presente documento establece los términos y condiciones de uso del
          sitio web del Dr Cesar Rosales. Al acceder y utilizar este sitio, el
          usuario acepta cumplir con los términos aquí descritos.
        </p>

        {/* 1 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">1. Información médica</h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            La información proporcionada en este sitio web tiene fines
            exclusivamente informativos y no sustituye una consulta médica
            presencial, diagnóstico profesional ni tratamiento especializado.
          </p>
        </section>

        {/* 2 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">2. Atención médica</h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            Toda atención médica se realiza previa evaluación clínica
            individual. Los resultados de los procedimientos pueden variar
            según cada paciente y no se garantizan resultados específicos.
          </p>
        </section>

        {/* 3 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">3. Agendamiento de consultas</h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            Las consultas se coordinan directamente por WhatsApp y están sujetas
            a disponibilidad según la ciudad de atención. La confirmación de
            citas será indicada por el equipo médico.
          </p>
        </section>

        {/* 4 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">4. Uso del sitio web</h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            El usuario se compromete a utilizar este sitio web de forma
            responsable y conforme a la ley. Queda prohibido el uso del sitio
            con fines fraudulentos, ilegales o que afecten la integridad del
            contenido.
          </p>
        </section>

        {/* 5 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">5. Propiedad intelectual</h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            Todo el contenido de este sitio web, incluyendo textos, imágenes,
            logotipos y diseño, es propiedad del Dr Cesar Rosales o se utiliza
            con autorización. Queda prohibida su reproducción sin consentimiento
            previo.
          </p>
        </section>

        {/* 6 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">6. Responsabilidad</h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            El Dr Cesar Rosales no se hace responsable por interpretaciones
            erróneas de la información contenida en el sitio ni por decisiones
            tomadas sin una evaluación médica presencial.
          </p>
        </section>

        {/* 7 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">7. Modificaciones</h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            Los presentes términos y condiciones pueden ser modificados en
            cualquier momento sin previo aviso. Se recomienda revisar
            periódicamente esta sección.
          </p>
        </section>

        {/* 8 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">8. Legislación aplicable</h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            Estos términos se rigen por las leyes vigentes de la República
            Bolivariana de Venezuela.
          </p>
        </section>

        {/* Disclaimer final */}
        <p className="mt-16 border-t border-linea pt-8 text-sm leading-relaxed text-tinta-suave">
          Este sitio web cumple con fines informativos y educativos. Para una
          evaluación médica adecuada, se recomienda acudir a una consulta
          presencial con un profesional de la salud.
        </p>
      </div>
    </main>
  )
}
