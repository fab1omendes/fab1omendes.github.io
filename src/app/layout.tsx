import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fabio Mendes - Full Stack Developer",
  description: "Desenvolvedor Full Stack com experiência em análise de dados e ETL. Especialista em Python, JavaScript, React, Node.js e tecnologias de dados.",
  keywords: ["Full Stack Developer", "Data Analysis", "ETL", "Python", "JavaScript", "React", "Node.js"],
  authors: [{ name: "Fabio Mendes" }],
  openGraph: {
    title: "Fabio Mendes - Full Stack Developer",
    description: "Desenvolvedor Full Stack com experiência em análise de dados e ETL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <body
        className={`${inter.variable} font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
