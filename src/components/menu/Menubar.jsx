import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Menubar = () => {
  const navigate = useNavigate();
  return (
    <div className='h-[60px] bg-red-300 flex px-5 justify-between'>
      <Link to='/index' className='text-white font-semibold text-2xl my-auto'>GYM</Link>
      <ul className='flex my-auto'>
        <li className='px-2 text-white font-semibold text-lg'><Link to='/sales'>Sales</Link></li>
        <li className='px-2 text-white font-semibold text-lg'><Link to='/purchase'>Purchase</Link></li>
        <li className='px-2 text-white font-semibold text-lg'><Link to='/member'>Members</Link></li>
        <li className='px-2 text-white font-semibold text-lg'><Link to='/expenses'>Expenses</Link></li>
        <li className='px-2 text-white font-semibold text-lg'><Link to='/productlist'>Products</Link></li>
        {/* <li className='px-2 text-white font-semibold text-lg'><Link to='/Trainer'>Trainers</Link></li> */}
        <li className='px-2 text-white bg-green-400 rounded font-semibold text-lg'><button onClick={()=>navigate('/sendreport')} type='button'>Send Report</button></li>
      </ul>
    </div>
  )
}

export default Menubar