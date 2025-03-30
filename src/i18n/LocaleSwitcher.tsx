import { useTranslation } from "react-i18next";
import { supportedLngs } from "./config";
import styles from "./LocalSwitcher.module.css"

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
        <select
          value={i18n.resolvedLanguage}
          className={styles.lang}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.entries(supportedLngs).map(([code, name]) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
  );
}