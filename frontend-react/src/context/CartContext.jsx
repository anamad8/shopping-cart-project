import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    const api = axios.create({
        baseURL: "http://localhost:3000/api",
    });

    // Función para obtener productos
    const fetchProducts = async () => {
        try {
            const response = await api.get("/products");
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false);
        }
    };

    const fetchCart = async () => {
        try {
            const response = await api.get("/cart");
            setCart(response.data);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    const addToCart = async (product) => {
        try {
            await api.post("/cart", product);
            await fetchCart();
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    // Cargar datos iniciales
    useEffect(() => {
        const loadData = async () => {
            await fetchProducts();
            await fetchCart();
        };
        loadData();
    }, []);

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                products, 
                loading,
                fetchCart, 
                addToCart 
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}