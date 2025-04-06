import { create } from "zustand";
import { persist } from "zustand/middleware";
import Product from "./type/Product";

type ProductStore = {
    products: ProductInCart[];
    addProduct: (product: Product) => void;
    deleteProduct: (name :string) => void;
    decreaseAmount: (name: string) => void;
    increaseAmount: (name: string) => void;
};

interface ProductInCart extends Product {
    amount: number;
}

export const useProductStore = create(
    persist<ProductStore>(
        (set) => ({
            products: [],
            addProduct: (product) =>
                set((state) => {
                    const existingProduct = state.products.find(p => p.name === product.name);
                    console.log(existingProduct)
            
                    if (existingProduct) {
                        return {
                            products: state.products.map(p =>
                                p.name === product.name
                                    ? { ...p, amount: p.amount++ }
                                    : p
                            )
                        };
                    } else {
                        return {
                            products: [...state.products, { ...product, amount: 1 }]
                        };
                    }
                }),
            deleteProduct: (name) => 
                set((state) => ({
                    products: state.products.filter(product => product.name !== name)
                })),
            decreaseAmount: (name) => 
                set((state) => {
                    const targetedProduct = state.products.find(p => p.name === name);
                    if (targetedProduct?.amount === 1) {
                        return {
                            products: state.products
                        }
                    } else {
                        return {
                            products: state.products.map(p =>
                                p.name === name
                                    ? { ...p, amount: p.amount - 1 }
                                    : p
                            )
                        }
                    }
                }),
            increaseAmount: (name) => 
                set((state) => {
                        return {
                            products: state.products.map(p =>
                                p.name === name
                                    ? { ...p, amount: p.amount + 1 }
                                    : p
                            )
                        }
                })
        }),
        {
            name: "cart-storage",
        }
    )
);
