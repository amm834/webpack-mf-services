const API_URL = 'http://localhost:8080'

const getAllProducts = () => fetch(`${API_URL}/products`).then(res => res.json())

const getProductById = (id) => fetch(`${API_URL}/products/${id}`).then(res => res.json())


export {
    API_URL,
    getProductById,
    getAllProducts,
}