export default function OShkolofiadzie() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-niebieski)" }}>O Szkołofiadzie</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Filozofia i preambuła</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Szkolofiada jest filozofią życia, chwalącą i łączącą w zrównoważoną całość jakość ciała, woli i umysłu. Łącząc sport z kulturą i edukacją, dąży do stworzenia sposobu życia opartego na radości z wysiłku, wychowawczych wartościach dobrego przykładu, odpowiedzialności społecznej i poszanowania uniwersalnych podstawowych zasad etycznych.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Celem Szkolofiady jest, aby sport służył harmonijnemu rozwojowi młodego człowieka — młodego pokolenia, z wizją propagowania miłującego pokój społeczeństwa i poszanowania ludzkiej godności.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Fundamentalne zasady</h2>
        <div className="space-y-4">
          {[
            "Szkolofiada jest filozofią życia, chwalącą i łączącą w zrównoważoną całość jakość ciała, woli i umysłu.",
            "Celem Szkolofiady jest, aby sport służył harmonijnemu rozwojowi młodego człowieka.",
            "Ruch Szkolofijski oznacza skoordynowane, zorganizowane, uniwersalne i stałe działania pod najwyższym kierownictwem MKS.",
            "Uprawianie sportu jest szczególnym prawem młodego człowieka. Każdy musi mieć możliwość uprawiania sportu bez jakiejkolwiek dyskryminacji.",
            "Organizacje sportowe zrzeszone wokół Ruchu Szkolofijskiego niezależnie ustanawiają swoje prawa i obowiązki.",
            "Należy zapewnić możliwość korzystania z praw i wolności bez dyskryminacji ze względu na rasę, kolor skóry, płeć, język, religię czy poglądy.",
            "Przynależność do Ruchu Szkolofijskiego wymaga zgodności z Kartą Szkolofiady oraz uznania przez MKS.",
          ].map((zasada, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-gray-50">
              <span className="text-xl font-bold" style={{ color: "var(--kolor-niebieski)" }}>{i + 1}.</span>
              <p className="text-gray-700">{zasada}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Misja MKS</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Misją Międzynarodowego Komitetu Szkolofijskiego jest propagowanie olimpizmu na całym świecie oraz przewodniczenie Ruchowi Szkolofijskiemu. Siedziba MKS znajduje się w Toruniu, który otrzymał tytuł stolicy Szkolofijskiej.
        </p>
      </section>
    </div>
  );
}
