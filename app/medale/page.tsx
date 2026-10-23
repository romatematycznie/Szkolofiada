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
      miejsce: "I miejsce",
      opis: "Złoty medal",
      nagroda: "2 000 zł",
      src: "/images/medale/zloty.png",
      alt: "Złoty medal Szkolofiady 2027",
      delay: "0ms",
    },
    {
      miejsce: "II miejsce",
      opis: "Srebrny medal",
      nagroda: null,
      src: "/images/medale/srebrny.png",
      alt: "Srebrny medal Szkolofiady 2027",
      delay: "150ms",
    },
    {
      miejsce: "III miejsce",
      opis: "Brązowy medal",
      nagroda: null,
      src: "/images/medale/brazowy.png",
      alt: "Brązowy medal Szkolofiady 2027",
      delay: "300ms",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-zolty)" }}>Medale i nagrody</h1>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {medale.map((m, i) => (
            <div
              key={i}
              className="medal-card p-6 rounded-xl text-center shadow-md bg-white flex flex-col items-center"
              style={{ animationDelay: m.delay }}
            >
              <div className="medal-image-wrap w-32 h-32 mb-4 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.src}
                  alt={m.alt}
                  className="medal-image w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <p className="font-bold text-xl">{m.miejsce}</p>
              {m.nagroda && (
                <p className="text-gray-700 font-bold text-lg mt-1">{m.nagroda}</p>
              )}
              <p className="text-gray-600 text-sm mt-1">{m.opis}</p>
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

        .medal-card {
          opacity: 0;
          animation: medalEntrance 0.6s ease-out forwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .medal-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .medal-image-wrap {
          overflow: hidden;
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

        @media (prefers-reduced-motion: reduce) {
          .medal-card,
          .medal-image-wrap,
          .medal-image {
            animation: none !important;
            transition: none !important;
          }
          .medal-card {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
