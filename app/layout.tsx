import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Szkolofiada",
  description: "Olimpiada dla dzieci w wieku 7–12 lat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <nav style={{ backgroundColor: "var(--kolor-niebieski)" }} className="text-white px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-wide">⭕ Szkolofiada</a>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <a href="/" className="hover:underline">Strona główna</a>
            <a href="/o-szkolofiadzie" className="hover:underline">O Szkolofiadzie</a>
            <a href="/igrzyska" className="hover:underline">Igrzyska</a>
            <a href="/dyscypliny" className="hover:underline">Dyscypliny</a>
            <a href="/uczestnicy" className="hover:underline">Uczestnicy</a>
            <a href="/organizacja" className="hover:underline">Organizacja</a>
            <a href="/symbole" className="hover:underline">Symbole</a>
            <a href="/medale" className="hover:underline">Medale</a>
            <a href="/kontakt" className="hover:underline">Kontakt</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="text-center py-6 text-sm text-gray-500 border-t mt-12">
          © {new Date().getFullYear()} Szkolofiada — Olimpiada dla dzieci
        </footer>
      </body>
    </html>
  );
}
