export default function Uczestnicy() {
  const grupy = [
    { nazwa: "Szkrabki", wiek: "7 lat", kolor: "var(--kolor-niebieski)" },
    { nazwa: "Szkaraby", wiek: "8 lat", kolor: "var(--kolor-zielony)" },
    { nazwa: "Kajtki", wiek: "9 lat", kolor: "var(--kolor-czerwony)" },
    { nazwa: "Żaczki", wiek: "10 lat", kolor: "var(--kolor-zolty)" },
    { nazwa: "Plastusie", wiek: "11 lat", kolor: "var(--kolor-niebieski)" },
    { nazwa: "Kubusie", wiek: "11–12 lat", kolor: "var(--kolor-zielony)" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-zolty)" }}>Uczestnicy</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Grupy wiekowe</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {grupy.map((g, i) => (
            <div key={i} className="p-6 rounded-xl text-center text-white font-bold shadow-md" style={{ backgroundColor: g.kolor }}>
              <p className="text-2xl mb-1">{g.nazwa}</p>
              <p className="text-sm font-normal opacity-90">{g.wiek}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Zasady uczestnictwa</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">🔹 W Igrzyskach Szkolofijskich mogą startować zawodnicy w wieku od <strong>7 do 15 lat</strong>.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">🔹 Każdy zawodnik musi być obywatelem kraju Narodowego Komitetu Szkolofijskiego, który go zgłasza.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">🔹 Nikt nie może być pominięty z powodów rasowych, religijnych, politycznych ani żadnej innej formy dyskryminacji.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">🔹 Narodowe Komitety Szkolofijskie wysyłają tylko tych zawodników, którzy są odpowiednio przygotowani do startu.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
