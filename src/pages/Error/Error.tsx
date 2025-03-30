import { useTranslation } from 'react-i18next';
import styles from './Error.module.css';

export default function Error() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.errorContainer}>
                <h1 className={styles.errorTitle}>{t("god")}</h1>
                <p className={styles.errorText}>{t("kill")}</p>
                <div className={styles.imgContainer}>
                    <img className={styles.kennyImage} src="https://media.stickerswiki.app/damn_southpark2/2062514.512.webp" alt="Kenny" />
                    <a className={styles.homeButton} href="/">{t("home")}</a>
                </div>
            </div>
        </div>
    );
}
