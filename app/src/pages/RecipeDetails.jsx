import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../services/mealApi";
import "./RecipeDetails.css";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRecipe() {
      const meal = await getMealById(id);
      setRecipe(meal);
      setLoading(false);
    }

    loadRecipe();
  }, [id]);

  if (loading) {
    return <h2>Loading recipe...</h2>;
  }

  if (recipe === null) {
    return <h2>Recipe not found.</h2>;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({
        name: ingredient,
        measure: measure,
      });
    }
  }

  return (
    <main>
      <div className="recipe-details">
        <button
          className="back-button"
          type="button"
          onClick={() => navigate(-1)}
        >
          ← Back to results
        </button>
        <section className="recipe-details__front">
          <h1 className="recipe-details__title">{recipe.strMeal}</h1>
          <div className="recipe-details__overview">
            <img
              className="recipe-details__image"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />

            <div className="recipe-details__summary">
              <p>Category: {recipe.strCategory}</p>
              <p>Area: {recipe.strArea}</p>

              <h2>Ingredients</h2>

              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={`${ingredient.name}-${index}`}>
                    {ingredient.measure} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="recipe-details__instructions">
          <h2>Instructions</h2>

          <p>{recipe.strInstructions}</p>
        </section>
      </div>
    </main>
  );
}
