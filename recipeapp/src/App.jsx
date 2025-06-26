import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import NavHeader from "./components/NavHeader";
import "./App.css";
import RecipeContainer from "./components/RecipeContainer";
import RecipeInnerContainer from "./components/RecipeInnerContainer";
function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <NavHeader />
      <Search recipes={recipes} setRecipes={setRecipes} />
      <RecipeContainer>
        <RecipeInnerContainer>
          <RecipeList recipes={recipes} />
        </RecipeInnerContainer>
      </RecipeContainer>
    </div>
  );
}

export default App;
