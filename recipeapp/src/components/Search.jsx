import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f88265a0cd47446497613e3f91bb8964";

export default function Search({ recipes, setRecipes }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchRecipes() {
      if (query) {
        const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await response.json();

        // console.log(data.results);
        setRecipes(data.results);
      }
    }
    fetchRecipes();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
    </div>
  );
}
