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

export async function getMealById(id) {
  const response = await mealApi.get("lookup.php", {
    params: {
      i: id,
    },
  });

  return response.data.meals?.[0] || null;
}

export default mealApi;
