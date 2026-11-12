import Image from "next/image"
import Link from "next/link"
import SectionHeader from "../SectionHeader"
import WhatsappLink from "../WhatsappLink"
import { WhatsappIcon } from "../StickyWhatsapp"
import Reveal from "../motion/Reveal"

/* Piezas compartidas de las páginas de procedimiento y ciudad */

export function ProcedimientoHero({
  etiqueta,
  titulo,
  intro,
  whatsappHref,
  contentName,
  imagen,
  masInfo = true,
}) {
  const conVisual = Boolean(imagen)

  return (
    <section className="bg-crema pb-16 pt-28 lg:pb-24 lg:pt-40">
      <div
        className={`contenedor grid gap-12 ${
          conVisual ? "lg:grid-cols-12 lg:items-end lg:gap-10" : ""
        }`}
      >
        <div className={conVisual ? "lg:col-span-7" : "max-w-4xl"}>
          <p className="label">{etiqueta}</p>
          <h1 className="display mt-6 text-[clamp(2.8rem,8.4vw,6.5rem)]">
            {titulo}
          </h1>
          {intro && (
            <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-tinta-suave">
              {intro}
            </p>
          )}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsappLink
              href={whatsappHref}
              contentName={contentName}
              label="Hero procedimiento"
              className="btn btn-primario"
            >
              Agendar consulta
            </WhatsappLink>
            {masInfo && (
              <a href="#informacion" className="btn btn-linea">
                Más información
              </a>
            )}
          </div>
        </div>

        {imagen && (
          <div className="relative aspect-[4/5] overflow-hidden bg-tinta lg:col-span-5 lg:col-start-8">
            <Image
              src={imagen.src}
              alt={imagen.alt}
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 40vw, 100vw"
              quality={75}
              className={`object-cover ${imagen.className || ""}`}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export function Bloque({ etiqueta, titulo, children, id, fondo = "crema" }) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 lg:py-24 ${fondo === "arena" ? "bg-arena" : "bg-crema"}`}
    >
      <Reveal className="contenedor">
        <div data-reveal>
          <SectionHeader etiqueta={etiqueta} />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h2
            data-reveal
            className="display text-[clamp(2.1rem,4.6vw,3.75rem)] lg:col-span-5"
          >
            {titulo}
          </h2>
          <div
            data-reveal
            className="prose-editorial max-w-2xl text-[1.02rem] leading-relaxed text-tinta-suave lg:col-span-6 lg:col-start-7"
          >
            {children}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function ListaEditorial({ items }) {
  return (
    <ul className="my-6 border-t border-linea first:mt-0 last:mb-0">
      {items.map((item) => (
        <li
          key={item}
          className="border-b border-linea py-4 font-serif text-[1.45rem] leading-snug text-tinta"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Relacionados({ links }) {
  return (
    <section className="bg-crema py-16 lg:py-24">
      <div className="contenedor">
        <SectionHeader etiqueta="Información relacionada" />
        <h2 className="sr-only">Información relacionada</h2>
        <ul className="mt-10 grid border-t border-linea sm:grid-cols-2 sm:gap-x-10">
          {links.map((r) => (
            <li key={r.href} className="border-b border-linea">
              <Link
                href={r.href}
                className="group flex min-h-[56px] items-center justify-between gap-6 py-4"
              >
                <span className="font-serif text-[1.35rem] leading-snug">
                  {r.label}
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function CtaWhatsapp({ titulo, texto, whatsappHref, contentName }) {
  return (
    <section className="bg-tinta py-20 text-crema lg:py-32">
      <Reveal className="contenedor">
        <p data-reveal className="label !text-crema/80">
          Agenda tu evaluación
        </p>
        <h2
          data-reveal
          className="display mt-6 max-w-[16ch] text-[clamp(2.4rem,6vw,5rem)]"
        >
          {titulo}
        </h2>
        {texto && (
          <p data-reveal className="mt-6 max-w-xl leading-relaxed text-crema/75">
            {texto}
          </p>
        )}
        <div data-reveal className="mt-10">
          <WhatsappLink
            href={whatsappHref}
            contentName={contentName}
            label="CTA final procedimiento"
            className="btn btn-claro w-full sm:w-auto"
          >
            <WhatsappIcon className="h-[18px] w-[18px]" />
            Escribir por WhatsApp
          </WhatsappLink>
        </div>
        <p data-reveal className="mt-8 text-sm text-crema/75">
          Cada caso requiere una evaluación médica individual. Los resultados
          varían en cada paciente.
        </p>
      </Reveal>
    </section>
  )
}
