import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/bestCombination.css';

function findBestCombination(products, budget) {
    let bestCombination = [];
    let maxTotal = 0;

    for (let i = 0; i < Math.pow(2, products.length); i++) {
        let currentCombination = [];
        let currentTotal = 0;

        for (let j = 0; j < products.length; j++) {
            if (i & (1 << j)) {
                currentCombination.push(products[j]);
                currentTotal += products[j].price;
            }
        }

        if (currentTotal <= budget && currentTotal > maxTotal) {
            maxTotal = currentTotal;
            bestCombination = currentCombination;
        }
    }

    return bestCombination;
}

export default function BestCombination() {
    const [budget, setBudget] = useState(150);
    const [products, setProducts] = useState([]);

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

    const bestCombo = findBestCombination(products, budget);

    return (
        <div className="container-bestCombination"> 
            <h2>Mejor combinación para presupuesto: ${budget}</h2>

            <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
            />
            <span className="bestCombination-span"> 
                *Coloca un presupuesto
            </span>
            
            <div className="bestCombination-content"> 
                <ul className="bestCombination-items"> 
                    {bestCombo.map((product) => (
                        <li key={product.id} className="bestCombination-item"> 
                            <span className="product-name">{product.name}</span> 
                            <span className="product-price">${product.price}</span> 
                        </li>
                    ))}
                </ul>
                <p className="bestCombination-total"> 
                    Total: ${bestCombo.reduce((sum, p) => sum + p.price, 0)}
                </p>
            </div>
        </div>
    );
}