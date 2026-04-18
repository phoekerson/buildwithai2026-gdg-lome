import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudentEats Lomé",
  description: "Planning de repas pour les étudiants de Lomé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-8">
          <header className="mb-8 text-center md:text-left md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-orange-600">StudentEats Lomé 🍛</h1>
              <p className="text-gray-500 text-sm">Mange bien, même avec ton budget d'étudiant.</p>
            </div>
          </header>
          {children}
          <footer className="mt-12 text-center text-xs text-gray-400 pb-24 md:pb-8">
            <p>© 2026 StudentEats Lomé - Propulsé par Gemini</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
