import styles from "./recipeItem.module.css";

export default function RecipeItem({ recipe }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={recipe.image} alt="picture" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{recipe.title}</p>
      </div>

      <div className={styles.itemButtonContainer}>
        <button className={styles.itemButton}> View Recipe</button>
      </div>
    </div>
  );
}
