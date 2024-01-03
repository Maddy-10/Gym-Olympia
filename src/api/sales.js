import axios from "axios"

export const createSales = async (data, products) => {
    console.log(data);
    const nameAddedProducts = data.products.map((product) => {
        const { name } = products.find(p => p.productId ===parseInt(product.productId));
        return {
            ...product,
            name
        }
    })
    data.products = nameAddedProducts
    console.log(data);
    return await axios.post('/sales/create', data)
}

export const fetchSales = async()=>{
    return (await axios.get('/sale/fetch-sales')).data.data
}