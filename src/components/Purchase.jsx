import React, { useContext } from 'react';
import Menubar from './menu/Menubar';
import { FaSearch } from "react-icons/fa";
import CreatePurchase from '../creates/CreatePurchase'
import { Context } from '../context/Context';
import PurchaseTable from '../tables/PurchaseTable';
import { FaPenToSquare } from 'react-icons/fa6';
// import { useState } from 'react';

const Purchase = () => {
    // //Adding Another Purchase Details
    // const [addSales, setAddSales] = useState(1);
    // //Array to Store The Purchased Products Details
    // const [productDetails, setProductDetails] = useState([]);
    // //Store The Buyer Name
    // const [buyerName, setBuyerName] = useState('');
    const { createP, createpurchase } = useContext(Context);

    // const handleBuyerNameChange = (e) => {
    //     setBuyerName(e.target.value);
    // };

    // const handleInputChange = (index, key, value) => {
    //     const updatedProductDetails = [...productDetails];
    //     if (!updatedProductDetails[index]) {
    //         //Array Of Product Detail
    //         updatedProductDetails[index] = {};
    //     }
    //     updatedProductDetails[index][key] = value;
    //     setProductDetails(updatedProductDetails);
    // };

    // const add = () => {
    //     setAddSales(addSales + 1);
    //     setProductDetails([
    //         ...productDetails,
    //         {
    //             productName: '',
    //             quantity: 0,
    //             price: 0,
    //         },
    //     ]);
    // };
    // //Halndles Submit Event
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     //Storing Input Values In A JSON Format "Key"=>"Value"
    //     const productsJSON = JSON.parse(productDetails);
    //     console.log(productsJSON);
    //     //Product Array

    //     console.log(buyerName);
    //     //Buyer Name
    // };


    return (
        <>
            <Menubar />
            <div className='h-[100px] flex bg-blue-500'>
                <p className='mx-auto text-white font-semibold text-5xl my-auto'>PURCHASE</p>
            </div>
            <div className='h-[60px] md:h-[50px]  flex justify-between px-1 md:px-3'>
                <div className='sm:w-1/2 lg:w-1/3 xl:w-1/4 relative flex'>
                    <input type="text" className='h-10 border w-full  my-auto rounded-l px-3 placeholder:px-3' placeholder="Search" />

                    <button type='button' className='rounded-r h-10 px-3 bg-blue-300 text-white font-semibold my-auto'><FaSearch /></button>

                </div>

                <button type='button' onClick={createP} className='border bg-green-500 px-2 h-10 my-auto rounded text-white font-semibold flex'><FaPenToSquare className='my-auto' size={20} /><span className='my-auto pl-2'>Create Purchase</span></button>

            </div>

            {createpurchase ? <CreatePurchase /> : <PurchaseTable />}
        </>
    );
};
    export default Purchase
