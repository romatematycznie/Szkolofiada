export default function Kontakt() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-niebieski)" }}>Kontakt</h1>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-gray-50 border-l-4" style={{ borderColor: "var(--kolor-niebieski)" }}>
            <h2 className="font-bold text-lg mb-3">📍 Siedziba</h2>
            <p className="text-gray-700">Stary Toruń</p>
            <p className="text-gray-700">ul. Prosta 8</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-50 border-l-4" style={{ borderColor: "var(--kolor-zielony)" }}>
            <h2 className="font-bold text-lg mb-3">👤 Prezydent Szkolofiady</h2>
            <p className="text-gray-700">Dominik Mołdoch</p>
          </div>
        </div>
      </section>
    </div>
  );
}
