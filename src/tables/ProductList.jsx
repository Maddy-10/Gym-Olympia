import React, { useEffect } from 'react';
import Menubar from '../components/menu/Menubar';
import { fetchProducts } from '../api/product';
import { useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function api() {
            const products = await fetchProducts();
            setProducts(products)
        }
        api();
    })
    return (
        <>
            <Menubar />
            <div className='h-[100px] flex'>
                <p className='mx-auto text-white font-semibold text-5xl my-auto'>PRODUCTS</p>
            </div>
            <div className="relative overflow-x-auto h-[412px]  w-3/4 mx-auto mt-10 border-b border-l rounded-t-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs rounded-t-lg uppercase bg-white bg-opacity-80 text-black backdrop-filter backdrop-blur-lg  dark:text-gray-400">
                        <tr className='border-b border-white'>
                            <th scope="col" className="px-6 py-3 rounded-ss-lg">
                                Product ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>

                            <th scope="col" className="px-6 py-3 rounded-es-lg">
                                Price
                            </th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {products.map((product) => (
                            <tr key={product.productId} className="bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm border-white border-t border-b" >
                                <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap dark:text-white">
                                    {product.productId}
                                </th>
                                <td className="px-6 font-semibold py-4">
                                    {product.name}
                                </td>
                                <td className="px-6 font-semibold py-4">
                                    {product.price}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
            
        </>
    )
}

export default ProductList