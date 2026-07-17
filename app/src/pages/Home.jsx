import SearchForm from "../components/SearchForm";
import { searchMealsByIngredient } from "../services/mealApi";

export default function Home() {
  async function handleSearch(ingredient) {
    const meals = await searchMealsByIngredient(ingredient);

    console.log(meals);
  }
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h2>What ingredient do you have?</h2>
          <p>
            Enter an ingredient you already have, and Pantry Pal will help you
            find something delicious to make.
          </p>
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>
    </main>
  );
}
