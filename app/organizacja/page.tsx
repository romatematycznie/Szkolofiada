export default function Organizacja() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "var(--kolor-niebieski)" }}>Organizacja</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Struktura Ruchu Szkolofijskiego</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Trzy główne elementy składowe Ruchu Szkolofijskiego to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-5 rounded-xl text-center border-2" style={{ borderColor: "var(--kolor-niebieski)" }}>
            <p className="font-bold text-lg mb-1">MKS</p>
            <p className="text-gray-600 text-sm">Międzynarodowy Komitet Szkolofijski</p>
          </div>
          <div className="p-5 rounded-xl text-center border-2" style={{ borderColor: "var(--kolor-zielony)" }}>
            <p className="font-bold text-lg mb-1">MFS</p>
            <p className="text-gray-600 text-sm">Międzynarodowe Federacje Sportowe</p>
          </div>
          <div className="p-5 rounded-xl text-center border-2" style={{ borderColor: "var(--kolor-czerwony)" }}>
            <p className="font-bold text-lg mb-1">NKS</p>
            <p className="text-gray-600 text-sm">Narodowe Komitety Szkolofijskie</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prezydent Szkolofiady</h2>
        <div className="p-6 rounded-xl bg-gray-50 border-l-4" style={{ borderColor: "var(--kolor-niebieski)" }}>
          <p className="font-bold text-xl mb-1">Dominik Mołdoch</p>
          <p className="text-gray-600">Twórca i Prezydent Szkolofiady. Pomysłodawca i organizator pierwszej w dziejach olimpiady dzieci w wieku od 7 do 12 lat.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Organy MKS</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="font-bold">1. Sesja</p>
            <p className="text-gray-600 text-sm mt-1">Najwyższy organ MKS. Walne zgromadzenie członków, organizowane raz w roku.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="font-bold">2. Komitet Wykonawczy MKS</p>
            <p className="text-gray-600 text-sm mt-1">Składa się z Prezydenta, czterech Wiceprezydentów i dziesięciu innych członków.</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="font-bold">3. Prezydent</p>
            <p className="text-gray-600 text-sm mt-1">Reprezentuje MKS i przewodniczy wszystkim jego działaniom. Wybierany na ośmioletnią kadencję.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Kongres Szkolofijski</h2>
        <p className="text-gray-700 leading-relaxed">
          Kongres Szkolofijski gromadzi co pewien czas przedstawicieli elementów składowych Ruchu Szkolofijskiego. Zwoływany jest przez Prezydenta MKS i pełni rolę doradczą.
        </p>
      </section>
    </div>
  );
}
