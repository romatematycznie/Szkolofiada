export default function Symbole() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-czerwony)" }}>Symbole</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Symbol Szkolofijski</h2>
        <div className="p-6 rounded-xl bg-gray-50 mb-4">
          <div className="flex justify-center mb-4">
            <KolaSzkolofijskie />
          </div>
          <p className="text-gray-700 leading-relaxed text-center">
            Symbol Szkolofijski składa się z pięciu splecionych ze sobą kół jednakowej średnicy. Kolory: <strong style={{ color: "var(--kolor-niebieski)" }}>niebieski</strong>, <strong>czarny</strong>, <strong style={{ color: "var(--kolor-czerwony)" }}>czerwony</strong> (górny rząd) oraz <strong style={{ color: "var(--kolor-zolty)" }}>żółty</strong> i <strong style={{ color: "var(--kolor-zielony)" }}>zielony</strong> (dolny rząd). Symbolizuje unię pięciu kontynentów.
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

/* ---------------------------------------------------------
   Koła Szkolofijskie z animowanymi buźkami dzieci
   --------------------------------------------------------- */
function KolaSzkolofijskie() {
  const r = 70; // promień pierścienia
  const grubosc = 13; // grubość obwódki pierścienia

  // Górny rząd: niebieski, czarny, czerwony
  // Dolny rząd: żółty, zielony (przesunięte w dół, splecione z górnym rzędem)
  const gorny = [
    { cx: 100, cy: 95, kolor: "#0085C7" },
    { cx: 250, cy: 95, kolor: "#000000" },
    { cx: 400, cy: 95, kolor: "#DF0024" },
  ];
  const dolny = [
    { cx: 175, cy: 175, kolor: "#F4C300" },
    { cx: 325, cy: 175, kolor: "#009F3D" },
  ];

  const dzieci = [
    { skora: "#F6C9A0", wlosy: "#7A4A2B", fryzura: "kucyki", akcent: "#E8734A" },
    { skora: "#8D5A34", wlosy: "#1A1A1A", fryzura: "afro", akcent: "#2E86AB" },
    { skora: "#EFC29B", wlosy: "#C94F3B", fryzura: "krotkie", akcent: "#F4A300" },
    { skora: "#F2C79A", wlosy: "#111111", fryzura: "grzywka", akcent: "#5CB85C", oczy: "skosne" },
    { skora: "#4A2E1E", wlosy: "#0D0D0D", fryzura: "kok", akcent: "#9B59B6" },
  ];

  const pierscienie = [...gorny, ...dolny];

  return (
    <svg
      viewBox="0 0 500 260"
      width="100%"
      style={{ maxWidth: 520 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes szk-mrugniecie {
          0%, 88%, 100% { transform: scaleY(1); }
          92% { transform: scaleY(0.12); }
        }
        @keyframes szk-kolysanie {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(1.5deg); }
        }
        .szk-oczy { transform-box: fill-box; transform-origin: center; }
        .szk-buzia { transform-box: fill-box; transform-origin: center; }
      `}</style>

      {/* dolne pierścienie rysowane najpierw, żeby górny rząd był na wierzchu (efekt splotu) */}
      {dolny.map((p, i) => (
        <circle key={`d-${i}`} cx={p.cx} cy={p.cy} r={r} fill="none" stroke={p.kolor} strokeWidth={grubosc} />
      ))}
      {gorny.map((p, i) => (
        <circle key={`g-${i}`} cx={p.cx} cy={p.cy} r={r} fill="none" stroke={p.kolor} strokeWidth={grubosc} />
      ))}

      {/* buźki dzieci w środku każdego koła */}
      {pierscienie.map((p, i) => (
        <Buzia
          key={i}
          cx={p.cx}
          cy={p.cy}
          r={r - grubosc / 2 - 6}
          dziecko={dzieci[i]}
          opoznienie={i * 0.35}
        />
      ))}
    </svg>
  );
}

function Buzia({ cx, cy, r, dziecko, opoznienie }) {
  const { skora, wlosy, fryzura, akcent, oczy } = dziecko;

  return (
    <g
      className="szk-buzia"
      style={{ animation: `szk-kolysanie 3.4s ease-in-out ${opoznienie}s infinite` }}
    >
      {/* włosy z tyłu głowy (dla fryzur otaczających) */}
      {fryzura === "afro" && (
        <circle cx={cx} cy={cy - r * 0.1} r={r * 0.92} fill={wlosy} />
      )}

      {/* twarz */}
      <circle cx={cx} cy={cy} r={r * 0.78} fill={skora} />

      {/* fryzury */}
      {fryzura === "kucyki" && (
        <>
          <circle cx={cx} cy={cy - r * 0.55} r={r * 0.55} fill={wlosy} />
          <circle cx={cx - r * 0.78} cy={cy - r * 0.05} r={r * 0.22} fill={wlosy} />
          <circle cx={cx + r * 0.78} cy={cy - r * 0.05} r={r * 0.22} fill={wlosy} />
        </>
      )}
      {fryzura === "krotkie" && (
        <path
          d={`M ${cx - r * 0.8} ${cy - r * 0.1} A ${r * 0.8} ${r * 0.8} 0 0 1 ${cx + r * 0.8} ${cy - r * 0.1} L ${cx + r * 0.7} ${cy - r * 0.45} Q ${cx} ${cy - r * 0.95} ${cx - r * 0.7} ${cy - r * 0.45} Z`}
          fill={wlosy}
        />
      )}
      {fryzura === "grzywka" && (
        <path
          d={`M ${cx - r * 0.8} ${cy - r * 0.15} A ${r * 0.8} ${r * 0.8} 0 0 1 ${cx + r * 0.8} ${cy - r * 0.15} L ${cx + r * 0.75} ${cy - r * 0.3} Q ${cx} ${cy - r * 0.12} ${cx - r * 0.75} ${cy - r * 0.3} Z`}
          fill={wlosy}
        />
      )}
      {fryzura === "kok" && (
        <>
          <path
            d={`M ${cx - r * 0.8} ${cy - r * 0.1} A ${r * 0.82} ${r * 0.82} 0 0 1 ${cx + r * 0.8} ${cy - r * 0.1} L ${cx + r * 0.72} ${cy - r * 0.5} Q ${cx} ${cy - r * 1} ${cx - r * 0.72} ${cy - r * 0.5} Z`}
            fill={wlosy}
          />
          <circle cx={cx} cy={cy - r * 1.05} r={r * 0.22} fill={wlosy} />
        </>
      )}

      {/* rumieńce */}
      <circle cx={cx - r * 0.45} cy={cy + r * 0.12} r={r * 0.1} fill="#ff8a80" opacity="0.45" />
      <circle cx={cx + r * 0.45} cy={cy + r * 0.12} r={r * 0.1} fill="#ff8a80" opacity="0.45" />

      {/* oczy (mrugające) */}
      <g className="szk-oczy" style={{ animation: `szk-mrugniecie 4.2s ease-in-out ${opoznienie}s infinite` }}>
        {oczy === "skosne" ? (
          <>
            <path
              d={`M ${cx - r * 0.4} ${cy - r * 0.03} Q ${cx - r * 0.28} ${cy - r * 0.16} ${cx - r * 0.15} ${cy - r * 0.02} Q ${cx - r * 0.28} ${cy + r * 0.06} ${cx - r * 0.4} ${cy - r * 0.03} Z`}
              fill="#2b2b2b"
            />
            <path
              d={`M ${cx + r * 0.15} ${cy - r * 0.02} Q ${cx + r * 0.28} ${cy - r * 0.16} ${cx + r * 0.4} ${cy - r * 0.03} Q ${cx + r * 0.28} ${cy + r * 0.06} ${cx + r * 0.15} ${cy - r * 0.02} Z`}
              fill="#2b2b2b"
            />
          </>
        ) : (
          <>
            <ellipse cx={cx - r * 0.28} cy={cy - r * 0.05} rx={r * 0.09} ry={r * 0.13} fill="#2b2b2b" />
            <ellipse cx={cx + r * 0.28} cy={cy - r * 0.05} rx={r * 0.09} ry={r * 0.13} fill="#2b2b2b" />
          </>
        )}
      </g>

      {/* uśmiech */}
      <path
        d={`M ${cx - r * 0.3} ${cy + r * 0.28} Q ${cx} ${cy + r * 0.52} ${cx + r * 0.3} ${cy + r * 0.28}`}
        stroke="#7a3b2e"
        strokeWidth={r * 0.07}
        fill="none"
        strokeLinecap="round"
      />

      {/* mały akcent - wstążka/opaska w kolorze pierścienia dziecka */}
      <circle cx={cx} cy={cy - r * 0.85} r={r * 0.06} fill={akcent} />
    </g>
  );
}
