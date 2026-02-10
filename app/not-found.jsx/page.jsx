import Link from "next/link"

export const metadata = {
  title: "Pagina no encontrada | Dr Cesar Rosales",
  description:
    "La pagina que buscas no existe. El Dr Cesar Rosales ofrece atencion especializada en cirugia plastica en Barinas y Caracas.",
}

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-black flex items-center justify-center px-6 text-white">
      <div className="max-w-xl text-center">
        {/* Codigo */}
        <span className="block text-sm text-white/40 mb-4">
          Error 404
        </span>

        {/* Titulo */}
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Pagina no encontrada
        </h1>

        {/* Texto */}
        <p className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed">
          La pagina que intentas visitar no existe o ha sido movida.  
          Puedes regresar al inicio o continuar explorando la informacion
          sobre los procedimientos y consultas disponibles.
        </p>

        {/* Acciones */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="
              rounded-xl
              bg-white
              px-6 py-3
              text-sm font-medium
              text-black
              transition
              hover:bg-slate-200
            "
          >
            Volver al inicio
          </Link>

          <Link
            href="/cirujano-plastico-barinas"
            className="
              rounded-xl
              border border-white/30
              px-6 py-3
              text-sm
              text-white
              transition
              hover:bg-white/10
            "
          >
            Cirujano plastico en Barinas
          </Link>
        </div>

        {/* Nota */}
        <p className="mt-12 text-xs text-white/40">
          Si necesitas informacion sobre consultas o procedimientos, puedes
          escribir directamente por WhatsApp.
        </p>
      </div>
    </main>
  )
}
