export default function RecipeItem({ recipe }) {
  return (
    <div>
      <img src={recipe.image} alt="picture" />
      <h4>{recipe.title}</h4>
      <button>View Recipe</button>
    </div>
  );
}
