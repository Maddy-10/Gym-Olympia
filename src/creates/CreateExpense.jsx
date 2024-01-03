import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';
import { createExpence } from '../api/expence';

const CreateExpense = () => {
    const { back } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [expenceDetails, setExpenceDetails] = useState({
        title: '',
        price: '',
        who: ''
    });
    const [errors, setErrors] = useState({});

    const handleInput = (key, value) => {
        setExpenceDetails({ ...expenceDetails, [key]: value });
        // Clear previous error message when the user starts typing again
        setErrors({ ...errors, [key]: '' });
    };
    const [flag, setFlag] = useState(true)
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate form fields

        setLoading(true);

        const validationErrors = validateForm(expenceDetails);
        if (!flag) {
            setErrors(validationErrors);
            setFlag(false)
        } else {
            // If validation passes, submit the form
            console.log(expenceDetails);
            await createExpence(expenceDetails);
            back();
        }
            setTimeout(() => {
                setLoading(false);
            }, 3000);
    };

    const validateForm = (data) => {
        let errors = {};

        if (!data.title.trim()) {
            errors.title = 'Title is required';
            setFlag(true)
        }

        if (!data.price) {
            errors.price = 'Price is Required';
            setFlag(true)
        }

        if (!data.who.trim()) {
            errors.who = 'Name of Spender os Required';
            setFlag(true)
        }
        return errors;
    };

    return (
        <>
            <div className='flex mt-5 '>
                <form onSubmit={handleSubmit} className="flex flex-col lg:mx-auto mt-10 border-2 bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm  border-white px-2 p-5 w-full lg:w-1/3 rounded-xl ">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <input
                                type="text"
                                className="border w-full text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1 text-sm rounded-md placeholder:text-lg placeholder:my-auto"
                                placeholder="Title"
                                onChange={(e) => handleInput('title', e.target.value)}
                            />
                            {errors.title && <p className="text-white text-sm">{errors.title}</p>}
                        </div>
                        <div>
                            <input
                                type="number"
                                className="w-full border text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1  text-sm rounded-md placeholder:text-lg placeholder:my-auto"
                                placeholder="Price"
                                onChange={(e) => handleInput('price', e.target.value)}
                            />
                            {errors.price && <p className="text-white text-sm">{errors.price}</p>}
                        </div>

                    </div>

                    <div>
                        <input
                            type="text"
                            className="w-full border text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1 mt-3  text-sm rounded-md placeholder:text-lg placeholder:my-auto"
                            placeholder="Who"
                            onChange={(e) => handleInput('who', e.target.value)}
                        />
                        {errors.who && <p className="text-white text-sm">{errors.who}</p>}
                    </div>

                    <div className='mt-5 flex justify-between mx-auto md:w-1/3'>
                        <button disabled={loading} type='submit' className='bg-green-400 text-white font-semibold mx-auto py-1 px-2 rounded '>
                            SUBMIT
                        </button>
                        <button onClick={back} type='button' className='bg-green-400 text-white font-semibold mx-auto py-1 px-2 rounded '>
                            BACK
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateExpense