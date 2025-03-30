import { useTranslation } from "react-i18next";
import { categoriesEn, categoriesUk } from "../../data/categories";
import LocaleSwitcher from "../../i18n/LocaleSwitcher";
import styles from "./Header.module.css";

export default function Header() {
  const { i18n } = useTranslation();
  const categories = i18n.language === "uk" ? categoriesUk : categoriesEn;

  return (
    <header className={styles.header}>
      <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png" alt="Logo" />
      <h1>South Shop</h1>
      <LocaleSwitcher />
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category.key}>{category.title}</li>
        ))}
      </ul>
    </header>
  );
}
