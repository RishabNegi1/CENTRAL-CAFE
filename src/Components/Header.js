import React, { useState } from 'react'
import {MdRestaurantMenu} from "react-icons/md";
import {CgCloseO} from "react-icons/cg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=' p-4 items-center h-24 max-w-[1240px] mx-auto sticky top-0 bg-white'>
        <div className=' flex justify-between'>
        <h1 className=' text-3xl font-bold text-[#8ABAD3FF] m-3'>CENTRAL <span className=' text-[#EDC2D8FF]'>CAFE</span></h1>
        {
          toggle?
          <CgCloseO onClick={()=>setToggle(!toggle)} className=' cursor-pointer text-4xl m-3 md:hidden block'/>
          :
          <MdRestaurantMenu onClick={()=>setToggle(!toggle)} className=' cursor-pointer text-4xl m-3 md:hidden block'/>
        }
        
        <ul className='hidden md:flex text-xl font-bold text-[#358597] gap-7 m-3'>
        <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>GALLERY</li>
        <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>SOCIALS</li>
        <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>CONTACT</li>
        <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>ORDER</li>
      </ul>

      <ul className={` duration-300 p-10 md:hidden text-xl fixed w-full h-screen top-[98px] font-bold text-orange-200 bg-neutral-800
       ${toggle ? 'left-[0]' : 'left-[-100%]'}
      `}>
        <li className='p-5'>GALLERY</li>
        <li className='p-5'>SOCIALS</li>
        <li className='p-5'>CONTACT</li>
        <li className='p-5'>ORDER</li>
      </ul>
        </div>
    </div>
  )
}

export default Header