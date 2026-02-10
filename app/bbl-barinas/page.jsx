import Link from "next/link"

export const metadata = {
  title: "BBL en Barinas | Dr Cesar Rosales Cirujano Plastico",
  description:
    "BBL en Barinas con evaluacion medica especializada. El Dr Cesar Rosales realiza procedimientos con enfoque en seguridad y criterio medico.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/bbl-barinas",
  },
  openGraph: {
    title: "BBL en Barinas | Dr Cesar Rosales",
    description:
      "Cirugia BBL en Barinas con evaluacion medica personalizada.",
    images: [
      {
        url: "/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "BBL en Barinas Dr Cesar Rosales",
      },
    ],
  },
}

export default function BBLBarinasPage() {
  return (
    <main className="w-full bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          BBL en Barinas
        </h1>

        <p className="mt-8 text-sm sm:text-base text-white/70 leading-relaxed">
          El BBL es un procedimiento de cirugia plastica que requiere una
          evaluacion medica cuidadosa. En Barinas, el Dr Cesar Rosales realiza
          este procedimiento con enfoque en seguridad y resultados armónicos.
        </p>

        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">Que es el BBL</h2>
          <p className="text-white/70 leading-relaxed">
            El BBL combina liposuccion y transferencia de grasa para mejorar el
            contorno corporal de forma equilibrada y personalizada.
          </p>
        </section>

        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-medium">
            Consulta para BBL en Barinas
          </h2>
          <p className="text-white/70 leading-relaxed">
            Durante la consulta se evalua el estado de salud del paciente y se
            determina si es candidato al procedimiento.
          </p>
        </section>

        {/* 🔗 Enlaces internos SEO */}
        <section className="mt-20 border-t border-white/10 pt-10">
          <h3 className="text-lg font-medium text-white">
            Informacion relacionada
          </h3>

          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>
              <Link href="/cirujano-plastico-barinas" className="underline">
                Cirujano plastico en Barinas
              </Link>
            </li>
            <li>
              <Link href="/retiro-biopolimeros-barinas" className="underline">
                Retiro de biopolimeros en Barinas
              </Link>
            </li>
            <li>
              <Link href="/lipo-hd-barinas" className="underline">
                Lipo HD en Barinas
              </Link>
            </li>
            <li>
              <Link href="/como-agendar-consulta-barinas" className="underline">
                Como agendar una consulta en Barinas
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="underline">
                Pagina de contacto
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-sm text-white/60">
          Para conocer disponibilidad de consultas en Barinas, se recomienda
          contactar por WhatsApp y coordinar una evaluacion medica.
        </p>
      </div>
    </main>
  )
}
