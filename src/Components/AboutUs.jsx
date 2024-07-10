import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-[80%] mx-auto py-10 mt-28'>
      <div className='mb-14'>
        <h1 className='text-3xl font-semibold mb-2'>Driving the force of <span className='text-[#FCDC2A]'>assortment</span></h1>
        <p>For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting <br /> together meticulous information for our customers, we enable them to make an informed choice.</p>
      </div>
      <div className='container flex md:flex-row flex-col gap-20 '>
        <div className='left md:w-[40%] w-[100%]'>
          <h1 className='text-[5vw] md:text-[3vw] font-semibold'>Who are we?</h1>
          <p className='text-[3vw] md:text-[1.1vw]'>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
        </div>
        <div className='right md:w-[40%] w-[100%] rounded py-8'>
          <img className='rounded' src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
