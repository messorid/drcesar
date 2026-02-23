import Image from "next/image"
import Link from "next/link"
import BeforeAfterPro from "../components/BeforeAfterPro"
export const metadata = {
  title: "Retiro de Biopolimeros en Caracas | Dr Cesar Rosales",
  description:
    "Retiro de biopolimeros en Caracas Venezuela con evaluacion medica especializada. Cirugia reconstructiva segura con el Dr Cesar Rosales.",
  alternates: {
    canonical: "https://www.drcesarrosales.com/retiro-biopolimeros-caracas",
  },
  openGraph: {
    title: "Retiro de Biopolimeros en Caracas | Dr Cesar Rosales",
    description:
      "Cirugia de retiro de biopolimeros en Caracas Venezuela con enfoque medico y reconstructivo.",
    images: [
      {
        url: "/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "Retiro de Biopolimeros en Caracas Dr Cesar Rosales",
      },
    ],
  },
}

export default function RetiroBiopolimerosCaracasPage() {
  return (
    <main className="w-full bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        
        <div className="absolute inset-0">
          <Image
            src="/images/hero-dr-cesar.jpeg"
            alt="Retiro de Biopolimeros en Caracas Venezuela"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Retiro de Biopolimeros en Caracas
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/85">
            Evaluacion especializada y manejo reconstructivo seguro.
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

      {/* BEFORE AFTER SECTION */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-16">
            Antes y Despues del Retiro de Biopolimeros
          </h2>

          <BeforeAfterPro
            beforeImage="/images/servicios/biopolimeros.jpg"
            afterImage="/images/servicios/Biopolimeros1.jpeg"
            altBefore="Antes retiro de biopolimeros"
            altAfter="Despues retiro de biopolimeros"
            labelBefore="Antes"
            labelAfter="Despues"
            watermarkText="Dr Cesar Rosales"
            accentClass="bg-sky-400"
            autoplay={true}
            autoplayMs={1400}
          />

        </div>
      </section>

      {/* CONTENIDO SEO */}
      <section id="informacion" className="px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-2xl font-semibold">
                Cirugia de retiro de biopolimeros en Caracas Venezuela
              </h2>

              <p className="mt-6 text-white/70 leading-relaxed">
                El retiro de biopolimeros en Caracas es un procedimiento
                quirurgico complejo que requiere experiencia en cirugia plastica
                y reconstruccion de tejidos.
              </p>

              <p className="mt-4 text-white/70 leading-relaxed">
                Cada paciente necesita una evaluacion personalizada para
                determinar el plan adecuado y reducir riesgos.
              </p>
            </div>

            <div className="relative w-full h-[400px]">
              <Image
                src="/images/servicios/Biopolimeros1.jpeg"
                alt="Cirugia de retiro de biopolimeros en Caracas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
