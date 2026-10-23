import type { CSSProperties } from "react";

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
        <div className="p-6 rounded-xl bg-gray-50 mb-4">
          <div className="flex justify-center mb-4">
            <FlagaSzkolofijska />
          </div>
          <p className="text-gray-700 leading-relaxed text-center">
            Flaga Szkolofijska ma białe tło bez obramowania. W jej centralnym punkcie znajduje się symbol Szkolofijski w pięciu kolorach.
          </p>
        </div>
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
   (treść symbolu wydzielona do SymbolZawartosc, żeby dokładnie
   ten sam symbol można było ponownie użyć na fladze)
   --------------------------------------------------------- */
type DzieckoTyp = {
  skora: string;
  wlosy: string;
  fryzura: "kucyki" | "afro" | "krotkie" | "grzywka" | "kok";
  akcent: string;
  oczy?: "skosne" | "okragle";
};

const SYMBOL_SZEROKOSC = 500;
const SYMBOL_WYSOKOSC = 260;

function SymbolZawartosc() {
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

  const dzieci: DzieckoTyp[] = [
    { skora: "#F6C9A0", wlosy: "#7A4A2B", fryzura: "kucyki", akcent: "#E8734A" },
    { skora: "#8D5A34", wlosy: "#1A1A1A", fryzura: "afro", akcent: "#2E86AB" },
    { skora: "#EFC29B", wlosy: "#C94F3B", fryzura: "krotkie", akcent: "#F4A300" },
    { skora: "#F2C79A", wlosy: "#111111", fryzura: "grzywka", akcent: "#5CB85C", oczy: "skosne" },
    { skora: "#4A2E1E", wlosy: "#0D0D0D", fryzura: "kok", akcent: "#9B59B6" },
  ];

  const pierscienie = [...gorny, ...dolny];

  return (
    <>
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
    </>
  );
}

