import React from 'react';
import Vegan from '../Components/img/vegan.jpg';
import Lemon from '../Components/img/lemon.jpg';
import Stormy from '../Components/img/stormy.jpg';

const Bseller = () => {
  return (
    <div className=' bg-[#fff2df] font-serif'>
      <h1 className=' font-bold text-2xl md:text-3xl lg:text-4xl pt-5 md:pt-20 underline'> MOST ORDERED</h1>
        <div className='max-w-[1360px] mx-auto lg:grid grid-cols-3 m-16 justify-center text-center lg:w-[70%] md:w-[60%] sm:w-[70%]'>
            <div className=' col-span-1 p-6'>
                <img className=' inline' src={Vegan} alt=''/>
                <h1 className=' font-bold text-lg md:text-2xl m-5'>BEYOND FLEX (V)</h1>
                <p className=' font-semibold text-sm md:text-l m-5 text-justify'>Now fully vegan! This mouth-watering sandwich is made using Beyond
               breakfast sausage, vegan egg, caramelized onion jam, vegan
               pepper jack cheese and chipotle sauce on 
               rosemary focaccia bread.</p>
            </div>
            <div className=' col-span-1 p-6'>
            <img className=' inline' src={Stormy} alt=''/>
            <h1 className=' font-bold text-lg md:text-2xl m-5'>DARK AND STORMY</h1>
            <p className=' font-semibold text-sm md:text-l m-5 text-justify'>Our housemade cold brew infused with a sweet and
              spicy ginger-date syrup and finished with creamy 
              oat milk.</p>
            </div>
            <div className=' col-span-1 p-6'>
            <img className='inline' src={Lemon} alt=''/>
            <h1 className=' font-bold text-lg md:text-2xl m-5'>MATCHA LEMONADE</h1>
            <p className=' font-semibold text-sm md:text-l m-5 text-justify'>A new twist on matcha! We pair our ceremonial-grade 
            matcha with organic fresh lemonade for a refresher like no 
            other - get your detox on!</p>
            </div>
        </div>
    </div>
  )
}

export default Bseller