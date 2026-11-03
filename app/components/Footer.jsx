import Link from "next/link"
import WhatsappLink from "./WhatsappLink"
import FooterNombre from "./FooterNombre"
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  procedimientos,
  ubicaciones,
  waLink,
} from "@/app/content/site"

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-tinta pb-24 pt-20 text-crema lg:pb-10 lg:pt-28">
      <div className="contenedor">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Contacto */}
          <div className="lg:col-span-5">
            <p className="label !text-crema/60">Contacto</p>
            <p className="mt-6 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
              Agenda tu evaluación y conversemos sobre{" "}
              <em>lo que buscas.</em>
            </p>
            <p className="mt-6 font-mono text-sm tracking-wide text-crema/75">
              WhatsApp +58 424 584 6191
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsappLink
                href={waLink()}
                label="Footer"
                className="btn btn-claro whitespace-nowrap"
              >
                Escribir por WhatsApp
              </WhatsappLink>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn whitespace-nowrap border border-crema/30 text-crema hover:border-crema"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>

          {/* Procedimientos */}
          <nav aria-label="Procedimientos" className="lg:col-span-3 lg:col-start-7">
            <p className="label !text-crema/60">Procedimientos</p>
            <ul className="mt-6 space-y-3 text-sm text-crema/85">
              {procedimientos.map((p) => (
                <li key={p.id}>
                  <Link href={p.href} className="link-editorial">
                    {p.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ubicaciones y legal */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-3 lg:grid-cols-1">
            <nav aria-label="Ubicaciones">
              <p className="label !text-crema/60">Ubicaciones</p>
              <ul className="mt-6 space-y-3 text-sm text-crema/85">
                {ubicaciones.map((u) => (
                  <li key={u.id}>
                    <Link href={u.href} className="link-editorial">
                      {u.ciudad}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Información legal">
              <p className="label !text-crema/60">Legal</p>
              <ul className="mt-6 space-y-3 text-sm text-crema/85">
                <li>
                  <Link href="/terminos-y-condiciones" className="link-editorial">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidad" className="link-editorial">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="link-editorial">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16 border-t border-crema/15 pt-8 text-xs leading-relaxed text-crema/60 lg:flex lg:justify-between lg:gap-10">
          <p className="max-w-2xl">
            Médico cirujano plástico colegiado · Atención previa cita. La
            información de este sitio es de carácter informativo y no sustituye
            una consulta médica presencial. Los resultados varían en cada
            paciente.
          </p>
          <p className="mt-4 shrink-0 lg:mt-0">
            © {new Date().getFullYear()} Dr. César Rosales · Sitio por{" "}
            <a
              href="https://www.boostori.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crema/85 underline underline-offset-4 hover:text-crema"
            >
              Boostori
            </a>
          </p>
        </div>
      </div>

      <FooterNombre />
    </footer>
  )
}
