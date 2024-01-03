import React, { useContext, useEffect, useState } from 'react'
import { CiSquarePlus } from 'react-icons/ci';
import { Context } from '../context/Context';
import { createSales } from '../api/sales';
import { fetchProductsForOptions } from '../api/product';
// import { useNavigate } from 'react-router-dom';

const CreateSales = () => {
    const { back } = useContext(Context)
    const [products, setProducts] = useState([]);
    //Adding Another Sales Details
    const [addSales, setAddSales] = useState(1);

    //Array to Store The Sold Products Details
    const [productDetails, setProductDetails] = useState([]);

    //Store The Seller Name
    const [sellerName, setSellerName] = useState('');

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false);
    


    const handleseller = (e) => {
        setSellerName(e.target.value);
    };

    const handleInput = (index, key, value) => {
        const details = [...productDetails];
        if (!details[index]) {
            //Array Of Product Detail
            details.push({});
        }
        details[index][key] = value;
        console.log(details[index]);
        setProductDetails(details);

    };

    const add = () => {
        setAddSales(addSales + 1);
        // setProductDetails([
        //     ...productDetails,
        //     {
        //         productName: '',
        //         quantity: 0,
        //         price: 0,
        //     },
        // ]);
    };

    //Halndles Submit Event
    const handleSubmit = async (e) => {
        e.preventDefault();

    setLoading(true);
           
        try {
            const res = await createSales({ products: productDetails, seller: sellerName }, products)
            console.log(res);
        }
        catch (err) {
            console.log(err);
            setError(err)
        }
        finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    };

    //FETCH PRODUCTS NAME & ID
    useEffect(() => {
        async function api() {
            const products = await fetchProductsForOptions();
            setProducts(products)

        } api();
    }, [])

    return (
        <>
            <div className='flex mt-5'>

                <form onSubmit={handleSubmit} className='w-full mx-1  md:w-3/4 lg:w-1/2 md:mx-auto bg-white bg-opacity-20 text-white backdrop-filter backdrop-blur-sm rounded-lg border border-white p-1 md:p-5'>

                    <div>
                        {/*This handles Multiple Purchase Record */}
                        {[...Array(addSales)].map((_, index) => (
                            <div key={index} className='flex justify-between mt-2'>
                                <div className='w-1/3 p-1 md:w-1/4 flex  text-sm '>
                                    <select
                                        label='Product Name'
                                        className='h-8 border w-full my-auto rounded border-b-white text-white bg-transparent'
                                        onChange={(e) => handleInput(index, 'productName', e.target.value)}
                                    >
                                        <option className='text-white bg-black' value='null'>Select Product</option>
                                        {
                                            products.map(product => {
                                                return (
                                                    <option key={product.productId} className='text-white bg-black' value={product.productId}>{product.name}</option>
                                                )
                                            })
                                        }
                                    </select>

                                </div>
                                <div className='w-1/3 p-1 md:w-1/4 flex'>
                                    <input
                                        type="number"
                                        className='h-8 text-white bg-transparent placeholder:text-white placeholder:pl-3 border w-full my-auto rounded border-white'
                                        placeholder='Quantity'
                                        onChange={(e) => handleInput(index, 'quantity', e.target.value)}
                                    />
                                </div>
                                <div className='w-1/3 p-1 md:w-1/4 flex'>
                                    <input
                                        type="number"
                                        className='h-8 text-white bg-transparent placeholder:text-white placeholder:pl-3 border w-full my-auto rounded border-white'
                                        placeholder='Price'
                                        onChange={(e) => handleInput(index, 'price', e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='mt-5'>
                        <button onClick={add} type='button' className='flex hover:text-green-400'>
                            <CiSquarePlus size={40} />
                            <h1 className='my-auto text-2xl'>ADD</h1>
                        </button>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <input
                            type="text"
                            className={error ? 'h-8 mx-auto border placeholder:text-white bg-transparent w-3/4 md:w-1/2 my-auto rounded border-red-400' : 'h-8 mx-auto border border-white text-white bg-transparent w-3/4 md:w-1/2 my-auto rounded placeholder:text-white'}
                            placeholder=' Name Of Buyer'
                            value={sellerName}
                            onChange={handleseller}
                        />
                        {error && <p className='text-sm mx-auto text-white'>* {error} !</p>}
                    </div>
                    <div className='mt-5 flex justify-between mx-auto md:w-1/3'>
                        <button disabled={loading} type='submit' className='bg-white bg-opacity-10 hover:bg-opacity-50 hover:text-black backdrop-filter backdrop-blur-sm border-white text-white font-semibold mx-auto py-1 px-2 rounded '>
                            SUBMIT
                        </button>
                        <button onClick={back} type='button' className='bg-white bg-opacity-10 hover:bg-opacity-50 hover:text-black text-white backdrop-filter backdrop-blur-sm border-white font-semibold mx-auto py-1 px-2 rounded '>
                            BACK
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateSales