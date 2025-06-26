import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
