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
    <main className="w-full bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
          Política de Privacidad
        </h1>

        <p className="mt-10 text-sm sm:text-base text-white/70 leading-relaxed">
          La presente Política de Privacidad describe cómo se recopila, utiliza
          y protege la información personal proporcionada por los usuarios del
          sitio web del Dr Cesar Rosales.
        </p>

        {/* 1 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">
            1. Información recopilada
          </h2>
          <p className="text-white/70 leading-relaxed">
            Este sitio web no recopila información médica sensible a través de
            formularios. La información personal se obtiene únicamente cuando
            el usuario decide comunicarse de manera voluntaria por WhatsApp u
            otros medios de contacto indicados.
          </p>
        </section>

        {/* 2 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">
            2. Uso de la información
          </h2>
          <p className="text-white/70 leading-relaxed">
            La información proporcionada será utilizada exclusivamente para
            fines de contacto, coordinación de consultas médicas y atención al
            paciente. No se utilizará para fines publicitarios no autorizados.
          </p>
        </section>

        {/* 3 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">
            3. Protección de datos
          </h2>
          <p className="text-white/70 leading-relaxed">
            El Dr Cesar Rosales adopta medidas razonables para proteger la
            información personal frente a accesos no autorizados, pérdidas o
            usos indebidos, respetando la confidencialidad del paciente.
          </p>
        </section>

        {/* 4 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">
            4. Compartir información
          </h2>
          <p className="text-white/70 leading-relaxed">
            La información personal no será compartida con terceros, salvo
            cuando sea estrictamente necesario para la atención médica o por
            requerimiento legal de las autoridades competentes.
          </p>
        </section>

        {/* 5 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">
            5. Enlaces externos
          </h2>
          <p className="text-white/70 leading-relaxed">
            Este sitio web puede contener enlaces a plataformas externas, como
            WhatsApp o Google Maps. El Dr Cesar Rosales no es responsable de las
            políticas de privacidad de dichos sitios.
          </p>
        </section>

        {/* 6 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">
            6. Derechos del usuario
          </h2>
          <p className="text-white/70 leading-relaxed">
            El usuario puede solicitar información sobre el uso de sus datos
            personales o solicitar su eliminación comunicándose directamente
            por los canales oficiales indicados en este sitio.
          </p>
        </section>

        {/* 7 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-medium">
            7. Cambios en la política
          </h2>
          <p className="text-white/70 leading-relaxed">
            Esta política de privacidad puede ser actualizada en cualquier
            momento. Se recomienda revisar periódicamente esta sección para
            mantenerse informado.
          </p>
        </section>

        {/* Cierre */}
        <p className="mt-20 text-xs text-white/50 text-center leading-relaxed">
          El uso de este sitio web implica la aceptación de la presente Política
          de Privacidad. Para cualquier duda relacionada con la protección de
          datos, se recomienda contactar directamente al equipo médico.
        </p>
      </div>
    </main>
  )
}
