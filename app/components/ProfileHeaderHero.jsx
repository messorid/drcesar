import Link from "next/link"

export default function ProfileHeaderHero() {
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

        {/* Servicio */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-100 mt-6">
          Servicio médico especializado en tratamiento con Mounjaro <br />
          Control de peso y salud metabólica bajo supervisión profesional
        </p>

        {/* CTA informativo */}
        <p className="text-sm sm:text-base text-slate-300 mt-4">
          Atención médica personalizada con enfoque clínico y seguro.
        </p>

        {/* Botones */}
        <div className="w-full max-w-sm flex flex-col gap-4 mt-8">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/drcesarrosales"
            target="_blank"
            className="rounded-2xl bg-white/90 py-4 text-slate-900 font-semibold hover:bg-white transition"
          >
            Sígueme en Instagram
          </Link>

          {/* Mounjaro */}
          <Link
            href="/mounjaro"
            className="
              rounded-2xl
              py-4
              font-semibold
              text-white
              bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600
              hover:from-indigo-500 hover:via-blue-500 hover:to-sky-500
              transition
            "
          >
           Inyecciones para bajar de Peso - Mounjaro
          </Link>
        </div>

        {/* Ubicaciones */}
        <Link
          href="/ubicaciones"
          className="
            mt-6
            inline-flex
            items-center
            justify-center
            rounded-full
            px-6
            py-2.5
            text-sm
            font-medium
            text-white
            bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600
            hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500
            transition-all
            duration-300
            shadow-md
          "
        >
          Ver Ubicaciones
        </Link>
      </div>
    </section>
  )
}
