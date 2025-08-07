# 🛒 Prueba Técnica - Carrito de Compras con API y React

## 🌟 Características principales
- **Backend API**: Gestión de productos y carrito con Next.js
- **Frontend React**: Interfaz intuitiva para agregar productos
- **Algoritmo inteligente**: Calcula la mejor combinación de productos según presupuesto
- **Persistencia**: Carrito mantenido en memoria durante la sesión

## 🛠 Tecnologías usadas

| Área        | Tecnologías                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **Backend** | Next.js 14, API Routes, CORS middleware                                    |
| **Frontend**| React 18, Vite, Axios, Context API                                        |
| **Estilos** | CSS Modules, Diseño responsive                                            |
| **Lógica**  | Algoritmo combinatorio (Problema de la mochila)                           |

## 🚀 Cómo ejecutar el proyecto

### 📥 **Clonar el repositorio**
    
    # Clona el proyecto (2 opciones)

    # 1. Usando HTTPS (recomendado para mayoría de usuarios)
    git clone https://github.com/tu-usuario/shopping-cart-project.git

    # 2. Usando SSH (necesitas configuración previa de claves)
    git clone git@github.com:tu-usuario/shopping-cart-project.git

    # Entra al directorio del proyecto
    cd shopping-cart-project

    

# 🔧 Configuración inicial

    # Instala las dependencias para ambas partes (desde la raíz del proyecto)
    npm run setup

# 🖥️ Ejecución

## 🔵 Backend (Next.js API)

    cd backend
    npm install  # Solo en la primera ejecución
    npm run dev

    📌 La API estará disponible en: http://localhost:3000/api

 ## 🟢 Frontend (React)
    cd frontend
    npm install  # Solo en la primera ejecución
    npm run dev

    📌 La aplicación estará disponible en: http://localhost:5173

# 📂 Estructura del proyecto

    shopping-cart-project/
    ├── backend/               # Next.js API
    │   ├── pages/
    │   │   └── api/          # Endpoints: /products, /cart
    │   └── package.json
    └── frontend/             # Aplicación React
        ├── src/
        │   ├── components/   # ProductList, Cart, BestCombination
        │   ├── context/      # CartContext
        │   └── App.jsx
        └── vite.config.js
    
# 🌐 Endpoints API

    Método	    Endpoint	        Descripción
    GET	       /api/products	 Devuelve lista de productos
    GET	       /api/cart	     Obtiene el carrito actual
    POST	   /api/cart	     Agrega producto al carrito


# 💡 Algoritmo especial

    La función findBestCombination() resuelve el problema de:

    Entrada: Lista de productos + presupuesto máximo

    Salida: Combinación óptima de productos que maximiza el valor sin exceder el presupuesto

    Ejemplo con presupuesto=150:

    [
        {"id": 1, "name": "Producto 1", "price": 60},
        {"id": 4, "name": "Producto 4", "price": 70}
    ]

    💰 Total: $130 (más alto posible ≤ $150)

#📝 Licencia
    MIT License © 2025 Anabel Amad  

