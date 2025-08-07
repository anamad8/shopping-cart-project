import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import '../styles/productList.css'

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container-productList">
            <h2>Productos</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="cart-btn"
                                >
                                    Agregar al carrito
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
