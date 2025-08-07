import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Configuración base de axios (opcional, pero útil para evitar repetir la URL)
    const api = axios.create({
        baseURL: "http://localhost:3000/api",
    });

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

    // Opcional: Cargar el carrito al iniciar
    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart, fetchCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}