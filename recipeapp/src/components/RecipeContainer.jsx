import styles from "./recipeContainer.module.css";

export default function RecipeContainer({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
