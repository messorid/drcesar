import Image from "next/image"

export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center gap-4 fade-in">
      {/* Foto de perfil */}
      <Image
        src="/images/dr-cesar-rosales-profile.jpg"
        alt="Dr Cesar Rosales cirujano plastico"
        width={112}
        height={112}
        priority
        className="rounded-full object-cover shadow-lg ring-1"
        style={{ borderColor: "var(--border)" }}
      />

      {/* Nombre */}
      <h1
        className="text-2xl font-semibold tracking-tight"
        style={{ color: "var(--text-primary)" }}
      >
        Dr Cesar Rosales
      </h1>

      {/* Especialidad */}
      <p
        className="text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        Cirujano Plastico
      </p>

      {/* Enfoque medico */}
      <p
        className="text-sm leading-relaxed max-w-xs"
        style={{ color: "var(--text-secondary)" }}
      >
        Retiro de biopolimeros y reconstruccion <br />
        Contorno corporal, Lipo HD y cirugia mamaria
      </p>

      {/* CTA suave */}
      <p
        className="text-xs max-w-xs"
        style={{ color: "var(--text-muted)" }}
      >
        Agenda tu consulta o aclara tus dudas con el especialista.
      </p>

      {/* Ubicaciones */}
      <p
        className="text-xs"
        style={{ color: "var(--text-muted)" }}
      >
        Barinas · Caracas · San Cristobal
      </p>
    </header>
  )
}
