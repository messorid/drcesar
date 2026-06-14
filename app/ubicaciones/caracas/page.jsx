export const metadata = {
  title: "Cirujano Plastico en Caracas | Dr Cesar Rosales",
  description:
    "Dr Cesar Rosales, cirujano plastico en Caracas. Especialista en cirugia estetica y reconstructiva con enfoque medico y seguro.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/ubicaciones/caracas",
  },
  openGraph: {
    title: "Cirujano Plastico en Caracas | Dr Cesar Rosales",
    description:
      "Atencion en Caracas con evaluacion medica personalizada.",
    url: "https://www.drcesarrosales.com/ubicaciones/caracas",
    images: [
      {
        url: "/images/og.JPG",
        width: 1200,
        height: 630,
        alt: "Cirujano Plastico en Caracas Dr Cesar Rosales",
      },
    ],
  },
}

export default function CaracasPage() {
  return (
    <main className="w-full bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Cirujano Plastico en Caracas
        </h1>

        <p className="mt-8 text-sm sm:text-base text-white/70 leading-relaxed">
          El Dr Cesar Rosales brinda atencion en Caracas para pacientes que
          buscan cirugia plastica con enfoque medico, estetico y seguro.
        </p>

        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Procedimientos disponibles en Caracas
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Retiro de biopolimeros</li>
            <li>BBL</li>
            <li>Lipo HD</li>
            <li>Cirugia mamaria</li>
          </ul>
        </section>

        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Consulta medica especializada
          </h2>

          <p className="text-white/70 leading-relaxed">
            Cada consulta incluye evaluacion clinica, orientacion profesional
            y explicacion detallada del procedimiento mas adecuado.
          </p>
        </section>

        <p className="mt-20 text-sm text-white/60">
          La disponibilidad de consultas en Caracas se coordina previamente
          por WhatsApp.
        </p>
      </div>
    </main>
  )
}
