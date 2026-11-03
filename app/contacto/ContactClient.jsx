import Link from "next/link"
import WhatsappLink from "../components/WhatsappLink"
import { WhatsappIcon } from "../components/StickyWhatsapp"
import Reveal from "../components/motion/Reveal"
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, ubicaciones, waLink } from "../content/site"

export default function ContactClient() {
  return (
    <main className="min-h-screen w-full bg-crema pb-24 pt-28 lg:pb-32 lg:pt-36">
      <div className="contenedor">
        <Reveal>
          <p data-reveal className="label">
            Estamos para atenderte
          </p>
          <h1 data-reveal className="display mt-6 text-[clamp(3.2rem,10vw,8rem)]">
            <em>Contacto</em>
          </h1>
          <p data-reveal className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-tinta-suave">
            Agenda tu consulta médica o aclara tus dudas con nuestro equipo. La
            atención se realiza previa coordinación por WhatsApp.
          </p>
        </Reveal>

        <Reveal className="mt-16 grid border-t border-linea lg:mt-24 lg:grid-cols-2">
          <article data-reveal className="border-b border-linea py-10 lg:border-b-0 lg:border-r lg:pr-12">
            <span className="display block text-6xl text-marca-hondo">01</span>
            <h2 className="display mt-5 text-[2.2rem]">Contacto directo</h2>
            <p className="mt-4 max-w-md leading-relaxed text-tinta-suave">
              Para agendar tu consulta o consultar disponibilidad, escríbenos
              directamente por WhatsApp. Un especialista atenderá tu solicitud
              de forma personalizada.
            </p>
            <p className="mt-6 text-sm">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </p>
          </article>

          <article data-reveal className="py-10 lg:pl-12">
            <span className="display block text-6xl text-marca-hondo">02</span>
            <h2 className="display mt-5 text-[2.2rem]">Ubicaciones de atención</h2>
            <ul className="mt-6 border-t border-linea">
              {ubicaciones.map((u) => (
                <li key={u.id} className="border-b border-linea">
                  <Link
                    href={u.href}
                    className="flex items-baseline justify-between py-4 font-serif text-2xl transition-opacity hover:opacity-70"
                  >
                    {u.ciudad}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-tinta-suave">
              La disponibilidad varía según la ciudad y agenda médica.
            </p>
          </article>
        </Reveal>

        <WhatsappLink
          href={waLink()}
          label="Contacto"
          className="group mt-12 flex w-full items-center justify-between gap-6 bg-tinta px-6 py-7 text-crema transition-colors hover:bg-black sm:px-10 lg:py-10"
        >
          <span className="display text-[clamp(1.9rem,4.6vw,3.75rem)]">
            Escribir por <em>WhatsApp</em>
          </span>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crema text-tinta transition-transform duration-500 group-hover:rotate-[-12deg] lg:h-16 lg:w-16">
            <WhatsappIcon className="h-5 w-5 lg:h-6 lg:w-6" />
          </span>
        </WhatsappLink>

        <p className="label mt-10">Atención segura · Profesional · Personalizada</p>
      </div>
    </main>
  )
}
