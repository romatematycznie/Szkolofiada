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
        <nav style={{ backgroundColor: "#1a1a2e" }} className="px-6 py-4 flex flex-col items-center gap-3">
          <a href="/" className="text-xl font-bold tracking-wide text-white">⭕ Szkolofiada</a>
          <div className="flex flex-wrap justify-center gap-2">
            <a href="/" className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "var(--kolor-niebieski)" }}>Strona główna</a>
            <a href="/o-szkolofiadzie" className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "var(--kolor-zielony)" }}>O Szkolofiadzie</a>
            <a href="/igrzyska" className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "var(--kolor-czerwony)" }}>Igrzyska</a>
            <a href="/dyscypliny" className="px-4 py-2 rounded-full text-sm font-semibold text-black" style={{ backgroundColor: "var(--kolor-zolty)" }}>Dyscypliny</a>
            <a href="/uczestnicy" className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "var(--kolor-niebieski)" }}>Uczestnicy</a>
            <a href="/organizacja" className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "var(--kolor-zielony)" }}>Organizacja</a>
            <a href="/symbole" className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "var(--kolor-czerwony)" }}>Symbole</a>
            <a href="/medale" className="px-4 py-2 rounded-full text-sm font-semibold text-black" style={{ backgroundColor: "var(--kolor-zolty)" }}>Medale</a>
            <a href="/kontakt" className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "var(--kolor-niebieski)" }}>Kontakt</a>
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
