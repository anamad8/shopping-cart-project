let cart = [];

export default function handler(req, res) {
    // Configuración CORS
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'GET') {
        res.status(200).json(cart);
    } else if (req.method === 'POST') {
        const product = req.body;
        cart.push(product);
        res.status(200).json({ message: "Producto agregado", cart });
    } else {
        res.status(405).json({ message: "Método no permitido" });
    }
}