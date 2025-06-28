import RecipeItem from "./RecipeItem";

export default function RecipeList({ setRecipeID, recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} setRecipeID={setRecipeID} />
      ))}
    </div>
  );
}
