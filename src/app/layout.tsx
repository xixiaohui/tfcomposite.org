import "./globals.css";

import type { Metadata } from "next";

import { Toaster } from "sonner";
import Script from "next/script";

import NavMenu from "@/components/MainMenubar"



export const metadata: Metadata = {
  title: "FRP Grating – Corrosion Resistant Industrial Flooring",
  description: "Shop high-strength FRP molded grating for chemical plants, offshore rigs, and wastewater treatment walkways. Fire-retardant and anti-slip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MGVQCGZR');
            `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16665079521"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16665079521');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGVQCGZR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
 

        <div className="flex items-center justify-center">
          <div className="w-full bg-white/80 backdrop-blur-md shadow-lg">
            
            <div className="w-full md:mx-auto md:w-1/2">
              <NavMenu />
            </div>
            
       
            
            {children}
            <Toaster />
          </div>
        </div>
        
      </body>
    </html>
  );
}
