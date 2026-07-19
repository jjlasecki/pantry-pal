import SearchForm from "../components/SearchForm";
import { searchMealsByIngredient } from "../services/mealApi";
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import "./Home.css";
import LoadingSpinner from "../components/LoadingSpinner";
import EmptyState from "../components/EmptyState";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(ingredient) {
    setIsLoading(true);
    setHasSearched(true);
    const meals = await searchMealsByIngredient(ingredient);

    setMeals(meals);
    setIsLoading(false);
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
          {isLoading && <LoadingSpinner />}
          {hasSearched && !isLoading && meals.length === 0 && <EmptyState />}
          {meals.length > 0 && <p>{meals.length} recipes found</p>}
          <div className="recipe-grid">
            {meals.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
