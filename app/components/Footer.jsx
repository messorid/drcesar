import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative w-full bg-ink-soft border-t border-[var(--border-brand)] px-6 pt-20 pb-32">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-4 text-sm text-stone">
        {/* Marca */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-cr.png"
              alt="Logotipo Dr. César Rosales"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <h3 className="font-display text-xl text-cream">
              Dr. César Rosales
            </h3>
          </div>

          <p className="leading-relaxed">
            Cirujano plástico especializado en cirugía estética y
            reconstructiva. Atención médica profesional basada en seguridad,
            evaluación personalizada y resultados naturales.
          </p>

          <p className="text-xs text-stone/70">
            Consultas disponibles en Barinas y Caracas.
          </p>
        </div>

        {/* Procedimientos */}
        <div>
          <h4 className="eyebrow mb-5">Procedimientos</h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/servicios/retiro-de-biopolimeros"
                className="transition-colors hover:text-brand-light"
              >
                Retiro de Biopolímeros
              </Link>
            </li>
            <li>
              <Link
                href="/servicios/bbl"
                className="transition-colors hover:text-brand-light"
              >
                BBL
              </Link>
            </li>
            <li>
              <Link
                href="/servicios/lipo-hd"
                className="transition-colors hover:text-brand-light"
              >
                Lipo HD
              </Link>
            </li>
            <li>
              <Link
                href="/servicios/cirugia-mamaria"
                className="transition-colors hover:text-brand-light"
              >
                Cirugía Mamaria
              </Link>
            </li>
          </ul>
        </div>

        {/* Ubicaciones */}
        <div>
          <h4 className="eyebrow mb-5">Ubicaciones</h4>
          <ul className="space-y-3">
            <li>Barinas</li>
            <li>Caracas</li>
            <li>San Cristóbal</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="eyebrow mb-5">Información legal</h4>
          <ul className="space-y-3">
            <li>Cirujano plástico</li>
            <li>Médico colegiado</li>
            <li>Atención previa cita</li>
            <li>
              <Link
                href="/terminos-y-condiciones"
                className="transition-colors hover:text-brand-light"
              >
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link
                href="/politica-de-privacidad"
                className="transition-colors hover:text-brand-light"
              >
                Política de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="brand-divider mx-auto mt-16 max-w-7xl" />

      <div className="mx-auto mt-8 max-w-3xl text-center text-xs text-stone space-y-4">
        <p>
          © {new Date().getFullYear()} Dr. César Rosales. Todos los derechos
          reservados.
        </p>
        <p className="leading-relaxed">
          La información presentada en este sitio web es de carácter informativo
          y no sustituye una consulta médica presencial.
        </p>
        <p className="text-stone/60">
          Sitio web creado por{" "}
          <a
            href="https://www.boostori.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-light transition-colors hover:text-cream"
          >
            Boostori
          </a>
        </p>
      </div>
    </footer>
  )
}
