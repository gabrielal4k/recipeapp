import { useEffect } from "react";
import { useState } from "react";
import styles from "./recipedetails.module.css";
import IngredientsList from "./IngredientsList";
export default function RecipeDetails({ recipeID }) {
  const URL = `https://api.spoonacular.com/recipes/${recipeID}/information`;
  const API_KEY = "f88265a0cd47446497613e3f91bb8964";

  const [recipeInfo, setRecipeInfo] = useState({});
  const [flagLoading, setFlagLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipeDetails() {
      await fetch(`${URL}?apiKey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setRecipeInfo(data);
          setFlagLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching recipe details:", error);
        });
    }
    fetchRecipeDetails();
  }, [recipeID]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{recipeInfo.title}</h1>
        <img
          className={styles.recipeImage}
          src={recipeInfo.image}
          alt="image"
        />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {recipeInfo.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👯 Servings:</strong> {recipeInfo.servings}
          </span>

          <span>
            <strong>
              {recipeInfo.vegetarian ? "🥬 Vegetarian" : "Not-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{recipeInfo.vegan ? "🐮 Vegan" : "Not-Vegan"}</strong>
          </span>
        </div>

        <div>
          <span>
            <strong>💲{recipeInfo.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <IngredientsList recipeInfo={recipeInfo} flagLoading={flagLoading} />
        <h2>Instructions</h2>

        <div className={styles.recipeInstructions}>
          <ol>
            {flagLoading ? (
              <p>Loading.....</p>
            ) : (
              recipeInfo.analyzedInstructions[0].steps.map((step) => (
                <li key={step.step}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
