import axios from "axios"
export const fetchProducts = () => {
    return axios.get('/product/fetch-products')
}
export const fetchProductsForOptions = async() => {
    let res
    try{
        res =await  axios.get('/product/fetch-products?fields[]=name&fields[]=productId')
        console.log(res);
    }catch(err){
        console.log(err);
    }
    return res.data.data
}