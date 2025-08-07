// Lista estática de productos
const products = [
    { id: 1, name: "Producto 1", price: 60 },
    { id: 2, name: "Producto 2", price: 100 },
    { id: 3, name: "Producto 3", price: 120 },
    { id: 4, name: "Producto 4", price: 70 },
    { id: 5, name: "Producto 5", price: 200 }
];

export default function handler(req, res) {
    // Configuración CORS
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Permite solo tu frontend
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Cabeceras permitidas

    if (req.method === 'OPTIONS') {
        return res.status(200).end(); // Respuesta preflight para CORS
    }

    res.status(200).json(products);
}