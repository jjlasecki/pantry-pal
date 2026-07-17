import SearchForm from "../components/SearchForm";
import { searchMealsByIngredient } from "../services/mealApi";
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import "./Home.css";

export default function Home() {
  const [meals, setMeals] = useState([]);

  async function handleSearch(ingredient) {
    const meals = await searchMealsByIngredient(ingredient);

    setMeals(meals);
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
          {meals.length > 0 && <p>{meals.length} recipes found</p>}
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </section>
    </main>
  );
}
