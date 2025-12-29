import Link from "next/link"

export default function ProfileHeaderHero() {
  const whatsappMessage =
    "Hola Dr. César Rosales, deseo información para agendar una consulta."

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Contenido */}
      <div
        className="
          relative z-10
          min-h-screen
          w-full
          px-6
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Nombre */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white mt-4">
          Dr. César Rosales
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-white mt-2">
          Cirujano Plástico
        </p>

        {/* Servicios */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-100 mt-6">
          Retiro de Biopolímeros y Reconstrucción <br />
          Contorno Corporal, Lipo HD y Cirugía Mamaria
        </p>

        {/* CTA */}
        <p className="text-sm sm:text-base text-slate-300 mt-4">
          Agenda tu consulta o aclara tus dudas con un especialista.
        </p>

        {/* Botones */}
        <div className="w-full max-w-sm flex flex-col gap-4 mt-8">
          <Link
            href={`https://wa.me/584245846191?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            className="rounded-2xl bg-green-600 py-4 text-white font-semibold hover:bg-green-700 transition"
          >
            WhatsApp para Consulta
          </Link>

          <Link
            href="https://www.instagram.com/drcesarrosales"
            target="_blank"
            className="rounded-2xl bg-white/90 py-4 text-slate-900 font-semibold hover:bg-white transition"
          >
            Sígueme en Instagram
          </Link>
        </div>

        {/* Ubicaciones */}
        <Link
          href="/ubicaciones"
          className="text-sm text-slate-300 underline underline-offset-4 hover:text-white transition mt-6"
        >
          Ver Ubicaciones
        </Link>
      </div>
    </section>
  )
}
