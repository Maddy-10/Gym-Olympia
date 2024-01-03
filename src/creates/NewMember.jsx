import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';
import { createMember } from '../api/member';

const NewMember = () => {
    const { back } = useContext(Context);
    const [memberDetails, setMemberDetails] = useState({
        memberId: '',
        gender: '',
        name: '',
        phone: '',
        DOB: '',
        City: '',
        Mail_ID: '',
        requirement: '',
        Address: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);


    const handleInput = (key, value) => {
        setMemberDetails({ ...memberDetails, [key]: value });
        // Clear previous error message when the user starts typing again
        setErrors({ ...errors, [key]: '' });
    };
    const [flag, setFlag] = useState(true)
    const handleSubmit = async (e) => {
        e.preventDefault();        
    setLoading(true);            
        // Validate form fields
        const validationErrors = validateForm(memberDetails);
        if (!flag) {
            setErrors(validationErrors);
            setFlag(false)
        } else {
            // If validation passes, submit the form
            console.log(memberDetails);
            await createMember(memberDetails);
            back();
        }
            setTimeout(() => {
                setLoading(false);
            }, 3000);
    };

    const validateForm = (data) => {
        let errors = {};

        if (!data.memberId.trim()) {
            errors.memberId = 'Member ID is required';
            setFlag(true)
        }

        if (!data.gender) {
            errors.gender = 'Please select a gender';
            setFlag(true)
        }

        if (!data.name.trim()) {
            errors.name = 'Full Name is required';
            setFlag(true)
        }

        if (!data.phone.trim()) {
            errors.phone = 'Phone number is required';
            setFlag(true)
        } else if (!/^\d+$/.test(data.phone)) {
            errors.phone = 'Please enter a valid phone number';
            setFlag(true)
        }

        if (!data.DOB) {
            errors.DOB = 'Date of Birth is required';
            setFlag(true)
        }

        if (!data.City.trim()) {
            errors.City = 'City is required';
            setFlag(true)
        }

        if (!data.Mail_ID.trim()) {
            errors.Mail_ID = 'Mail ID is required';
            setFlag(true)
        } else if (!/\S+@\S+\.\S+/.test(data.Mail_ID)) {
            errors.Mail_ID = 'Please enter a valid email address';
            setFlag(true)
        }

        if (!data.requirement) {
            errors.requirement = 'Please select a requirement';
            setFlag(true)
        }

        if (!data.Address.trim()) {
            errors.Address = 'Address is required';
            setFlag(true)
        }

        return errors;
    };

    return (
        <>
            <div className='flex mt-5'>
                <form onSubmit={handleSubmit} className="flex flex-col lg:mx-auto mt-10 border-2 bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm  border-white px-2 p-5 w-full lg:w-1/2 rounded-xl ">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <input
                                type="number"
                                className="border w-full text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1 text-sm rounded-md placeholder:text-lg placeholder:my-auto"
                                placeholder="Member ID"
                                onChange={(e) => handleInput('memberId', e.target.value)}
                            />
                            {errors.memberId && <p className="text-white text-sm">{errors.memberId}</p>}
                        </div>

                        <div><select
                            className="border w-full text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1 text-sm rounded-md"
                            onChange={(e) => handleInput('gender', e.target.value)}
                        >
                            <option value="">- - Gender - -</option>
                            <option value="MALE" className='text-white bg-black'>Male</option>
                            <option value="FEMALE" className='text-white bg-black'>Female</option>
                        </select>
                            {errors.gender && <p className="text-white text-sm">{errors.gender}</p>}</div>
                    </div>
                    <div className="grid mt-3 grid-cols-2 gap-5">
                        <div>
                            <input
                                type="text"
                                className="w-full border text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1  text-sm rounded-md placeholder:text-lg placeholder:my-auto"
                                placeholder="Full Name"
                                onChange={(e) => handleInput('name', e.target.value)}
                            />
                            {errors.name && <p className="text-white text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <input
                                type="number"
                                className=" w-full border text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1 text-sm  rounded-md placeholder:text-lg placeholder:my-auto"
                                placeholder="phone Number"
                                onChange={(e) => handleInput('phone', e.target.value)}
                            />
                            {errors.phone && <p className="text-white text-sm">{errors.phone}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className='flex flex-col'>
                            <div className='w-full flex justify-between px-1 mt-3 rounded-md'>
                                <label htmlFor="" className='text-white my-auto'>D.O.B <span className='font-bold'>:</span> </label>
                                <input
                                    type="date"
                                    className="border text-white bg-transparent placeholder:text-white placeholder:pl-3 w-5/6 px-2 py-1  text-sm  rounded-md placeholder:text-lg placeholder:my-auto"
                                    placeholder="DOB"
                                    onChange={(e) => handleInput('DOB', e.target.value)}
                                />
                            </div>
                            {errors.DOB && <p className="text-white text-sm">{errors.DOB}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                className="w-full border text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1 mt-3  text-sm rounded-md placeholder:text-lg placeholder:my-auto"
                                placeholder="City"
                                onChange={(e) => handleInput('City', e.target.value)}
                            />
                            {errors.City && <p className="text-white text-sm">{errors.City}</p>}
                        </div>
                        <div>
                            <input
                                type="mail"
                                className="w-full border text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1  text-sm  rounded-md placeholder:text-lg placeholder:my-auto"
                                placeholder="Mail ID"
                                onChange={(e) => handleInput('Mail_ID', e.target.value)}
                            />
                            {errors.Mail_ID && <p className="text-white text-sm">{errors.Mail_ID}</p>}
                        </div>
                        <div><select
                            label=""
                            className="w-full border text-white bg-transparent placeholder:text-white placeholder:pl-3 px-2 py-1  text-sm  rounded-md"
                            onChange={(e) => handleInput('requirement', e.target.value)}

                        >
                            <option value="null" className=''>- - Requirement - -</option>
                            <option value="monthly" className='text-white bg-black' >Monthly</option>
                            <option value="half-yearly" className='text-white bg-black' >Half-Yearly</option>
                            <option value="yearly" className='text-white bg-black' >Yearly</option>
                        </select>
                            {errors.requirement && <p className="text-white text-sm">{errors.requirement}</p>}</div>
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

export default NewMember;
