import Ingredient from "./Ingredient";

export default function IngredientsList({ recipeInfo, flagLoading }) {
  return (
    <div>
      {flagLoading ? (
        <h2>Loading...</h2>
      ) : (
        recipeInfo.extendedIngredients.map((ingredient) => (
          <Ingredient ingredient={ingredient} />
        ))
      )}
    </div>
  );
}
