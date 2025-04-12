import { useTranslation } from "react-i18next";
import { useProductStore } from "../../store";
import styles from "./Cart.module.css";

export default function Cart() {
    const { t } = useTranslation();
    const products = useProductStore((state) => state.products);
    const deleteProduct = useProductStore((state) => state.deleteProduct);
    const increaseAmount = useProductStore((state) => state.increaseAmount);
    const decreaseAmount = useProductStore((state) => state.decreaseAmount);
    const clearCart = useProductStore((store) => store.clearCart);

    if (products.length === 0) {
        return (
            <div className={styles.container}>
                <p>🛒 {t("empty_cart")}</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {products.map((product) => (
                    <li key={product.name} className={styles.productBlock}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.image}
                        />
                        <div className={styles.productInfo}>
                            <h3 className={styles.productTitle}>{product.name}</h3>
                            <p className={styles.desc}>{product.description}</p>
                            <p className={styles.price}>{t("price")}: {product.price} грн</p>
                        </div>
                        <div className={styles.controlsBlock}>
                            <div className={styles.amountBlock}>
                                <button onClick={() => increaseAmount(product.name)} className={styles.addButton}>+</button>
                                <p>{t("amount")}: {product.amount}</p>
                                <button onClick={() => decreaseAmount(product.name)} className={styles.minusButton}>-</button>
                            </div>
                            <button className={styles.removeButton} onClick={() => deleteProduct(product.name)}>
                                {t("delete")}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={styles.footer}>
                <a href="/form">
                    <button className={styles.orderButton}>{t("place_an_order")}</button>
                </a>
                <button className={styles.clearButton} onClick={clearCart}>{t("clear_cart")}</button>
            </div>
        </div>
    );
}
