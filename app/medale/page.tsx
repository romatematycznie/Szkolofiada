"use client";

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

  const medale = [
    {
      numer: 1,
      miejsce: "I miejsce",
      opis: "Złoty medal",
      nagroda: "2 000 zł",
      src: "/images/medale/zloty.png",
      alt: "Złoty medal Szkolofiady 2027",
      gradient: "linear-gradient(160deg, #ffe49a 0%, #ffcc33 45%, #d79b1e 100%)",
      stepClass: "podium-step-gold",
      cardDelay: "450ms",
      stepDelay: "150ms",
    },
    {
      numer: 2,
      miejsce: "II miejsce",
      opis: "Srebrny medal",
      nagroda: null,
      src: "/images/medale/srebrny.png",
      alt: "Srebrny medal Szkolofiady 2027",
      gradient: "linear-gradient(160deg, #f1f1f1 0%, #c9c9c9 45%, #9b9b9b 100%)",
      stepClass: "podium-step-silver",
      cardDelay: "300ms",
      stepDelay: "0ms",
    },
    {
      numer: 3,
      miejsce: "III miejsce",
      opis: "Brązowy medal",
      nagroda: null,
      src: "/images/medale/brazowy.png",
      alt: "Brązowy medal Szkolofiady 2027",
      gradient: "linear-gradient(160deg, #e8b382 0%, #c87f41 45%, #93581f 100%)",
      stepClass: "podium-step-bronze",
      cardDelay: "600ms",
      stepDelay: "300ms",
    },
  ];

  // Kolejność wizualna na podium: srebro (lewo) – złoto (środek) – brąz (prawo)
  const kolejnoscPodium = [medale[1], medale[0], medale[2]];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-zolty)" }}>Medale i nagrody</h1>

      <section className="mb-12">
        <div className="podium-wrapper relative flex items-end justify-center gap-4 sm:gap-8 pt-8">
          <div className="podium-spotlight" aria-hidden="true" />

          {kolejnoscPodium.map((m) => (
            <div key={m.numer} className="flex flex-col items-center w-32 sm:w-44 md:w-52">
              <div
                className="medal-card relative rounded-xl text-center shadow-md flex flex-col items-center px-4 py-6 sm:px-6 sm:py-8 w-full"
                style={{ animationDelay: m.cardDelay, backgroundColor: "#d4d2d0" }}
              >
                {m.numer === 1 && (
                  <div className="sparkles" aria-hidden="true">
                    <span className="sparkle s1">✦</span>
                    <span className="sparkle s2">✦</span>
                    <span className="sparkle s3">✦</span>
                    <span className="sparkle s4">✦</span>
                  </div>
                )}
                <div className="medal-image-wrap w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-3 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.src}
                    alt={m.alt}
                    className="medal-image w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <p className="font-bold text-base sm:text-xl">{m.miejsce}</p>
                {m.nagroda && (
                  <p className="text-gray-700 font-bold text-sm sm:text-lg mt-1">{m.nagroda}</p>
                )}
                <p className="text-gray-600 text-xs sm:text-base mt-1">{m.opis}</p>
              </div>

              <div
                className={`podium-step ${m.stepClass} w-full rounded-t-lg flex items-start justify-center`}
                style={{ background: m.gradient, animationDelay: m.stepDelay }}
              >
                <span className="podium-number">{m.numer}</span>
              </div>
            </div>
          ))}
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

      <style jsx>{`
        @keyframes medalEntrance {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes medalFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes medalShine {
          0% {
            transform: translateX(-120%) rotate(20deg);
          }
          100% {
            transform: translateX(220%) rotate(20deg);
          }
        }

        @keyframes stepRise {
          0% {
            opacity: 0;
            transform: scaleY(0);
          }
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes spotlightPulse {
          0%,
          100% {
            opacity: 0.35;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translateX(-50%) scale(1.08);
          }
        }

        @keyframes sparkleTwinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.4) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(25deg);
          }
        }

        .podium-wrapper {
          min-height: 440px;
        }

        .podium-spotlight {
          position: absolute;
          top: -20px;
          left: 50%;
          width: 360px;
          height: 360px;
          background: radial-gradient(
            circle,
            rgba(255, 215, 110, 0.55) 0%,
            rgba(255, 215, 110, 0.15) 45%,
            transparent 70%
          );
          filter: blur(4px);
          transform: translateX(-50%);
          animation: spotlightPulse 3.5s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .medal-card {
          opacity: 0;
          position: relative;
          z-index: 2;
          animation: medalEntrance 0.6s ease-out forwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .medal-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
        }

        .medal-image-wrap {
          overflow: hidden;
          margin-left: auto;
          margin-right: auto;
          animation: medalFloat 3.2s ease-in-out infinite;
        }

        .medal-image {
          transition: transform 0.4s ease;
        }

        .medal-card:hover .medal-image {
          transform: scale(1.08) rotate(-4deg);
        }

        .medal-image-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.55) 50%,
            transparent 100%
          );
          transform: translateX(-120%) rotate(20deg);
          pointer-events: none;
        }

        .medal-card:hover .medal-image-wrap::after {
          animation: medalShine 0.9s ease forwards;
        }

        .podium-step {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform-origin: bottom;
          animation: stepRise 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          box-shadow: inset 0 3px 6px rgba(255, 255, 255, 0.4), inset 0 -4px 10px rgba(0, 0, 0, 0.25);
        }

        .podium-step-gold {
          height: 180px;
        }

        .podium-step-silver {
          height: 125px;
        }

        .podium-step-bronze {
          height: 90px;
        }

        .podium-number {
          margin-top: 14px;
          font-weight: 800;
          font-size: 2.5rem;
          color: rgba(255, 255, 255, 0.85);
          text-shadow: 0 2px 3px rgba(0, 0, 0, 0.35);
        }

        .sparkles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 3;
        }

        .sparkle {
          position: absolute;
          color: #ffe49a;
          font-size: 0.9rem;
          opacity: 0;
          animation: sparkleTwinkle 2.2s ease-in-out infinite;
        }

        .sparkle.s1 {
          top: 6%;
          left: 10%;
          animation-delay: 0.2s;
        }

        .sparkle.s2 {
          top: 14%;
          right: 8%;
          animation-delay: 1s;
          font-size: 0.7rem;
        }

        .sparkle.s3 {
          bottom: 30%;
          left: 4%;
          animation-delay: 1.6s;
          font-size: 0.65rem;
        }

        .sparkle.s4 {
          top: 45%;
          right: 2%;
          animation-delay: 0.7s;
          font-size: 0.8rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .medal-card,
          .medal-image-wrap,
          .medal-image,
          .podium-step,
          .podium-spotlight,
          .sparkle {
            animation: none !important;
            transition: none !important;
          }
          .medal-card,
          .podium-step {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
