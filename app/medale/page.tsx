export default function Medale() {
  const biegi = [
    { nazwa: "Bieg na 100m", zawodnicy: 2 },
    { nazwa: "Bieg na 200m", zawodnicy: 2 },
    { nazwa: "Bieg na 400m", zawodnicy: 2 },
    { nazwa: "Bieg na 800m", zawodnicy: 2 },
    { nazwa: "Sztafeta 4×100m", zawodnicy: 4 },
    { nazwa: "Sztafeta 4×400m", zawodnicy: 4 },
    { nazwa: "Bieg na 110m przez płotki", zawodnicy: 2 },
    { nazwa: "Bieg na 1500m", zawodnicy: 1 },
    { nazwa: "Bieg na 3000m", zawodnicy: 1 },
    { nazwa: "Chód na 5000m", zawodnicy: 1 },
    { nazwa: "Chód na 10000m", zawodnicy: 1 },
    { nazwa: "Maraton", zawodnicy: 1 },
    { nazwa: "Skok w dal", zawodnicy: 1 },
    { nazwa: "Skok wzwyż", zawodnicy: 1 },
    { nazwa: "Skok o tyczce", zawodnicy: 1 },
    { nazwa: "Trójskok", zawodnicy: 1 },
    { nazwa: "Siedmiobój", zawodnicy: 1 },
    { nazwa: "Dziesięciobój", zawodnicy: 1 },
    { nazwa: "Rzut oszczepem", zawodnicy: 1 },
    { nazwa: "Rzut dyskiem", zawodnicy: 1 },
    { nazwa: "Pchnięcie kulą", zawodnicy: 1 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-zolty)" }}>Medale i nagrody</h1>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-xl text-center shadow-md" style={{ backgroundColor: "#FFD700" }}>
            <p className="text-4xl mb-2">🥇</p>
            <p className="font-bold text-xl">I miejsce</p>
            <p className="text-gray-700 font-bold text-lg mt-1">2 000 zł</p>
            <p className="text-gray-600 text-sm">Złoty medal</p>
          </div>
          <div className="p-6 rounded-xl text-center shadow-md" style={{ backgroundColor: "#C0C0C0" }}>
            <p className="text-4xl mb-2">🥈</p>
            <p className="font-bold text-xl">II miejsce</p>
            <p className="text-gray-700 font-bold text-lg mt-1">Srebrny medal</p>
          </div>
          <div className="p-6 rounded-xl text-center shadow-md" style={{ backgroundColor: "#CD7F32", color: "white" }}>
            <p className="text-4xl mb-2">🥉</p>
            <p className="font-bold text-xl">III miejsce</p>
            <p className="font-bold text-lg mt-1">Brązowy medal</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Dyscypliny lekkoatletyczne</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--kolor-niebieski)", color: "white" }}>
                <th className="p-3 text-left rounded-tl-lg">Konkurencja</th>
                <th className="p-3 text-center rounded-tr-lg">Zawodnicy (na kraj)</th>
              </tr>
            </thead>
            <tbody>
              {biegi.map((b, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3">{b.nazwa}</td>
                  <td className="p-3 text-center">{b.zawodnicy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
