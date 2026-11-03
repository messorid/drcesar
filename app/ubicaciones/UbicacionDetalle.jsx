import Link from "next/link"
import WhatsappLink from "../components/WhatsappLink"
import SectionHeader from "../components/SectionHeader"
import Reveal from "../components/motion/Reveal"
import { procedimientos, ubicaciones, waLink } from "../content/site"

/**
 * Plantilla editorial compartida por las páginas de cada ciudad.
 * `procedimientosLista` sigue el orden de `procedimientos` en site.js,
 * así cada ítem enlaza a su página.
 */
export default function UbicacionDetalle({
  ciudadId,
  titulo,
  intro = [],
  procedimientosTitulo,
  procedimientosLista = [],
  secciones = [],
  nota,
  children,
}) {
  const u = ubicaciones.find((x) => x.id === ciudadId)
  const otras = ubicaciones.filter((x) => x.id !== ciudadId)

  return (
    <main className="w-full bg-crema">
      {/* Encabezado */}
      <section className="pb-16 pt-28 lg:pb-24 lg:pt-36">
        <Reveal className="contenedor">
          <p data-reveal className="label">
            <Link href="/ubicaciones" className="link-editorial">
              Ubicaciones
            </Link>{" "}
            · {u.ciudad}
          </p>
          <h1 data-reveal className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,8vw,6.5rem)]">
            {titulo}
          </h1>
          <div data-reveal className="prose-editorial mt-8 max-w-xl text-[1.05rem] leading-relaxed text-tinta-suave">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsappLink
              href={waLink(`Hola Dr. César Rosales, deseo agendar una consulta en ${u.ciudad}`)}
              label={`Ubicacion ${u.ciudad}`}
              className="btn btn-primario"
            >
              Agendar en {u.ciudad}
            </WhatsappLink>
            <Link href="/contacto" className="btn btn-linea">
              Ir a contacto
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Mapa o aviso de fechas */}
      <section className="contenedor">
        {u.mapa ? (
          <iframe
            src={u.mapa}
            title={`Mapa de la consulta en ${u.ciudad}`}
            className="h-[320px] w-full border-0 grayscale-[0.6] lg:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex min-h-[220px] items-center justify-center bg-arena p-8 text-center lg:min-h-[320px]">
            <p className="max-w-sm font-serif text-2xl italic leading-snug lg:text-3xl">
              Escríbenos para conocer las próximas fechas en {u.ciudad}.
            </p>
          </div>
        )}
      </section>

      {/* Procedimientos */}
      <section className="py-20 lg:py-32">
        <div className="contenedor grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader numero="01" etiqueta="Procedimientos" />
            <h2 className="display mt-10 max-w-[14ch] text-[clamp(2.2rem,4.6vw,3.75rem)]">
              {procedimientosTitulo}
            </h2>
          </div>
          <Reveal as="ul" className="border-t border-linea lg:col-span-6 lg:col-start-7">
            {procedimientosLista.map((texto, i) => (
              <li key={texto} data-reveal className="border-b border-linea">
                <Link
                  href={procedimientos[i]?.href || "/#procedimientos"}
                  className="flex items-baseline gap-5 py-5 transition-opacity hover:opacity-70"
                >
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-serif text-[1.7rem] leading-tight lg:text-[2.1rem]">
                    {texto}
                  </span>
                  <span aria-hidden="true" className="font-serif text-2xl">→</span>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Secciones de texto */}
      {secciones.length > 0 && (
        <section className="bg-arena py-20 lg:py-32">
          <div className="contenedor">
            <SectionHeader numero="02" etiqueta="La consulta" />
            <Reveal className="mt-12 grid border-t border-tinta/20 lg:grid-cols-2">
              {secciones.map((s, i) => (
                <article
                  key={s.titulo}
                  data-reveal
                  className={`border-b border-tinta/20 py-10 lg:border-b-0 ${
                    i % 2 === 0 ? "lg:border-r lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <h2 className="display text-[clamp(1.9rem,3.4vw,2.75rem)]">{s.titulo}</h2>
                  <p className="mt-5 max-w-md leading-relaxed text-tinta-suave">{s.texto}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {children}

      {/* Cierre */}
      <section className="py-20 lg:py-28">
        <div className="contenedor grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            {nota && <p className="max-w-md leading-relaxed text-tinta-suave">{nota}</p>}
            <WhatsappLink
              href={waLink(`Hola Dr. César Rosales, deseo agendar una consulta en ${u.ciudad}`)}
              label={`Ubicacion ${u.ciudad} cierre`}
              className="btn btn-primario mt-8"
            >
              Consultar disponibilidad
            </WhatsappLink>
          </div>
          <nav aria-label="Otras ubicaciones" className="lg:col-span-5 lg:col-start-8">
            <p className="label">Otras ubicaciones</p>
            <ul className="mt-4 border-t border-linea">
              {otras.map((o) => (
                <li key={o.id} className="border-b border-linea">
                  <Link
                    href={o.href}
                    className="flex items-baseline justify-between py-4 font-serif text-2xl transition-opacity hover:opacity-70"
                  >
                    {o.ciudad}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </main>
  )
}
