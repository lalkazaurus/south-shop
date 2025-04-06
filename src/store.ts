import { create } from "zustand";
import { persist } from "zustand/middleware";
import Product from "./type/Product";

type ProductStore = {
    products: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (name :string) => void;
};

export const useProductStore = create(
    persist<ProductStore>(
        (set) => ({
            products: [],
            addProduct: (product) =>
                set((state) => ({
                    products: [...state.products, product], 
                })),
            deleteProduct: (name) => 
                set((state) => ({
                    products: state.products.filter(product => product.name !== name)
                }))
        }),
        {
            name: "cart-storage",
        }
    )
);
