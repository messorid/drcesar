// Cabecera editorial de sección: etiqueta en mono y filete.
// `centrado`: en móvil la etiqueta queda al centro entre dos filetes.
export default function SectionHeader({ etiqueta, tono = "oscuro", centrado = false }) {
  const color = tono === "claro" ? "text-crema/70" : ""
  const linea = tono === "claro" ? "bg-crema/20" : "bg-linea"
  return (
    <div className={`label flex items-center gap-4 ${color}`}>
      {centrado && (
        <span aria-hidden="true" className={`h-px flex-1 lg:hidden ${linea}`} />
      )}
      <span>{etiqueta}</span>
      <span aria-hidden="true" className={`h-px flex-1 ${linea}`} />
    </div>
  )
}
