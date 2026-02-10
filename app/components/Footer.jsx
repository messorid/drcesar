import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 px-6 pt-20 pb-32">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-4 text-sm text-white/70">
        {/* Marca */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Dr Cesar Rosales
          </h3>
          <p className="mt-4 leading-relaxed">
            Cirujano plástico con enfoque en cirugía estética y reconstructiva.
            Atención médica profesional basada en seguridad, ética y
            evaluación personalizada.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-white font-medium mb-4">
            Procedimientos
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/servicios/retiro-de-biopolimeros" className="hover:text-white transition">
                Retiro de Biopolímeros
              </Link>
            </li>
            <li>
              <Link href="/servicios/bbl" className="hover:text-white transition">
                BBL
              </Link>
            </li>
            <li>
              <Link href="/servicios/lipo-hd" className="hover:text-white transition">
                Lipo HD
              </Link>
            </li>
            <li>
              <Link href="/servicios/cirugia-mamaria" className="hover:text-white transition">
                Cirugía Mamaria
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
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-medium mb-4">
            Información legal
          </h4>
          <ul className="space-y-3">
            <li>Cirujano Plástico</li>
            <li>Médico colegiado</li>
            <li>Atención previa cita</li>
            <li>
              <Link href="/terminos-y-condiciones" className="hover:text-white transition">
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad" className="hover:text-white transition">
                Política de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-20 border-t border-white/10 pt-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Dr Cesar Rosales. Todos los derechos reservados.
        <br />
        La información presentada en este sitio web es de carácter informativo y
        no sustituye una consulta médica presencial.
      </div>
    </footer>
  )
}
