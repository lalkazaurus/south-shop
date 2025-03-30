import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} {t("tech_store")}</p>
        <div className={styles.socials}>
          <a href="#" className={styles.icon}><FaFacebook /></a>
          <a href="#" className={styles.icon}><FaInstagram /></a>
          <a href="#" className={styles.icon}><FaTwitter /></a>
          <a href="#" className={styles.icon}><FaTelegram /></a>
        </div>
      </div>
    </footer>
  );
}
