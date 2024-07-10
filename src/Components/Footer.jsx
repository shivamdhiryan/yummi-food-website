import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#444A5A] text-white grid grid-cols-2 md:grid-cols-4 justify-around mt-8 pl-20 py-10'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-semibold text-2xl font-mono'>Yumi<span className='text-[#FCDC2A]'>Food</span></h1>
        <p>© 2023 Bundl Technologies Pvt. Ltd</p>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='font-semibold text-[3vw] md:text-2xl'>Company</h1>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>About</p>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Careers</p>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Team</p>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Yummi</p>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Yummi Instamart</p>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Yummi Genie</p>
      </div>
      <div className='flex flex-col gap-4'>
       <h1 className='font-semibold text-[3vw] md:text-2xl'>Contact us</h1>
       <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Help & Support</p>
       <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Partner with us</p>
       <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Ride with us</p>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='font-semibold text-[3vw] md:text-2xl'>We deliver to:</h1>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Bangalore</p>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Gurgoan</p>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Hydrabed</p>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Delhi </p>
        <p className='text-zinc-400 text-[2.5vw] md:text-[1.1vw] font-[500]'>Pune</p>
      </div>
    </div>
  )
}

export default Footer
