import Link from "next/link"
import WhatsappLink from "./components/WhatsappLink"
import { procedimientos, waLink } from "./content/site"

export const metadata = {
  title: "Pagina no encontrada | Dr Cesar Rosales",
  description:
    "La pagina que buscas no existe. El Dr Cesar Rosales ofrece atencion especializada en cirugia plastica en Barinas y Caracas.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] items-center bg-crema pb-24 pt-32">
      <div className="contenedor">
        <p className="label">Error 404</p>
        <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,8vw,6.5rem)]">
          Esta página <em>no existe.</em>
        </h1>
        <p className="mt-8 max-w-md leading-relaxed text-tinta-suave">
          Puede que se haya movido o que el enlace esté incompleto. Te dejamos
          algunos caminos para continuar.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primario">
            Volver al inicio
          </Link>
          <WhatsappLink href={waLink()} label="404" className="btn btn-linea">
            Escribir por WhatsApp
          </WhatsappLink>
        </div>

        <ul className="mt-16 max-w-xl border-t border-linea">
          {procedimientos.map((p) => (
            <li key={p.id} className="border-b border-linea">
              <Link
                href={p.href}
                className="flex items-baseline justify-between py-4 font-serif text-2xl"
              >
                {p.nombre}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
