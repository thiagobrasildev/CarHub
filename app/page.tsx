import { CustomFilter, Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl"> Catálogo de carros</h1>
          <p>Encontre os carros que você gosta</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="combustivel" />
            <CustomFilter title="Ano" />
          </div>
        </div>
      </div>
    </main>
  );
}
