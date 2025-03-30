import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import Product from '../../type/Product';
import axios from 'axios';
import styles from "./AddProduct.module.css"
import { useTranslation } from 'react-i18next';

const AddProduct: React.FC = () => {
    const queryClient = useQueryClient();
    const { t } = useTranslation();
    const { handleSubmit, reset, register, formState: { errors } } = useForm<Product>({
        mode: "onChange"
    });

    const [product, setProduct] = useState<Partial<Product>>({});
    
    const mutation = useMutation({
        mutationFn: async (newProduct: Partial<Product>) => {
            const res = await axios.post('http://localhost:5000/api/products', newProduct, {
                headers: { 'Content-Type': 'application/json' }
            });
            return res.data; 
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            reset();
            setProduct({});
        }
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setProduct(prev => ({ ...prev, image: reader.result as string }));
            };
        }
    };

    const onSubmit = (data: Product) => {
        mutation.mutate({ ...data, image: product.image });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>{t("product_data")}</h1>

                <input {...register("name", { required: true })} type="text" placeholder={t("name_of_product")} />
                {errors.name && <span className={styles.error}>{t("field_required")}</span>}

                <input {...register("description", { required: true })} type="text" placeholder={t("desc")} />
                {errors.description && <span className={styles.error}>{t("field_required")}</span>}

                <input {...register("price", { required: true, valueAsNumber: true })} type="number" placeholder={t("price")} />
                {errors.price && <span className={styles.error}>{t("field_required")}</span>}

                <div className={styles["file-input-container"]}>
                    <label className={styles["file-input-label"]}>
                        {t("choose_file")}
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </label>
                </div>

                {product.image && (
                    <div className={styles.previewContainer}>
                        <img src={product.image} alt="Preview" className={styles.previewImage} />
                    </div>
                )}

                <button className={styles.button} type="submit" disabled={mutation.isPending}>
                    {t("add_product")}
                </button>

                <img src='https://images.freeimages.com/fic/images/icons/213/south_park/300/cartman_normal_head_icon.png' className={styles.cartman} />
            </form>
        </div>
    );
};

export default AddProduct;
