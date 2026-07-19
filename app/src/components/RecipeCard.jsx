import "./RecipeCard.css";

export default function RecipeCard({ meal }) {
  return (
    <article className="recipe-card">
      <img className="recipe-image" src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
    </article>
  );
}
