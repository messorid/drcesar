import Link from "next/link"

export default function Header() {
  const whatsappMessage =
    "Hola Dr Cesar Rosales, deseo informacion para agendar una consulta"

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/header-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Overlay + degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/95" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-slate-300 backdrop-blur">
            Cirujano Plastico Certificado
          </span>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Dr Cesar Rosales
          </h1>

          <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">
            Cirugia plastica con enfoque en seguridad, precision y resultados
            naturales. Atencion personalizada para cada paciente.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`https://wa.me/?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-slate-200"
            >
              Agendar Consulta
            </Link>

            <Link
              href="#procedimientos"
              className="rounded-xl border border-white/30 px-6 py-3 text-sm text-white transition hover:bg-white/10"
            >
              Ver Procedimientos
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
