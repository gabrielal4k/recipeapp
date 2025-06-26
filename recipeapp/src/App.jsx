import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import NavHeader from "./components/NavHeader";
import "./App.css";
function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <NavHeader />
      <Search recipes={recipes} setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
