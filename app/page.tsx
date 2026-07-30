export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="text-center py-20 px-6" style={{ backgroundColor: "var(--kolor-niebieski)", color: "white" }}>
        <h1 className="text-5xl font-bold mb-4">Szkolofiada</h1>
        <p className="text-xl mb-2 italic">„Citius, Altius, Fortius"</p>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          Pierwsza w dziejach ludzkości olimpiada dla dzieci w wieku 7–12 lat.
          Toruń i Bydgoszcz, 1–14 sierpnia 2023.
        </p>
      </section>

      {/* Sekcje */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: "var(--kolor-niebieski)" }}>
          <h2 className="text-xl font-bold mb-2">🏅 Igrzyska</h2>
          <p className="text-gray-600 text-sm">Pierwsze Igrzyska Szkolofiady odbyły się w Toruniu i Bydgoszczy. Kolejne edycje co 2 lata.</p>
        </div>
        <div className="rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: "var(--kolor-zielony)" }}>
          <h2 className="text-xl font-bold mb-2">⚽ Dyscypliny</h2>
          <p className="text-gray-600 text-sm">Lekkoatletyka, pływanie, piłka nożna, siatkówka, koszykówka, piłka ręczna i wiele więcej.</p>
        </div>
        <div className="rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: "var(--kolor-czerwony)" }}>
          <h2 className="text-xl font-bold mb-2">👦 Uczestnicy</h2>
          <p className="text-gray-600 text-sm">Dzieci w wieku 7–12 lat podzielone na grupy: Szkrabki, Szkaraby, Kajtki, Żaczki, Plastusie, Kubusie.</p>
        </div>
      </section>

      {/* Fundamentalne zasady */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Fundamentalne zasady</h2>
          <p className="text-gray-600 leading-relaxed">
            Szkolofiada jest filozofią życia, chwaląc i łącząc w zrównoważoną całość jakość ciała, woli i umysłu. 
            Celem Szkolofiady jest, aby sport służył harmonijnemu rozwojowi młodego człowieka.
          </p>
        </div>
      </section>
    </div>
  );
}
