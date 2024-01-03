import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsBuildingAdd } from "react-icons/bs";
import { fetchBranches, loginBranch } from '../api/branch';
import { RiAdminLine } from "react-icons/ri";



const AdminPanel = () => {

    const navigate = useNavigate()
    const admin = true;
    const [newbranch, setNewbranch] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('')
    const addbranch = () => {
        setNewbranch(true);
    }

    const handleSubmit = async (branchId, password) => {
        setLoading(true);
        try {
            await loginBranch({ branchId, password });
            navigate('/index');
        } catch (err) {
            setError(err.response.data.message);
            console.log(err);
            alert(error);
            setLoading(false)
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000); // Set loading to false after 3 seconds
        }
    };
    
    const [branch, setBranch] = useState([])
    useEffect(() => {
        async function api() {
            const branches = await fetchBranches();
            setBranch(branches)
        }
        api();
    }, []);
    return (
        <div >
            <div className='flex flex-col  h-screen'>
                <div className='text-white flex justify-between w-full'>
                    <p className='flex border px-2 text-xl my-5 bg-white bg-opacity-10 hover:bg-opacity-80 hover:text-black text-white backdrop-filter backdrop-blur-lg border-white rounded mx-20 font-semibold'><RiAdminLine size={25} className='mr-2' /> ADMIN NAME</p>
                    <button onClick={() => navigate('/')} className='border px-2 text-xl my-5 bg-white bg-opacity-10 hover:bg-opacity-80 hover:text-black text-white backdrop-filter backdrop-blur-lg border-white rounded mx-20 font-semibold'>LOG OUT</button>
                </div>
                <div className={newbranch ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20 xl:my-32 mx-auto w-3/4  gap-5' : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20 xl:my-32 w-3/4 mx-auto gap-5'}>

                    {branch.map((branch) => (
                        <form key={branch.branchId} className='border w-3/4 h-[300px] mx-auto bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm border-white flex flex-col rounded-lg p-2'>
                            <h1 className='mx-auto text-center text-xl lg:text-2xl py-3'>{branch.branchName}</h1>
                            <hr />
                            {/* <div className='w-3/4 flex flex-col mx-auto mt-2 py-3'>
              <label htmlFor='branchId'>Branch ID</label>
              <input
                type='text'
                className='border-b-2 my-auto px-3 mt-3 bg-transparent'
                placeholder='Enter Branch ID'
              />

            </div> */}
                            <div className='w-3/4 flex flex-col mx-auto my-auto py-3'>
                                <label htmlFor='password' className='font-semibold'>Password</label>
                                <input
                                    type='password'
                                    className='border-b-2 my-auto px-3 mt-3 bg-transparent placeholder:text-white'
                                    placeholder='Enter Password'
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />


                            </div>
                            <div className='w-1/3 flex flex-col mx-auto py-3'>
                                <button disabled={loading} onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit(branch.branchId, password)
                                }} type='submit' className={loading ? 'bg-white bg-opacity-50  text-black backdrop-filter backdrop-blur-sm border-white text-lg border rounded-lg' : 'bg-white bg-opacity-10 hover:bg-opacity-50 hover:text-black text-white backdrop-filter backdrop-blur-sm border-white text-lg border rounded-lg'}>
                                    {loading ? "Loading" : "Login"}
                                </button>
                            </div>
                        </form>
                    ))}
                    {admin && <button onClick={addbranch} className='border w-3/4 h-[300px] mx-auto bg-white bg-opacity-10 hover:bg-opacity-50 hover:text-black text-white backdrop-filter backdrop-blur-sm border-white flex flex-col rounded-lg p-2'>
                        <div className='mx-auto my-auto text-center'>
                            <BsBuildingAdd size={100} className='mx-auto' />
                            <p className='mx-auto font-semibold mt-5'>ADD NEW BRANCH</p>
                        </div>
                    </button>}
                    {newbranch && <form className='border w-3/4 h-full mx-auto bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm border-white flex flex-col rounded-lg p-2'>
                        <div className='w-3/4 flex flex-col mx-auto'>
                            <label htmlFor='branch_details' className='mx-auto text-xl'>New Branch Details</label>
                            <input
                                type='text'
                                className='border-b-2 px-3 mt-3 bg-transparent placeholder:text-white'
                                placeholder='Branch Name'
                            />

                        </div>
                        <div className='w-3/4 flex flex-col mx-auto py-3'>
                            <input
                                type='text'
                                className='border-b-2 my-auto px-3 mt-3 bg-transparent placeholder:text-white'
                                placeholder='Branch ID'
                            />
                        </div>
                        <div className='w-3/4 flex flex-col mx-auto py-3'>
                            <input
                                type='text'
                                className='border-b-2 my-auto px-3 mt-3 bg-transparent placeholder:text-white'
                                placeholder='Branch Password'
                            />
                        </div>
                        <div className='w-3/4 flex flex-col mx-auto py-3'>
                            <input
                                type='text'
                                className='border-b-2 my-auto px-3 mt-3 bg-transparent placeholder:text-white'
                                placeholder='Branch Address'
                            />
                        </div>
                        <div className='w-1/3 flex flex-col mx-auto py-3'>
                            <button disabled={loading} type='submit' className='bg-white bg-opacity-10 hover:bg-opacity-50 hover:text-black text-white backdrop-filter backdrop-blur-sm border-white text-lg border rounded-lg'>
                                {loading ? "..." : "Submit"}
                            </button>
                        </div>
                    </form>}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
