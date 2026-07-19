import axios from "axios";

const mealApi = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export async function searchMealsByIngredient(ingredient) {
  const response = await mealApi.get("filter.php", {
    params: {
      i: ingredient,
    },
  });

  return response.data.meals || [];
}
export default mealApi;
