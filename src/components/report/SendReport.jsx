import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

const SendReport = () => {
  const navigate = useNavigate()
  const data = [
    { title: 'Sales', amount: 500 },
    { title: 'New Joinee', amount: 300 },
    { title: 'Purchase', amount: 700 },
    { title: 'Expenses', amount: 200 },
  ];

  // Calculate total amount
  const totalAmount = data.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <>
      <div className='h-[60px] bg-red-300 flex px-5 justify-between'>
        <Link to='/index' className='text-white font-semibold text-2xl my-auto'>GYM</Link>
        <button onClick={() => navigate('/index')} className='flex text-lg my-auto ml-2 text-white font-bold'>
          <MdOutlineArrowBack className='mx-1 my-auto' size={20} />
          Back
        </button>
      </div>
      <div className='h-[100px] flex bg-blue-500'>
                <p className='mx-auto text-white font-semibold text-5xl my-auto'>SEND REPORT</p>
            </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-2'>
        <div className="container mx-auto rounded-xl mt-8">
          <p className='text-white font-bold text-xl text-center bg-green-400'>DETAILS</p>
          <table className="min-w-full roxl bg-white ">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">₹ {item.amount}</td>
                </tr>
              ))}
              <tr className="font-semibold">
                <td className="border px-4 py-2">Total</td>
                <td className="border px-4 py-2">₹ {totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container mx-auto mt-8">
        <p className='text-white font-bold text-xl text-center bg-green-400'>EXPIRES</p>
          <table className="min-w-full bg-white ">
            <thead>
              <tr className="">
                <th className="px-4 py-2">Member ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Expires IN</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">3 days</td>
              </tr>
              <tr className="">
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Jane Smith</td>
                <td className="border px-4 py-2">5 days</td>
              </tr>
              <tr className="">
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Alex Johnson</td>
                <td className="border px-4 py-2">1 day</td>
              </tr>
              <tr className="">
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">Emily Brown</td>
                <td className="border px-4 py-2">7 days</td>
              </tr>
              <tr className="">
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">Peter</td>
                <td className="border px-4 py-2">10 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex mt-8 w-3/4 md:w-1/2 mx-auto'>
        <div className='flex w-full justify-center'>
        <input type="mail" className='px-3 bg-white rounded-l w-3/4' placeholder='Enter E-Mail' />
        <button className='bg-green-400 text-white p-2 rounded-r font-semibold'>Send</button>
        </div>
      </div>
    </>
  )
}

export default SendReport