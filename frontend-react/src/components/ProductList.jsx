import { useCart } from "../context/CartContext";
import '../styles/productList.css'

export default function ProductList() {
    const { products, loading, addToCart } = useCart();

    if (loading) return <div className="spinner">
        <div className="loader"></div>
    </div>;
    

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