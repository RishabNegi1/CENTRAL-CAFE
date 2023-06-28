import React from 'react'

const Reviews = () => {
  return (
    <div className=' mt-20 font-serif bg-[#f0f0f0]'>
        <div class=" max-w-[1200px] mx-auto flex items-center py-2 md:m-26">
        <div class="flex-grow h-1 bg-red-700"></div> 
        <span class="flex-shrink font-bold text-2xl md:text-3xl text-red-700 p-3">REVIEWS</span>
        <div class="flex-grow h-1 bg-red-700"></div>
        </div>

        <div className=' text-left max-w-[1360px] mx-auto lg:grid grid-rows-3 lg:w-[70%] md:w-[70%] sm:w-[80%]'>
        <div className=' row-span-1 p-6'>
        <h1 className=' font-bold text-base sm:text-lg md:text-2xl mt-10'>Rishab Negi</h1>
        <p className=' font-medium text-sm sm:text-base md:text-xl mt-10'>"Amazing place to
            spend time. Excellent interiors, superb ambience,
			super helpful and humble staff. The food was also extremely
			 delicious. Bit pricey though but worth a visit."</p>
        </div> 

        <div className=' row-span-1 p-6'>
        <h1 className=' font-bold text-base sm:text-lg md:text-2xl mt-6'>Rudra Saxena</h1>
        <p className=' font-normal text-sm sm:text-base md:text-xl mt-5'>"This is another 
           cafe in doon which really satisfies 
			your soul as soon as you enter. Ambience is serene, 
			scrumptious food, clean washroom. We tried English breakfast
			 there and it was mouth watering! Coffee was also good. We tried 
			 waffle too and everything was super! Another thing that caught my 
			 attention was that they immediately changed the table cloth as 
			 soon as the customer had left the restaurant. Amazing experience
			  in this cafe.."</p>
        </div>
        <div className=' row-span-1 p-6'>    
        <h1 className=' font-bold text-base sm:text-lg md:text-2xl mt-10'>Rishika Kesharwani</h1>
        <p className=' font-medium text-sm sm:text-base md:text-xl mt-5 '>"A classy cafe 
            with great food and music on rajpur road. The outside 
	        seating area is also good. They even have an attic that can accomodate 
     	    a group of friends. The staff is friendly and courteous. The 
	        food is delicious and moderately priced. Ambiance of the cafe
	        is very good."</p>
        </div>
        </div>
        <button className='text-l md:text-xl text-white m-5 p-2 rounded-lg bg-[#222]'>READ MORE</button>
    </div>
  )
}

export default Reviews