import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 px-6 pt-16 pb-28">

      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-4 text-sm text-white/70">

        {/* Marca */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Dr Cesar Rosales
          </h3>

          <p className="leading-relaxed">
            Cirujano plastico especializado en cirugia estetica y reconstructiva.
            Atencion medica profesional basada en seguridad, evaluacion
            personalizada y resultados naturales.
          </p>

          <p className="text-xs text-white/40">
            Consultas disponibles en Barinas y Caracas.
          </p>
        </div>


        {/* Procedimientos */}
        <div>
          <h4 className="text-white font-medium mb-4">
            Procedimientos
          </h4>

          <ul className="space-y-3">
            <li>
              <Link
                href="/servicios/retiro-de-biopolimeros"
                className="hover:text-white transition"
              >
                Retiro de Biopolimeros
              </Link>
            </li>

            <li>
              <Link
                href="/servicios/bbl"
                className="hover:text-white transition"
              >
                BBL
              </Link>
            </li>

            <li>
              <Link
                href="/servicios/lipo-hd"
                className="hover:text-white transition"
              >
                Lipo HD
              </Link>
            </li>

            <li>
              <Link
                href="/servicios/cirugia-mamaria"
                className="hover:text-white transition"
              >
                Cirugia Mamaria
              </Link>
            </li>
          </ul>
        </div>


        {/* Ubicaciones */}
        <div>
          <h4 className="text-white font-medium mb-4">
            Ubicaciones
          </h4>

          <ul className="space-y-3">
            <li>Barinas</li>
            <li>Caracas</li>
            <li>San Cristobal</li>
          </ul>
        </div>


        {/* Legal */}
        <div>
          <h4 className="text-white font-medium mb-4">
            Informacion legal
          </h4>

          <ul className="space-y-3">
            <li>Cirujano plastico</li>
            <li>Medico colegiado</li>
            <li>Atencion previa cita</li>

            <li>
              <Link
                href="/terminos-y-condiciones"
                className="hover:text-white transition"
              >
                Terminos y condiciones
              </Link>
            </li>

            <li>
              <Link
                href="/politica-de-privacidad"
                className="hover:text-white transition"
              >
                Politica de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>


      {/* Divider */}
      <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/50 space-y-4">

        <p>
          © {new Date().getFullYear()} Dr Cesar Rosales. Todos los derechos reservados.
        </p>

        <p className="max-w-3xl mx-auto leading-relaxed">
          La informacion presentada en este sitio web es de caracter informativo
          y no sustituye una consulta medica presencial.
        </p>

        {/* Credit */}
        <p className="text-white/40">
          Sitio web creado por{" "}
          <a
            href="https://www.boostori.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition"
          >
            Boostori
          </a>
        </p>

      </div>
    </footer>
  )
}
