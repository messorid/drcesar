import Image from "next/image"
import Link from "next/link"
import SectionHeader from "../SectionHeader"
import Reveal from "../motion/Reveal"
import { especialista } from "@/app/content/site"

export default function Especialista({ numero }) {
  const credenciales = especialista.credenciales.filter((c) => c.valor)

  return (
    <section className="bg-arena py-24 lg:py-36">
      <div className="contenedor">
        <SectionHeader numero={numero} etiqueta="Conoce al especialista" />

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/2]">
              <Image
                src={especialista.foto}
                alt={especialista.fotoAlt}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                quality={75}
                className="object-cover object-[50%_8%]"
              />
            </div>
          </div>

          <Reveal className="lg:col-span-5 lg:pt-6">
            <h2 data-reveal className="display text-[clamp(2.6rem,5.4vw,4.75rem)]">
              Dr. César <em>Rosales</em>
            </h2>
            <p data-reveal className="label mt-4">
              Cirujano plástico · Estética &amp; reconstructiva
            </p>

            <div data-reveal className="prose-editorial mt-8 max-w-md leading-relaxed text-tinta-suave">
              {especialista.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {(credenciales.length > 0 || especialista.aniosExperiencia) && (
              <dl data-reveal className="mt-10 border-t border-tinta/20">
                {especialista.aniosExperiencia && (
                  <div className="flex items-baseline justify-between gap-6 border-b border-tinta/20 py-4">
                    <dt className="label">Experiencia</dt>
                    <dd className="text-right text-sm">
                      {especialista.aniosExperiencia} años
                    </dd>
                  </div>
                )}
                {credenciales.map((c) => (
                  <div
                    key={c.etiqueta}
                    className="flex items-baseline justify-between gap-6 border-b border-tinta/20 py-4"
                  >
                    <dt className="label">{c.etiqueta}</dt>
                    <dd className="text-right text-sm">{c.valor}</dd>
                  </div>
                ))}
              </dl>
            )}

            <Link href="/sobre-mi" data-reveal className="btn btn-linea mt-10">
              Conocer su trayectoria
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
