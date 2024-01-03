import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsBuildingAdd } from "react-icons/bs";
import { fetchBranches, loginBranch } from '../api/branch';


const BranchLogin = () => {

  const navigate = useNavigate()


  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('')


  const handleSubmit = async (branchId, password) => {

    try {
      setLoading(true)
      console.log(loading);
      await loginBranch({ branchId, password });
      navigate('/index')
    } catch (err) {
      setError(err.response.data.message)
      alert(error)
    }
    finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }
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
        <div className='text-white flex justify-end w-full'>
          <button onClick={() => navigate('/adminlogin')} className='border px-2 text-xl my-5 bg-white bg-opacity-10 hover:bg-opacity-80 hover:text-black text-white backdrop-filter backdrop-blur-lg border-white rounded mx-20 font-semibold'>ADMIN PANEL</button>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20 xl:my-32 mx-auto w-3/4  gap-5'}>

          {/* {branch.map((branch,index) => (
            <form key={index} className='border w-3/4 h-full mx-auto bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm border-white flex flex-col rounded-lg p-2'>
              <h1 className='mx-auto text-xl lg:text-2xl py-3'>{branch.branchName}</h1>
              <hr />
              <div className='w-3/4 flex flex-col mx-auto mt-8 py-3'>
                <label htmlFor='address'>password</label>
                <input key={branch.branchId}
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='border-b-2 my-auto px-3 mt-3 bg-transparent'
                  placeholder='Enter Password'
                />

              </div>
              {error && <div>
                <p>{error}</p>
              </div>}
              <div className='w-1/3 flex flex-col mt-10 mx-auto py-3'>
                <button onClick={(e) => {
                  e.preventDefault()
                  handleSubmit(branch.branchId, password)
                }} type='submit' className='bg-white bg-opacity-10 hover:bg-opacity-50 hover:text-black text-white backdrop-filter backdrop-blur-sm border-white text-lg border rounded-lg'>
                  Enter
                </button>
              </div>
            </form>
          ))
          } */}
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
                }} type='submit' className='bg-white bg-opacity-10 hover:bg-opacity-50 hover:text-black text-white backdrop-filter backdrop-blur-sm border-white text-lg border rounded-lg'>
                  {loading ? "Loading" : "Login"}
                </button>
              </div>
            </form>
          ))}
          <button disabled className='border w-3/4 h-[300px] mx-auto bg-white bg-opacity-10   text-white backdrop-filter backdrop-blur-sm border-white flex flex-col rounded-lg p-2'>
            <div className='mx-auto my-auto text-center'>
              <BsBuildingAdd size={100} className='mx-auto' />
              <p className='mx-auto font-semibold mt-5'>NEW BRANCH</p>
              <p className='mx-auto font-semibold'>WILL APPEAR HERE</p>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default BranchLogin;
