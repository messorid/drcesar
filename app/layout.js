import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Dr Cesar Rosales | Cirujano Plastico",
  description:
    "Cirujano plastico especializado en retiro de biopolimeros, reconstruccion y contorno corporal. Agenda tu consulta.",

  openGraph: {
    title: "Dr Cesar Rosales | Cirujano Plastico",
    description:
      "Retiro de biopolimeros, reconstruccion y cirugia plastica con enfoque medico y seguro.",
    url: "https://drcesarrosales.com",
    siteName: "Dr Cesar Rosales",
    images: [
      {
        url: "/og-image.JPG",
        width: 1200,
        height: 630,
        alt: "Dr Cesar Rosales Cirujano Plastico",
      },
    ],
    locale: "es_VE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr Cesar Rosales | Cirujano Plastico",
    description:
      "Cirugia plastica con enfoque medico, estetico y seguro.",
    images: ["/og-image.JPG"],
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}      </body>
    </html>
  )
}
