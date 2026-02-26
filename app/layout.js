import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import StickyWhatsappCTA from "./mounjaro/components/StickyWhatsappCTA"
import Footer from "./components/Footer"
import MedicalSchema from "./components/MedicalSchema"
import Navbar from "./components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Dr Cesar Rosales | Cirujano Plastico en  Caracas y Barinas",
  description:
    "Dr Cesar Rosales, cirujano plastico especializado en retiro de biopolimeros, reconstruccion, BBL, Lipo HD y cirugia mamaria. Atencion en Barinas y Caracas.",
  metadataBase: new URL("https://www.drcesarrosales.com"),
  alternates: {
    canonical: "https://www.drcesarrosales.com",
  },
  openGraph: {
    title: "Dr Cesar Rosales | Cirujano Plastico",
    description:
      "Cirugia plastica con enfoque medico, estetico y seguro. Atencion en Barinas y Caracas.",
    url: "https://www.drcesarrosales.com",
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FQ04BE4QDX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FQ04BE4QDX');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Schema medico global */}
        <MedicalSchema />
        <Navbar/>
        {/* Contenido */}
        {children}

        {/* Sticky WhatsApp */}
        <StickyWhatsappCTA />

        {/* Footer legal */}
        <Footer />
      </body>
    </html>
  )
}
