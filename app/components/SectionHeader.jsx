// Cabecera editorial de sección: número, filete y etiqueta en mono.
export default function SectionHeader({ numero, etiqueta, tono = "oscuro" }) {
  const color = tono === "claro" ? "text-crema/70" : ""
  const linea = tono === "claro" ? "bg-crema/20" : "bg-linea"
  return (
    <div className={`label flex items-center gap-4 ${color}`}>
      {numero && <span>({numero})</span>}
      <span aria-hidden="true" className={`h-px flex-1 ${linea}`} />
      <span>{etiqueta}</span>
    </div>
  )
}