function KolaSzkolofijskie() {
  return (
    <svg
      viewBox={`0 0 ${SYMBOL_SZEROKOSC} ${SYMBOL_WYSOKOSC}`}
      width="100%"
      style={{ maxWidth: 520 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <SymbolZawartosc />
    </svg>
  );
}

function Buzia({
  cx,
  cy,
  r,
  dziecko,
  opoznienie,
}: {
  cx: number;
  cy: number;
  r: number;
  dziecko: DzieckoTyp;
  opoznienie: number;
}) {
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

/* ---------------------------------------------------------
   Flaga Szkolofijska - powiewa na wietrze
   Biały prostokąt (bez obramowania) z dokładnie tym samym
   symbolem co wyżej, zamocowany do masztu.

   Falowanie tkaniny uzyskujemy dzieląc flagę na wąskie,
   pionowe pasy. Każdy pas to ten sam rysunek flagi, ale
   wycięty (clipPath) do swojej kolumny i przesuwany w pionie
   własną animacją CSS. Amplituda ruchu rośnie od masztu
   (prawie bez ruchu - tkanina jest tam przyszyta) do wolnego,
   prawego brzegu (najsilniejszy łopot), a kolejne pasy mają
   przesunięte opóźnienie animacji, dzięki czemu fala wyraźnie
   "biegnie" wzdłuż flagi - tak jak w prawdziwym wietrze,
   zamiast rozmywać cały rysunek jak pod wodą.
   --------------------------------------------------------- */
const FLAGA_MARGINES = 24;
const FLAGA_X = 24;
const FLAGA_Y = FLAGA_MARGINES;
const FLAGA_SZEROKOSC = SYMBOL_SZEROKOSC;
const FLAGA_WYSOKOSC = SYMBOL_WYSOKOSC;
const FLAGA_VIEWBOX_SZER = FLAGA_X + FLAGA_SZEROKOSC + FLAGA_MARGINES;
const FLAGA_VIEWBOX_WYS = FLAGA_Y + FLAGA_WYSOKOSC + FLAGA_MARGINES;

const FLAGA_LICZBA_PASKOW: number = 14;
const FLAGA_PASEK_SZEROKOSC = FLAGA_SZEROKOSC / FLAGA_LICZBA_PASKOW;
const FLAGA_AMPLITUDA_MIN = 1.5; // px, przy maszcie - tkanina usztywniona
const FLAGA_AMPLITUDA_MAX = 13; // px, na wolnym brzegu - najmocniejszy łopot
const FLAGA_NADDATEK = Math.ceil(FLAGA_AMPLITUDA_MAX); // margines rysunku, by nie było prześwitów przy ruchu

function FlagaSzkolofijska() {
  const paski = Array.from({ length: FLAGA_LICZBA_PASKOW }, (_, i) => {
    const postep = FLAGA_LICZBA_PASKOW === 1 ? 1 : i / (FLAGA_LICZBA_PASKOW - 1);
    const amplituda = FLAGA_AMPLITUDA_MIN + (FLAGA_AMPLITUDA_MAX - FLAGA_AMPLITUDA_MIN) * postep;
    return {
      i,
      x: FLAGA_X + i * FLAGA_PASEK_SZEROKOSC,
      amplituda,
      opoznienie: i * 0.09,
    };
  });

  const rectY = FLAGA_Y - FLAGA_NADDATEK;
  const rectH = FLAGA_WYSOKOSC + FLAGA_NADDATEK * 2;

  return (
    <svg
      viewBox={`0 0 ${FLAGA_VIEWBOX_SZER} ${FLAGA_VIEWBOX_WYS}`}
      width="100%"
      style={{ maxWidth: 560 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes szk-fala-pasek {
          0%, 100% { transform: translateY(calc(var(--szk-amp) * -1)); }
          50% { transform: translateY(var(--szk-amp)); }
        }
        .szk-pasek {
          animation-name: szk-fala-pasek;
          animation-duration: 2.6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .szk-pasek {
            animation: none !important;
          }
        }
      `}</style>

      <defs>
        {/* pojedyncza definicja flagi (tło + symbol), wielokrotnie użyta przez <use> w każdym pasie */}
        <g id="szk-flaga-rysunek">
          <rect x={FLAGA_X} y={rectY} width={FLAGA_SZEROKOSC} height={rectH} fill="#ffffff" />
          <g transform={`translate(${FLAGA_X}, ${FLAGA_Y})`}>
            <SymbolZawartosc />
          </g>
        </g>

        {paski.map((p) => (
          <clipPath key={p.i} id={`szk-pasek-clip-${p.i}`}>
            <rect x={p.x} y={rectY} width={FLAGA_PASEK_SZEROKOSC + 0.5} height={rectH} />
          </clipPath>
        ))}
      </defs>

      {/* maszt */}
      <rect x="4" y="6" width="12" height={FLAGA_VIEWBOX_WYS - 12} rx="4" fill="#8a5a33" />
      <circle cx="10" cy="10" r="12" fill="#d8b25c" stroke="#a9802f" strokeWidth="1.5" />
      {/* uchwyty mocujące flagę do masztu (statyczne) */}
      <circle cx="12" cy={FLAGA_Y + 20} r="4" fill="#a9802f" />
      <circle cx="12" cy={FLAGA_Y + FLAGA_WYSOKOSC / 2} r="4" fill="#a9802f" />
      <circle cx="12" cy={FLAGA_Y + FLAGA_WYSOKOSC - 20} r="4" fill="#a9802f" />

      {/* tkanina flagi pocięta na pasy, każdy łopocze z inną amplitudą i fazą */}
      {paski.map((p) => (
        <g
          key={p.i}
          clipPath={`url(#szk-pasek-clip-${p.i})`}
          className="szk-pasek"
          style={
            {
              "--szk-amp": `${p.amplituda}px`,
              animationDelay: `${p.opoznienie}s`,
            } as CSSProperties
          }
        >
          <use href="#szk-flaga-rysunek" />
        </g>
      ))}
    </svg>
  );
}
