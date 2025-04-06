import { useQuery } from "@tanstack/react-query";
import styles from "./ProductList.module.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useProductStore } from "../../store";

const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    return res.data;
};

export default function ProductList() {
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    const { t } = useTranslation();
    const addProduct = useProductStore((state) => state.addProduct);

    if (isLoading) return <p>Завантаження...</p>;
    if (isError) return <p>Помилка завантаження</p>;

    return (
        <div className={styles.container}>
            <div className={styles.products}>
                {products.map((product) => (
                    <div key={product._id} className={styles.productBlock}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.image}
                        />
                        <h3 className={styles.productTitle}>{product.name}</h3>
                        <p className={styles.price}>
                            {t("price")}: {product.price} грн
                        </p>
                        <button
                            className={styles.button}
                            onClick={() => {
                                addProduct(product);
                                console.log("✅ Product added to cart:", product);
                            }}
                        >
                            Buy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
