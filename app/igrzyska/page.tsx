export default function Igrzyska() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-zielony)" }}>Igrzyska</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Historia edycji</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Szkolofiada oznacza okres czterech kolejnych lat kalendarzowych. Szkolofiady są numerowane kolejno od pierwszych Igrzysk Szkolofiady, które miały odbyć się w Toruniu i Bydgoszczy w 2023 roku.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Kolejne igrzyska szkolne odbywają się cyklicznie co 2 lata, w rok po olimpiadzie — w latach nieparzystych, aż do piątej edycji, po tym co cztery lata.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Pierwsza edycja</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border-l-4" style={{ borderColor: "var(--kolor-zielony)", backgroundColor: "#f0fdf4" }}>
            <h3 className="font-bold mb-2">📅 Termin</h3>
            <p className="text-gray-700">1–14 sierpnia 2023 roku</p>
          </div>
          <div className="p-6 rounded-xl border-l-4" style={{ borderColor: "var(--kolor-niebieski)", backgroundColor: "#eff6ff" }}>
            <h3 className="font-bold mb-2">📍 Miejsca</h3>
            <p className="text-gray-700">Toruń i Bydgoszcz</p>
          </div>
          <div className="p-6 rounded-xl border-l-4" style={{ borderColor: "var(--kolor-czerwony)", backgroundColor: "#fff1f2" }}>
            <h3 className="font-bold mb-2">🏠 Siedziba - zmiana od 26 czerwca 205 roku na </h3>
            <p className="text-gray-700">60-175 Poznań ul.Szarotkowa 91A</p>
          </div>
          <div className="p-6 rounded-xl border-l-4" style={{ borderColor: "var(--kolor-zolty)", backgroundColor: "#fefce8" }}>
            <h3 className="font-bold mb-2">👤 Organizator</h3>
            <p className="text-gray-700">Dominik Mołdoch — Prezydent Szkolofiady</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Wioska Szkolofijska</h2>
        <p className="text-gray-700 leading-relaxed">
          Wioska Szkolofijska mieści się w dzielnicy Wrzosy przy ul. Ugory w Toruniu. Gromadzi wszystkich zawodników, działaczy i pozostały personel ekip w jednym miejscu przez cały czas trwania Igrzysk.
        </p>
      </section>
    </div>
  );
}
