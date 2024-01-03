import { useEffect, useState } from 'react'
import { fetchPurchases } from '../api/purchase';

const PurchaseTable = () => {
    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        async function api() {
            const purchases = await fetchPurchases();
            setPurchases(purchases)
        }
        api();
    })

    return (
        <div className="relative overflow-x-auto shadow-md border-2  h-[400px]  mt-5 w-3/4 mx-auto">
            <table className="w-full text-sm text-center border-r  text-gray-500 sm:rounded-lg dark:text-gray-400">
                <thead className="text-sm font-bold  uppercase border-b-2    bg-white bg-opacity-80 text-black backdrop-filter backdrop-blur-lg">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left">
                            Purchase name
                        </th>

                        <th scope="col" className="px-6 py-3 text-left">
                            Buyer
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                            Price
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase) => (
                       
                            <tr  className="bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm border-white border-b">
                                <th  scope="row" className="px-6 py-4 font-semibold  whitespace-nowrap dark:text-white text-left">
                                    
                                        {purchase.products}
                                
                                </th>
                                <td className="px-6 font-semibold py-4 text-left">
                                    {purchase.buyer}
                                </td>
                                <td className="px-6 font-semibold py-4 text-left">
                                    ₹{purchase.price}
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PurchaseTable