import React from 'react'

const Use = () => {
  return (
    <div className='w-full px-20 py-4'>
      <h1 className='flex justify-center h-[8%] text-[#FCDC2A] text-[4.7vw] md:text-[2vw] font-[700]'>Quick Delivery App...</h1>
      <div className='w-[100%] h-[92%] flex md:flex-row items-center md:gap-4 md:mt-14'>
        <div className='w-[50%] md:w-[50%] rounded'>
          <img className='w-[100%] h-[80%] object-cover rounded-md' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png" alt="" />
        </div>
        <div className='w-[50%] md:w-[50%] md:h-[100%] h-[50%] p-4 md:p-20'>   
          <h2 className='text-green-700 font-bold text-[3.8vw] md:text-2xl mb-4 md:mb-4'>Get The App</h2>
          <h1 className='text-1xl md:text-6xl font-[700] mb-6 md:mb-4'>The Fastest Food <br /> Delivery In India</h1>
          <button className='bg-black text-white px-2 py-1 md:px-4 md:py-2 rounded'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Use
