/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Los links antiguos del footer (/servicios/...) apuntaban a rutas que no
  // existen. Se redirigen con 301 a las páginas reales de cada procedimiento.
  async redirects() {
    return [
      {
        source: "/servicios",
        destination: "/#procedimientos",
        statusCode: 301,
      },
      {
        source: "/servicios/retiro-de-biopolimeros",
        destination: "/retiro-biopolimeros-caracas",
        statusCode: 301,
      },
      {
        source: "/servicios/bbl",
        destination: "/bbl-barinas",
        statusCode: 301,
      },
      {
        source: "/servicios/lipo-hd",
        destination: "/lipo-hd-barinas",
        statusCode: 301,
      },
      {
        source: "/servicios/cirugia-mamaria",
        destination: "/cirugia-mamaria-barinas",
        statusCode: 301,
      },
      // Antigua carpeta mal nombrada que generaba una ruta indexable
      {
        source: "/not-found.jsx",
        destination: "/",
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
