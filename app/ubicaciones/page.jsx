import Link from "next/link"

export const metadata = {
  title: "Ubicaciones | Dr Cesar Rosales Cirujano Plastico",
  description:
    "Ubicaciones de atención del Dr Cesar Rosales, cirujano plastico con consultas en Barinas y Caracas.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/ubicaciones",
  },
  openGraph: {
    title: "Ubicaciones | Dr Cesar Rosales",
    description:
      "Consulta las ubicaciones de atención del Dr Cesar Rosales en Venezuela.",
    url: "https://www.drcesarrosales.com/ubicaciones",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Ubicaciones Dr Cesar Rosales",
      },
    ],
  },
}

export default function UbicacionesPage() {
  return (
    <main className="w-full bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
          Ubicaciones de atención
        </h1>

        <p className="mt-8 text-center text-sm sm:text-base text-white/70 leading-relaxed">
          El Dr Cesar Rosales brinda atención médica especializada en distintas
          ciudades. Selecciona la ubicación para conocer más información sobre
          la consulta y los procedimientos disponibles.
        </p>

        {/* Cards de ubicaciones */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {/* Barinas */}
          <Link
            href="/ubicaciones/barinas"
            className="group rounded-2xl border border-white/10 bg-white/5 p-10 transition hover:bg-white/10"
          >
            <h2 className="text-2xl font-medium text-white">
              Barinas
            </h2>

            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Atención médica especializada en cirugía plástica con enfoque
              médico y evaluación personalizada.
            </p>

            <span className="mt-6 inline-block text-sm text-white underline underline-offset-4">
              Ver ubicación
            </span>
          </Link>

          {/* Caracas */}
          <Link
            href="/ubicaciones/caracas"
            className="group rounded-2xl border border-white/10 bg-white/5 p-10 transition hover:bg-white/10"
          >
            <h2 className="text-2xl font-medium text-white">
              Caracas
            </h2>

            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Consultas médicas con orientación profesional y planificación
              quirúrgica personalizada.
            </p>

            <span className="mt-6 inline-block text-sm text-white underline underline-offset-4">
              Ver ubicación
            </span>
          </Link>
        </div>

        {/* Nota */}
        <p className="mt-20 text-center text-sm text-white/60">
          La disponibilidad de consultas puede variar según la ciudad y la
          agenda médica. La coordinación se realiza por WhatsApp.
        </p>
      </div>
    </main>
  )
}
