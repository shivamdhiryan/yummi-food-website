import React from 'react'

const Slider = ({handle}) => {
    const data = [
        {
            url:"https://images.unsplash.com/photo-1589010588553-46e8e7c21788?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"AFRICAN SALAD",
            price:" ₹140"
        },
        {
            url:"https://plus.unsplash.com/premium_photo-1700676963593-f49ac2365498?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"KALE SALAD",
            price:" ₹300"
        },
        {
            url:"https://images.unsplash.com/photo-1626451542138-1f86835340ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"CEASAR SALAD",
            price:" ₹300"
        },
        {
            url:"https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"LOADED SALAD",
            price:" ₹140"
        },
        {
            url:"https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"CHIKEN SHAWARMA",
            price:" ₹100"
        },
        {
            url:"https://images.unsplash.com/photo-1605291581998-f646dd126837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"WINGS",
            price:" ₹100"
        },
        {
            url:"https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"ROASTED CHICKEN",
            price:" ₹300"
        },
        
        {
            url:"https://images.unsplash.com/photo-1605291581926-df4bf7ee3e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"CHICKEN TENDERS",
            price:"₹100"
        },
        // {
        //     url:"https://images.unsplash.com/photo-1605291581926-df4bf7ee3e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     title:"CHEESELESS",
        //     price:"₹200"
        // },
        // {
        //     url:"https://images.unsplash.com/photo-1605291581926-df4bf7ee3e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     title:"SUPREME PIZZA",
        //     price:"₹300"
        // },
        // {
        //     url:"https://images.unsplash.com/photo-1605291581926-df4bf7ee3e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     title:"PEPPERONI PIZZA",
        //     price:"₹100"
        // },
        // {
        //     url:"https://images.unsplash.com/photo-1605291581926-df4bf7ee3e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     title:"CHEESE PIZZA",
        //     price:"₹140"
        // },
        
    ]
  return (
    <div className='w-ful mt-28'>
        <h1 className='text-center  mb-8 py-2 font-[700] text-2xl md:text-[2vw] text-[#FCDC2A]'>Our Food Menu</h1>
      <div className='images w-[100%] flex flex-wrap gap-4 justify-center items-center'>
        {data.map((item,i)=>(
            <div key={i} className='w-[300px] h-[300px] '>
            <img src={item.url} className='object-cover h-[65%] w-[100%] rounded-md' alt="" />
            <div className='w-[100%] h-[35%] flex flex-col px-14 gap-1'>
            <p className='text-center text-[2.5vw] md:text-[1vw] font-[600]'>{item.title}</p>
            <p className='text-center font-semibold'>{item.price}</p>
            <button className='bg-black text-white px-4 py-2 rounded text-center' onClick={handle}>Add to Cart</button>
            </div>
           
        </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
