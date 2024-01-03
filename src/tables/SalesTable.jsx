import React, { useState } from 'react'
import {fetchSales} from '../api/sales'
import { useEffect } from 'react'

const SalesTable = () => {
    const [sales, setSales] = useState([])

    useEffect(() => {
        async function api() {
            const sales = await fetchSales();
            setSales(sales)
        }
        api();
    })
    return (
        <div className="relative overflow-x-auto shadow-md border-2  h-[400px]  mt-5 w-3/4 mx-auto">
            <table className="w-full text-sm text-center border-r  text-gray-500 sm:rounded-lg dark:text-gray-400">
                <thead className="text-sm font-bold  uppercase border-b-2    bg-white bg-opacity-80 text-black backdrop-filter backdrop-blur-lg">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left">
                            Sales name
                        </th>

                        {/* <th scope="col" className="px-6 py-3">
                            Quantity
                        </th> */}
                        <th scope="col" className="px-6 py-3 text-left">
                            Price
                        </th>

                    </tr>
                </thead>
                <tbody>
                {sales.map((sale) => (                        
                            <tr className="bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm border-white border-b">
                                <th  scope="row" className="px-6 py-4 font-semibold  whitespace-nowrap dark:text-white text-left">
                                    {sale.seller} 
                                </th>
                                <td className="px-6 font-semibold py-4 text-left">
                                    ₹{sale.price}
                                </td>
                            </tr>
                        )
                    )}                                        
                </tbody>
            </table>
        </div>
    )
}

export default SalesTable