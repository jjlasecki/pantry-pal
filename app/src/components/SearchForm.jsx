export default function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Example: Chicken, pasta, apples..."
      />

      <div className="button-group">
        <button type="submit">
          Search
        </button>

        <button type="button">
          Surprise Me
        </button>
      </div>
    </form>
  );
}