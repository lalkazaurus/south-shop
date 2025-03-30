import { useTranslation } from "react-i18next";
import { categoriesEn, categoriesUk } from "../../data/categories";
import styles from "./Main.module.css"

export default function App() {

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const categories = i18n.language === "uk" ? categoriesUk : categoriesEn;


  return (
    <>
      <div className={styles.banner}>
        <img className={styles.banner} src="https://variety.com/wp-content/uploads/2021/04/South-Park-Key-Art-2.jpg"/>
      </div>
      <h1 className={styles.title}>{t('category')}</h1>
      <div className={styles.container}>
          {categories.map((category) => (
            <div key={category.key}>{category.title}
              <p>{category.desc}</p>
            </div>
          ))}
      </div>
    </>

  );
}