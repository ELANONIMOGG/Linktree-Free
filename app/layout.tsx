import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Hub de Redes Sociales",
  description: "Conecta conmigo en todas mis redes sociales - AWS Student Builder Groups Style",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='%23FF9900'>★</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
