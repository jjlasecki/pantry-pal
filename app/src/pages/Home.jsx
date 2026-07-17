import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h2>What ingredient do you have?</h2>
          <p>
            Enter an ingredient you already have, and Pantry Pal will help you
            find something delicious to make.
          </p>
          <SearchForm />
        </div>
      </section>
    </main>
  );
}