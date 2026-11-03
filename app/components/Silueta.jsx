// Ilustración de línea fina: silueta de perfil, abstracta y no explícita.
// `zonas` resalta áreas con un tono piel; `numeradas` muestra marcadores.

export const ZONAS = {
  pecho: { cx: 128, cy: 150, rx: 16, ry: 24 },
  espalda: { cx: 196, cy: 130, rx: 14, ry: 30 },
  flancos: { cx: 178, cy: 232, rx: 16, ry: 22 },
  abdomen: { cx: 140, cy: 268, rx: 16, ry: 30 },
  lumbar: { cx: 206, cy: 266, rx: 11, ry: 14 },
  gluteos: { cx: 222, cy: 334, rx: 20, ry: 34 },
  muslos: { cx: 166, cy: 450, rx: 22, ry: 40 },
}

const CONTORNO = [
  // Frente
  "M138 28 C136 44 135 54 133 64 C128 84 116 104 106 128 C98 146 102 166 116 180 C124 188 128 200 128 216 C128 236 124 252 122 270 C120 292 124 314 134 332 C130 352 126 380 127 420 C128 460 134 492 140 520",
  // Espalda
  "M186 22 C188 40 192 56 202 76 C214 100 218 130 212 164 C206 196 198 220 198 244 C198 268 216 284 232 300 C248 318 250 352 234 372 C224 384 214 392 210 410 C206 440 204 480 198 520",
  // Pliegue glúteo
  "M228 378 C216 390 202 394 188 394",
]

export default function Silueta({
  zonas = [],
  numeradas = [],
  activa,
  className,
  title,
}) {
  return (
    <svg
      viewBox="40 0 260 540"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g>
        {Object.entries(ZONAS).map(([id, z]) => {
          const visible = zonas.includes(id) || numeradas.includes(id)
          const resaltada = activa ? activa === id : zonas.includes(id)
          return (
            <ellipse
              key={id}
              data-zona={id}
              cx={z.cx}
              cy={z.cy}
              rx={z.rx}
              ry={z.ry}
              fill="var(--color-piel)"
              style={{
                opacity: visible ? (resaltada ? 0.85 : 0.35) : 0,
                transition: "opacity 0.6s var(--ease-editorial)",
              }}
            />
          )
        })}
      </g>

      <g
        fill="none"
        stroke="var(--color-tinta)"
        strokeWidth="1.1"
        strokeLinecap="round"
      >
        {CONTORNO.map((d) => (
          <path key={d} d={d} pathLength="1" className="trazo" />
        ))}
      </g>
      <circle cx="127" cy="268" r="1.3" fill="var(--color-tinta)" />

      {numeradas.map((id, i) => {
        const z = ZONAS[id]
        return (
          <g key={id} data-marcador={id}>
            <circle
              cx={z.cx}
              cy={z.cy}
              r="9"
              fill={activa === id ? "var(--color-tinta)" : "var(--color-crema)"}
              stroke="var(--color-tinta)"
              strokeWidth="0.8"
              style={{ transition: "fill 0.4s var(--ease-editorial)" }}
            />
            <text
              x={z.cx}
              y={z.cy + 3}
              textAnchor="middle"
              fontSize="8"
              fontFamily="var(--font-mono)"
              fill={activa === id ? "var(--color-crema)" : "var(--color-tinta)"}
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
