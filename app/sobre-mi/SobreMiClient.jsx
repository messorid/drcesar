import Image from "next/image"
import Link from "next/link"
import WhatsappLink from "../components/WhatsappLink"
import SectionHeader from "../components/SectionHeader"
import Reveal from "../components/motion/Reveal"
import { especialista, procedimientos, waLink } from "../content/site"

const valores = [
  {
    title: "Criterio Médico",
    text: "Cada indicación quirúrgica parte de una evaluación clínica rigurosa y honesta.",
  },
  {
    title: "Resultados Naturales",
    text: "Armonía y proporción, respetando la anatomía y la identidad de cada paciente.",
  },
  {
    title: "Seguridad Integral",
    text: "Acompañamiento profesional antes, durante y después de cada procedimiento.",
  },
]

const especialidades = [
  "Retiro de Biopolímeros",
  "Cirugía Reconstructiva",
  "Lipo HD & Contorno Corporal",
  "Brazilian Butt Lift (BBL)",
  "Cirugía Mamaria",
  "Liposucción",
]

// Enlaza la especialidad con su página cuando existe
const hrefEspecialidad = {
  "Retiro de Biopolímeros": procedimientos[0].href,
  "Brazilian Butt Lift (BBL)": procedimientos[1].href,
  "Lipo HD & Contorno Corporal": procedimientos[2].href,
  "Cirugía Mamaria": procedimientos[3].href,
  Liposucción: "/liposuccion-caracas",
}

export default function SobreMiClient() {
  const credenciales = especialista.credenciales.filter((c) => c.valor)

  return (
    <main className="w-full bg-crema">
      {/* PERFIL */}
      <section className="pb-20 pt-28 lg:pb-32 lg:pt-36">
        <div className="contenedor grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-arena">
              <Image
                src="/images/dr-cesar-rosales.JPG"
                alt="Dr César Rosales Cirujano Plástico en Barinas y Caracas"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                quality={78}
                className="object-cover object-top"
              />
            </div>
          </div>

          <Reveal className="lg:col-span-6 lg:col-start-7 lg:self-end">
            <p data-reveal className="label">
              Sobre el especialista
            </p>
            <h1 data-reveal className="display mt-6 text-[clamp(3rem,8vw,6.5rem)]">
              Dr. César <em>Rosales</em>
            </h1>
            <p data-reveal className="label mt-4">
              Cirujano Plástico
            </p>

            <div data-reveal className="prose-editorial mt-10 max-w-lg leading-relaxed text-tinta-suave">
              <p>
                Cirujano plástico dedicado a la cirugía estética y
                reconstructiva, con una práctica fundamentada en la seguridad
                del paciente, la evaluación personalizada y la búsqueda de
                resultados armónicos y naturales.
              </p>
              <p>
                Su enfoque combina criterio médico, técnica depurada y un
                acompañamiento cercano en cada etapa del proceso, ofreciendo
                atención profesional a pacientes en Barinas, Caracas y San
                Cristóbal.
              </p>
            </div>

            {(credenciales.length > 0 || especialista.aniosExperiencia) && (
              <dl data-reveal className="mt-10 border-t border-linea">
                {especialista.aniosExperiencia && (
                  <div className="flex items-baseline justify-between gap-6 border-b border-linea py-4">
                    <dt className="label">Experiencia</dt>
                    <dd className="text-right text-sm">
                      {especialista.aniosExperiencia} años
                    </dd>
                  </div>
                )}
                {credenciales.map((c) => (
                  <div
                    key={c.etiqueta}
                    className="flex items-baseline justify-between gap-6 border-b border-linea py-4"
                  >
                    <dt className="label">{c.etiqueta}</dt>
                    <dd className="text-right text-sm">{c.valor}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Reveal>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-arena py-20 lg:py-32">
        <div className="contenedor">
          <SectionHeader etiqueta="Filosofía" />
          <h2 className="display mt-10 max-w-[16ch] text-[clamp(2.4rem,5.4vw,4.5rem)]">
            Principios que guían cada <em>procedimiento</em>
          </h2>

          <Reveal className="mt-14 grid border-t border-tinta/20 lg:grid-cols-3">
            {valores.map((v, i) => (
              <article
                key={v.title}
                data-reveal
                className="border-b border-tinta/20 py-10 lg:border-b-0 lg:border-r lg:px-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span aria-hidden="true" className="block h-px w-10 bg-dorado" />
                <h3 className="display mt-6 text-[2rem]">{v.title}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-tinta-suave">
                  {v.text}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="py-20 lg:py-32">
        <div className="contenedor grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader etiqueta="Áreas de práctica" />
            <h2 className="display mt-10 text-[clamp(2.4rem,5.4vw,4.5rem)]">
              <em>Especialidades</em>
            </h2>
            <div className="relative mt-10 hidden aspect-[3/2] overflow-hidden bg-arena lg:block">
              <Image
                src="/images/dr-cesar-rosales-profile.JPG"
                alt="Dr. César Rosales, cirujano plástico, preparándose para cirugía"
                fill
                sizes="40vw"
                quality={72}
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>

          <Reveal as="ul" className="border-t border-linea lg:col-span-6 lg:col-start-7">
            {especialidades.map((esp, i) => {
              const href = hrefEspecialidad[esp]
              const contenido = (
                <>
                  <span className="flex-1 font-serif text-[1.7rem] leading-tight lg:text-[2.1rem]">
                    {esp}
                  </span>
                  {href && <span aria-hidden="true" className="font-serif text-2xl">→</span>}
                </>
              )
              return (
                <li key={esp} data-reveal className="border-b border-linea">
                  {href ? (
                    <Link href={href} className="flex items-baseline gap-5 py-5 transition-opacity hover:opacity-70">
                      {contenido}
                    </Link>
                  ) : (
                    <div className="flex items-baseline gap-5 py-5">{contenido}</div>
                  )}
                </li>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tinta py-20 text-crema lg:py-28">
        <div className="contenedor lg:flex lg:items-end lg:justify-between lg:gap-10">
          <h2 className="display max-w-[16ch] text-[clamp(2.4rem,5.4vw,4.5rem)]">
            Agenda tu consulta con un <em>especialista</em>
          </h2>
          <WhatsappLink
            href={waLink()}
            label="Sobre mi CTA"
            className="btn btn-claro mt-10 lg:mt-0"
          >
            Agendar por WhatsApp
          </WhatsappLink>
        </div>
      </section>
    </main>
  )
}
