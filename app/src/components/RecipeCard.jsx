import "./RecipeCard.css";

export default function RecipeCard({ meal }) {
  return (
    <div className="recipe-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
      <h3>{meal.strMeal}</h3>
    </div>
  );
}
