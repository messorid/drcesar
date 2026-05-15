import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import StickyWhatsappCTA from "./mounjaro/components/StickyWhatsappCTA"
import Footer from "./components/Footer"
import MedicalSchema from "./components/MedicalSchema"
import Navbar from "./components/Navbar"
import FacebookPixel from "./components/FacebookPixel"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1558086572418002');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased bg-ink text-cream`}
      >
        {/* Meta Pixel */}
        <FacebookPixel />

        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1558086572418002&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

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
