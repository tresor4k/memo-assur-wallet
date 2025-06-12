import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import StyledJsxRegistry from "@/lib/registry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mémo-Assur Wallet - La première app universelle pour vos mémos d'assurance",
  description: "Transformez vos mémos d'assurance véhicule en wallet pass instantanés. Compatible avec tous les assureurs français.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <StyledJsxRegistry>
          <AuthProvider>
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
          </AuthProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
