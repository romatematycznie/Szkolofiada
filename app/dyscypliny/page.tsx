export default function Dyscypliny() {
  const dyscypliny = [
    { nazwa: "Lekkoatletyka", emoji: "🏃", opis: "Biegi (100m, 200m, 400m, 800m, 1500m, 3000m, maraton), skoki, rzuty, wieloboje, chód" },
    { nazwa: "Pływanie", emoji: "🏊", opis: "Dystanse 50m–200m w stylach: dowolnym, grzbietowym, motylkowym, klasycznym oraz zmienny" },
    { nazwa: "Piłka nożna", emoji: "⚽", opis: "Mecze: dwie połowy po 15 minut, dogrywki po 10 minut" },
    { nazwa: "Siatkówka", emoji: "🏐", opis: "Sety do 15 punktów, przewaga 2 punktów, trzy sety" },
    { nazwa: "Koszykówka", emoji: "🏀", opis: "Cztery kwarty po 10 minut, przerwa 5 minut" },
    { nazwa: "Piłka ręczna", emoji: "🤾", opis: "Dwie połowy po 15 minut, przerwa 5 minut" },
    { nazwa: "Badminton", emoji: "🏸", opis: "Zarządzany przez Światową Federację Badmintona (BWF)" },
    { nazwa: "Tenis", emoji: "🎾", opis: "Zarządzany przez Międzynarodową Federację Tenisową (ITF)" },
    { nazwa: "Tenis stołowy", emoji: "🏓", opis: "Zarządzany przez Międzynarodową Federację Tenisa Stołowego (ITTF)" },
    { nazwa: "Judo", emoji: "🥋", opis: "Zarządzane przez Międzynarodową Federację Judo (IJF)" },
    { nazwa: "Gimnastyka", emoji: "🤸", opis: "Zarządzana przez Międzynarodową Federację Gimnastyczną (FIG)" },
    { nazwa: "Żeglarstwo", emoji: "⛵", opis: "Zarządzane przez Międzynarodową Federację Żeglarską (ISAF)" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-czerwony)" }}>Dyscypliny</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Sporty letnie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dyscypliny.map((d, i) => (
            <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-lg mb-1">{d.emoji} {d.nazwa}</h3>
              <p className="text-gray-600 text-sm">{d.opis}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Zasady eliminacji</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">🔹 W eliminacjach każdy uczestnik ma <strong>3 próby</strong> w swojej konkurencji.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">🔹 Do finału kwalifikuje się <strong>8 zawodników</strong> z najlepszymi wynikami.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">🔹 W finale <strong>6 kolejek</strong>. Kolejność startu odwrotna do zajętego miejsca po 5 kolejkach.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-gray-700">🔹 Każdy kraj może wystawić <strong>dwóch zawodników</strong> w konkurencji.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
