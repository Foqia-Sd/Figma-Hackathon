import React from 'react'
import Image from 'next/image';

const PopularProducts = () => {
  return (
<div className="p-4 lg:mt-20">
      <div>
        <h2 className="text-[#2A254B] text-2xl font-bold mb-6 lg:ml-44">Our popular products</h2>
      </div>

      <div className="flex items-center justify-center">
        <div className='flex gap-6 lg:flex-row '>
        {/* Image 1 */}
        <div className='w-[400px]'>
          <Image src={"/images/popular1.svg"} alt='Popular Product 1' width={900} height={1000} className='hover:scale-105 duration-300' />
          <h3 className='mt-2'>The Poplar suede sofa</h3>
          <p className='mt-2'>$980</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={"/images/popular2.png"} alt='Popular Product 2' width={190} height={200} className='hover:scale-105 duration-300' />
          <h3 className='mt-2'>The Dandy chair</h3>
          <p className='mt-2'>$250</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Image src={"/images/popular3.png"} alt='Popular Product 3' width={190} height={200} className='hover:scale-105 duration-300' />
          <h3 className='mt-2'>The Silky Vase</h3>
          <p className='mt-2'>$250</p>
        </div>
        </div>
        
             
      </div>

      <div className='flex items-center justify-center mt-10'>
      <button className="bg-[#F9F9F9] text-[#2A254B] mt-10 py-2 w-40  hover:bg-gray-200 transition hidden md:block">
          View collection
    </button>
    </div>

    </div>
  )
}

export default PopularProducts