import { useTranslation } from "react-i18next";
import { useProductStore } from "../../store";
import styles from "./Cart.module.css";

export default function Cart() {
    const { t } = useTranslation();
    const products = useProductStore((state) => state.products);
    const deleteProduct = useProductStore((state) => state.deleteProduct);
    const increaseAmount = useProductStore((state) => state.increaseAmount);
    const decreaseAmount = useProductStore((state) => state.decreaseAmount);

    console.log("🛒 Current cart products:", products);

    if (products.length === 0) return <div className={styles.container}><p>🛒 Cart is empty</p></div>;

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
                        <h3 className={styles.productTitle}>{product.name}</h3>
                        <p className={styles.desc}>
                            {product.description}
                        </p>
                        <p className={styles.price}>
                            {t("price")}: {product.price} грн
                        </p>
                        <div className={styles.controlsBlock}>
                            <div className={styles.amountBlock}>
                                <button onClick={() => {increaseAmount(product.name)}} className={styles.addButton}>+</button>
                                <p>
                                    Amount: {product.amount}
                                </p>
                                <button onClick={() => {decreaseAmount(product.name)}} className={styles.minusButton}>-</button> 
                            </div>
                            <button className={styles.removeButton} onClick={() => {deleteProduct(product.name)}}>
                                Видалити
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
