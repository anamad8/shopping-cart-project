import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import '../styles/cart.css'

export default function Cart() {
    const { cart, fetchCart } = useCart();

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div className="container-cart">
            <h2>Carrito de compras</h2>
            <div className="cart-content">
                <ul className="cart-items">
                    {cart.map((product) => (
                        <li key={product.id} className="cart-item">
                            <span className="product-name">{product.name}</span>
                            <span className="product-price">${product.price}</span>
                        </li>
                    ))}
                </ul>
                <div className="cart-total">
                    <p>Total: ${cart.reduce((sum, p) => sum + p.price, 0)}</p>
                </div>
            </div>
        </div>
    );
}
