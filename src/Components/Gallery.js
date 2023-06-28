import React from 'react';
import Pasta from '../Components/img/pasta.jpg';
import Bread from '../Components/img/bread.jpg';
import Cafe from '../Components/img/cafe.jpg';
import CC from '../Components/img/cheesec.jpg';
import Coffee from '../Components/img/coffee.jpg';

const Gallery = () => {
  return (
    <div className='font-serif'>
      <h1 className=' font-bold text-2xl md:text-3xl underline'>GALLERY</h1>
    <div className=' mt-10 max-w-[1360px] mx-auto lg:grid grid-cols-3 grid-rows-2 lg:w-[70%] md:w-[60%] sm:w-[70%] items-center'>
      <div className=' col-span-1 p-6'>
        <img className=' inline' src={CC} alt=''/>
      </div>
      <div className=' row-span-2 p-6'>
        <img className=' inline' src={Cafe} alt=''/>
      </div>
      <div className=' col-span-1 p-6'>
        <img className=' inline' src={Coffee} alt=''/>
      </div>
      <div className=' col-span-1 p-6'>
        <img className=' inline' src={Pasta} alt=''/>
      </div>
      <div className=' col-span-1 p-6'>
        <img className=' inline' src={Bread} alt=''/>
      </div>
    </div>
    <button className=' text-l md:text-xl text-white m-4 p-2 rounded-lg bg-[#222]'>MORE</button>
    </div>
  )
}

export default Gallery