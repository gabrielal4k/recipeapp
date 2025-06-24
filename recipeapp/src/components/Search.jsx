import React, { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "f88265a0cd47446497613e3f91bb8964";

  useEffect(() => {
    async function fetchRecipes() {
      if (query) {
        const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await response.json();

        console.log(data.results);
      }
    }
    fetchRecipes();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
    </div>
  );
}
