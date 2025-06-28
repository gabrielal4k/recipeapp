import styles from "./recipeItem.module.css";

export default function RecipeItem({ recipe, setRecipeID }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={recipe.image} alt="picture" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{recipe.title}</p>
      </div>

      <div className={styles.itemButtonContainer}>
        <button
          className={styles.itemButton}
          onClick={(e) => {
            console.log(recipe.id);
            setRecipeID(recipe.id);
          }}
        >
          {" "}
          View Recipe
        </button>
      </div>
    </div>
  );
}
