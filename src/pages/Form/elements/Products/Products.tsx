import { useProductStore } from "../../../../store";
import styles from "./Products.module.css"

export default function Products() {
    const products = useProductStore((store) => store.products)

    return (
        <>
            {products.map((product, idx) => (
                <div className={styles.container} key={idx}>
                    <img src={product.image} className={styles.image} alt={product.name} />
                    <div className={styles.info}>
                        <p className={styles.name}>{product.name}</p>
                    </div>
                    <div className={styles.details}>
                        <span className={styles.label}>Ціна</span>
                        <span>{product.price} ₴</span>
                    </div>
                    <div className={styles.details}>
                        <span className={styles.label}>Кількість</span>
                        <span>{product.amount}</span>
                    </div>
                </div>
            ))}
        </>
    )
}