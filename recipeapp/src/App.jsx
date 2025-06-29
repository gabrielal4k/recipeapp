import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import NavHeader from "./components/NavHeader";
import "./App.css";
import RecipeContainer from "./components/RecipeContainer";
import RecipeInnerContainer from "./components/RecipeInnerContainer";
import RecipeDetails from "./components/RecipeDetails";
import Container from "./components/Container";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeID, setRecipeID] = useState(642583);

  return (
    <div className="App">
      <NavHeader />
      <Search recipes={recipes} setRecipes={setRecipes} />
      <RecipeContainer>
        <RecipeInnerContainer>
          <RecipeList setRecipeID={setRecipeID} recipes={recipes} />
        </RecipeInnerContainer>
        <RecipeInnerContainer>
          <RecipeDetails recipeID={recipeID} />
        </RecipeInnerContainer>
      </RecipeContainer>
    </div>
  );
}

export default App;
