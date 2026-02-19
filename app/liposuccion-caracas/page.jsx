import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Liposuccion en Caracas | Dr Cesar Rosales",
  description:
    "Liposuccion en Caracas Venezuela con evaluacion medica especializada. Remodelacion corporal segura con el Dr Cesar Rosales.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/liposuccion-caracas",
  },
  openGraph: {
    title: "Liposuccion en Caracas | Dr Cesar Rosales",
    description:
      "Cirugia de liposuccion en Caracas Venezuela con enfoque medico profesional.",
    images: [
      {
        url: "/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "Liposuccion en Caracas Dr Cesar Rosales",
      },
    ],
  },
}

export default function LiposuccionCaracasPage() {
  return (
    <main className="w-full bg-black text-white overflow-hidden">

      {/* HERO IGUAL AL ANTERIOR */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        
        <div className="absolute inset-0">
          <Image
            src="/images/hero-dr-cesar.jpeg"
            alt="Liposuccion en Caracas Venezuela"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Liposuccion en Caracas
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/85">
            Remodelacion corporal con tecnica avanzada y enfoque seguro.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/584245846191"
              className="px-8 py-4 bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
            >
              Agendar consulta en Caracas
            </Link>

            <Link
              href="#informacion"
              className="px-8 py-4 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition"
            >
              Mas informacion
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section id="informacion" className="px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-20">

          {/* BLOQUE 1 TEXTO + IMAGEN */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-2xl font-semibold">
                Cirugia de liposuccion en Caracas Venezuela
              </h2>

              <p className="mt-6 text-white/70 leading-relaxed">
                La liposuccion en Caracas es un procedimiento quirurgico
                diseñado para eliminar grasa localizada y mejorar el contorno
                corporal. Cada paciente requiere una evaluacion personalizada
                para determinar si es candidato ideal.
              </p>

              <p className="mt-4 text-white/70 leading-relaxed">
                El procedimiento puede realizarse en abdomen, flancos,
                espalda, muslos o brazos, segun la valoracion medica
                individual.
              </p>
            </div>

            {/* IMAGEN REFERENCIAL */}
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/servicios/lipo-hd.PNG"
                alt="Liposuccion HD en Caracas Venezuela"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* BLOQUE 2 */}
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-2xl font-semibold">
              Consulta especializada en Caracas
            </h2>

            <p className="text-white/70 leading-relaxed">
              Durante la consulta se realiza una evaluacion clinica completa,
              revision de antecedentes y explicacion detallada del alcance del
              procedimiento, riesgos y expectativas reales.
            </p>

            <p className="text-white/70 leading-relaxed">
              La prioridad es la seguridad del paciente y el acompanamiento
              medico antes, durante y despues de la cirugia.
            </p>
          </div>

          {/* CTA FINAL */}
          <div className="text-center pt-10">
            <Link
              href="https://wa.me/584245846191"
              className="inline-block px-10 py-4 bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
            >
              Solicitar evaluacion medica en Caracas
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}
