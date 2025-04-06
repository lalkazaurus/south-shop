import { useTranslation } from "react-i18next";
import { categoriesEn, categoriesUk } from "../../data/categories";
import LocaleSwitcher from "../../i18n/LocaleSwitcher";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useProductStore } from "../../store";

export default function Header() {
  const { i18n } = useTranslation();
  const categories = i18n.language === "uk" ? categoriesUk : categoriesEn;
  const products = useProductStore((state) => state.products);

  return (
    <header className={styles.header}>
      <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png" alt="Logo" />
      <h1>South Shop</h1>
      <div className={styles.instruments}>
        <LocaleSwitcher />
        <div className={styles.cart}>
          <a href={"/cart"}><FaShoppingCart size={35} /></a>
          <span className={styles.productNumber}>{products.length}</span>
        </div>
      </div>
      
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category.key}>{category.title}</li>
        ))}
      </ul>
    </header>
  );
}
