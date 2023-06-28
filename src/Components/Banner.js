import React from 'react';
import ReactTyped from 'react-typed';

const Banner = () => {
  return (
    <div className=' p-6 md:p-10 img'>
    <div className=' m-60 font-serif max-w-[1240px] mx-auto text-center'>
        <h1 className=' font-bold text-2xl md:text-4xl text-slate-300'>Welcome To </h1>
        <h1 className=' font-bold text-gray-300 text-5xl md:text-7xl m-6'>Central
        <ReactTyped 
        className=' pl-4'
         strings={['Cafe']}
         typeSpeed={200}
         backSpeed={150}
         loop={true}
        />
        </h1>
        <p className=' text-lg md:text-2xl lg:text-3xl m-8 text-zinc-300 '>Central Cafe proudly serves delicious food to the greater Dehradun community.</p>
    </div>
    </div>
  )
}

export default Banner