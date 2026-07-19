import { useState } from "react";
import "./SearchForm.css";

export default function SearchForm({ onSearch }) {
  const [ingredient, setIngredient] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    onSearch(ingredient);
  }

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search by ingredient (e.g. chicken)"
        value={ingredient}
        onChange={(event) => setIngredient(event.target.value)}
      />

      <div className="button-group">
        <button type="submit">Search</button>
        <button type="button">Surprise Me</button>
      </div>
    </form>
  );
}
