import Link from "next/link"

export const metadata = {
  title: "Cirujano Plastico en Barinas | Dr Cesar Rosales",
  description:
    "Dr Cesar Rosales, cirujano plastico en Barinas. Especialista en retiro de biopolimeros, BBL, Lipo HD y cirugia mamaria. Atencion medica profesional.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/ubicaciones/barinas",
  },
  openGraph: {
    title: "Cirujano Plastico en Barinas | Dr Cesar Rosales",
    description:
      "Atencion en Barinas con enfoque medico, seguro y personalizado.",
    url: "https://www.drcesarrosales.com/ubicaciones/barinas",
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

export default function BarinasPage() {
  return (
    <main className="w-full bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Cirujano Plastico en Barinas
        </h1>

        <p className="mt-8 text-sm sm:text-base text-white/70 leading-relaxed">
          El Dr Cesar Rosales ofrece atencion especializada en cirugia plastica
          en Barinas, con enfoque medico, evaluacion personalizada y altos
          estandares de seguridad.
        </p>

        <p className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed">
          La consulta permite valorar cada caso de manera individual y definir
          las opciones de tratamiento mas adecuadas segun las necesidades del
          paciente.
        </p>

        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Procedimientos realizados en Barinas
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Retiro de biopolimeros y reconstruccion</li>
            <li>BBL</li>
            <li>Lipo HD</li>
            <li>Cirugia mamaria</li>
          </ul>
        </section>

        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Consulta de cirugia plastica en Barinas
          </h2>

          <p className="text-white/70 leading-relaxed">
            Las consultas se realizan previa coordinacion por WhatsApp. Durante
            la evaluacion se aclaran dudas, se revisan antecedentes medicos y se
            explica el procedimiento indicado para cada paciente.
          </p>
        </section>

        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Atencion profesional y segura
          </h2>

          <p className="text-white/70 leading-relaxed">
            El Dr Cesar Rosales trabaja bajo principios de etica medica,
            confidencialidad y seguridad del paciente, brindando acompanamiento
            antes, durante y despues del procedimiento.
          </p>
        </section>

        <p className="mt-20 text-sm text-white/60">
          Para consultar disponibilidad en Barinas, comunicate directamente
          por WhatsApp.
        </p>

        <div className="mt-10">
          <Link
            href="/contacto"
            className="text-sm underline underline-offset-4 text-white"
          >
            Ir a contacto
          </Link>
        </div>
      </div>
    </main>
  )
}
