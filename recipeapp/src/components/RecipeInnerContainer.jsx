import styles from "./recipeinnercontainer.module.css";

export default function RecipeInnerContainer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
