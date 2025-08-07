import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import BestCombination from "./components/BestCombination";
import { CartProvider } from "./context/CartContext";
import './styles/app.css'

export default function App() {

  return (
    <div className="container">
      <h1 className="title">Tienda Online</h1>
      <CartProvider>
        <ProductList />
        <Cart />
        <BestCombination />
      </CartProvider>
    </div>
  );
}