import { useEffect } from "react";
import { useState } from "react";
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
      <div>
        <h1>{recipeInfo.title}</h1>
        <img src={recipeInfo.image} alt="image" />

        <div>
          <span>⏰ {recipeInfo.readyInMinutes}</span>
          <span>
            <strong>👯 Servings:</strong> {recipeInfo.servings}
          </span>

          <span>
            {" "}
            {recipeInfo.vegetarian ? "🥬 Vegetarian" : "Not-Vegetarian"}
          </span>
          <span>{recipeInfo.vegan ? "🐮 Vegan" : "Not-Vegan"}</span>
        </div>

        <div>
          <span>💲{recipeInfo.pricePerServing / 100} Per serving</span>
        </div>

        <div>
          <h2>Instructions</h2>
          {flagLoading ? (
            <p>Loading.....</p>
          ) : (
            recipeInfo.analyzedInstructions[0].steps.map((step) => (
              <li key={step.step}>{step.step}</li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
