import React from 'react'
import Menubar from './menu/Menubar'
import { FaSearch } from 'react-icons/fa'
import { Context } from '.././context/Context';
import { useContext } from 'react';
import NewMember from '../creates/NewMember';
import { MdPersonAddAlt1 } from "react-icons/md";
import MemberList from '../tables/MemberList';

const Member = () => {
  const { newmember,newMember } = useContext(Context)
  return (
    <>
      <Menubar />
            <div className='h-[100px]  flex bg-blue-500'>
                <p className='mx-auto text-white font-semibold text-5xl my-auto'>MEMBERS</p>
      </div>
      <div className='h-[60px] md:h-[50px]  flex justify-between px-1 md:px-3'>
                <div className='sm:w-1/2 lg:w-1/3 xl:w-1/4 relative flex'>
                    <input type="text" className='h-10  border w-full  my-auto rounded-l px-3 placeholder:px-3' placeholder="Search" />
                    
                        <button type='button' className='rounded-r h-10  px-3 bg-blue-300 text-white font-semibold my-auto'><FaSearch /></button>
                    
                </div>

        <button onClick={newmember} type='button'  className='border bg-green-500 px-2 h-10 my-auto rounded text-white font-semibold flex'><MdPersonAddAlt1 className='my-auto' size={20}/><span className='my-auto px-1'>New Member</span></button>

      </div>
      {newMember?<NewMember/>:<MemberList/>}
      
    </>
  )
}

export default Member