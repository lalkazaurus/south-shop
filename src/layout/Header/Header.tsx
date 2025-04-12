import { useState } from "react";
import { useTranslation } from "react-i18next";
import { categoriesEn, categoriesUk } from "../../data/categories";
import LocaleSwitcher from "../../i18n/LocaleSwitcher";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useProductStore } from "../../store";
import { Link } from "react-router-dom";

export default function Header() {
  const { i18n } = useTranslation();
  const categories = i18n.language === "uk" ? categoriesUk : categoriesEn;
  const products = useProductStore((state) => state.products);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png"
          alt="Logo"
        />
        <h1 className={styles.title}>South Shop</h1>
        <div className={styles.instruments}>
          <LocaleSwitcher />
          <div className={styles.cart}>
            <a href="/cart">
              <FaShoppingCart size={35} />
            </a>
            <span className={styles.productNumber}>{products.length}</span>
          </div>
        </div>
      </div>

      <button className={styles.menuToggle} onClick={toggleMenu}>
        Категорії ☰
      </button>
      
      <ul className={`${styles.list} ${menuOpen ? styles.open : ""}`}>
        {categories.map((category) => (
          <li key={category.key}>
            <a href={`#${category.key}`} onClick={() => setMenuOpen(false)}>
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
