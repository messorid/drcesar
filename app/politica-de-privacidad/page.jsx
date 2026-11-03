export const metadata = {
  title: "Política de Privacidad | Dr Cesar Rosales",
  description:
    "Política de privacidad del sitio web del Dr Cesar Rosales, cirujano plástico en Barinas y Caracas. Protección y uso responsable de la información personal.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/politica-de-privacidad",
  },
  openGraph: {
    title: "Política de Privacidad | Dr Cesar Rosales",
    description:
      "Conoce cómo se protege y utiliza la información personal en el sitio web del Dr Cesar Rosales.",
    url: "https://www.drcesarrosales.com/politica-de-privacidad",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Política de Privacidad Dr Cesar Rosales",
      },
    ],
  },
}

export default function PoliticaPrivacidadPage() {
  return (
    <main className="w-full bg-crema pb-24 pt-28 lg:pb-32 lg:pt-36">
      <div className="contenedor max-w-[880px]">
        <p className="label">Información legal</p>
        <h1 className="display mt-6 text-[clamp(2.8rem,7vw,5.5rem)]">
          Política de Privacidad
        </h1>

        <p className="mt-10 text-[1.05rem] leading-relaxed text-tinta-suave">
          La presente Política de Privacidad describe cómo se recopila, utiliza
          y protege la información personal proporcionada por los usuarios del
          sitio web del Dr Cesar Rosales.
        </p>

        {/* 1 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">
            1. Información recopilada
          </h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            Este sitio web no recopila información médica sensible a través de
            formularios. La información personal se obtiene únicamente cuando
            el usuario decide comunicarse de manera voluntaria por WhatsApp u
            otros medios de contacto indicados.
          </p>
        </section>

        {/* 2 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">
            2. Uso de la información
          </h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            La información proporcionada será utilizada exclusivamente para
            fines de contacto, coordinación de consultas médicas y atención al
            paciente. No se utilizará para fines publicitarios no autorizados.
          </p>
        </section>

        {/* 3 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">
            3. Protección de datos
          </h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            El Dr Cesar Rosales adopta medidas razonables para proteger la
            información personal frente a accesos no autorizados, pérdidas o
            usos indebidos, respetando la confidencialidad del paciente.
          </p>
        </section>

        {/* 4 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">
            4. Compartir información
          </h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            La información personal no será compartida con terceros, salvo
            cuando sea estrictamente necesario para la atención médica o por
            requerimiento legal de las autoridades competentes.
          </p>
        </section>

        {/* 5 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">
            5. Enlaces externos
          </h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            Este sitio web puede contener enlaces a plataformas externas, como
            WhatsApp o Google Maps. El Dr Cesar Rosales no es responsable de las
            políticas de privacidad de dichos sitios.
          </p>
        </section>

        {/* 6 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">
            6. Derechos del usuario
          </h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            El usuario puede solicitar información sobre el uso de sus datos
            personales o solicitar su eliminación comunicándose directamente
            por los canales oficiales indicados en este sitio.
          </p>
        </section>

        {/* 7 */}
        <section className="mt-12 border-t border-linea pt-8">
          <h2 className="display text-[1.9rem] leading-tight">
            7. Cambios en la política
          </h2>
          <p className="mt-4 leading-relaxed text-tinta-suave">
            Esta política de privacidad puede ser actualizada en cualquier
            momento. Se recomienda revisar periódicamente esta sección para
            mantenerse informado.
          </p>
        </section>

        {/* Cierre */}
        <p className="mt-16 border-t border-linea pt-8 text-sm leading-relaxed text-tinta-suave">
          El uso de este sitio web implica la aceptación de la presente Política
          de Privacidad. Para cualquier duda relacionada con la protección de
          datos, se recomienda contactar directamente al equipo médico.
        </p>
      </div>
    </main>
  )
}
