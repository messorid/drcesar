import Image from "next/image"
import Link from "next/link"

export default function ProfileHeaderHero() {
  const whatsappMessage =
    "Hola Dr Cesar Rosales, deseo informacion para agendar una consulta."

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo optimizada */}
      <Image
        src="/images/background.JPG"
        alt="Dr Cesar Rosales cirujano plastico"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 20%" }}
      />

      {/* Overlay oscuro elegante */}
      <div className="absolute inset-0 bg-black/75" />

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
          gap-6
          sm:gap-7
          md:gap-8
        "
      >
        {/* Nombre */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white">
          Dr Cesar Rosales
        </h1>

        {/* Especialidad */}
        <p className="text-sm sm:text-base md:text-xl text-slate-200">
          Cirujano Plastico
        </p>

        {/* Texto principal */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-100">
          Retiro de biopolimeros y reconstruccion <br />
          Contorno corporal, Lipo HD y cirugia mamaria
        </p>

        {/* CTA */}
        <p className="text-sm sm:text-base text-slate-300">
          Agenda tu consulta o aclara tus dudas con el especialista.
        </p>

        {/* Botones */}
        <div className="w-full max-w-sm flex flex-col gap-4 pt-4">
          <Link
            href={`https://wa.me/584245846191?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            className="rounded-2xl bg-green-600 py-4 text-white font-semibold hover:bg-green-700 transition"
          >
            WhatsApp para consulta
          </Link>

          <Link
            href="tel:+584245846191"
            className="rounded-2xl bg-white/90 py-4 text-slate-900 font-semibold hover:bg-white transition"
          >
            Llamada directa
          </Link>
        </div>

        {/* Ubicaciones */}
        <p className="text-xs sm:text-sm text-slate-300 pt-2">
          Barinas · Caracas · San Cristobal
        </p>
      </div>
    </section>
  )
}
