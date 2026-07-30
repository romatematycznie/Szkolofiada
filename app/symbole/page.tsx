export default function Symbole() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-czerwony)" }}>Symbole</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Symbol Szkolofijski</h2>
        <div className="p-6 rounded-xl bg-gray-50 mb-4">
          <div className="flex justify-center gap-2 text-5xl mb-4">🔵🟡⚫🟢🔴</div>
          <p className="text-gray-700 leading-relaxed text-center">
            Symbol Szkolofijski składa się z pięciu splecionych ze sobą kół jednakowej średnicy. Kolory od lewej do prawej: <strong style={{ color: "var(--kolor-niebieski)" }}>niebieski</strong>, <strong style={{ color: "var(--kolor-zolty)" }}>żółty</strong>, <strong>czarny</strong>, <strong style={{ color: "var(--kolor-zielony)" }}>zielony</strong> i <strong style={{ color: "var(--kolor-czerwony)" }}>czerwony</strong>. Symbolizuje unię pięciu kontynentów.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Flaga Szkolofijska</h2>
        <p className="text-gray-700 leading-relaxed">
          Flaga Szkolofijska ma białe tło bez obramowania. W jej centralnym punkcie znajduje się symbol Szkolofijski w pięciu kolorach.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Motto</h2>
        <div className="p-6 rounded-xl text-center text-white text-2xl font-bold italic" style={{ backgroundColor: "var(--kolor-niebieski)" }}>
          „Citius, Altius, Fortius"
          <p className="text-base font-normal mt-2 opacity-90">Szybciej, Wyżej, Mocniej</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Hymn</h2>
        <p className="text-gray-700 leading-relaxed">
          Hymnem Szkolofijskim jest utwór muzyczny zatytułowany „Hymn Szkolofijski", skomponowany przez Spirosa Samarę.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Ogień Szkolofijski</h2>
        <p className="text-gray-700 leading-relaxed">
          Ogień Szkolofijski to ogień zapalony w Olimpii pod nadzorem MKS. Pochodnia Szkolofijska to pochodnia przenośna zatwierdzona przez MKS, przeznaczona do zapalenia ognia Szkolofijskiego w zniczu.
        </p>
      </section>
    </div>
  );
}
