import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderImg = ({handle}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
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
            title:"CHIKEN",
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
        
    ]
  return (
    <div className='w-ful mt-10'>
    <h1 className='mb-8 py-2 font-[800] text-2xl md:text-[2vw] font-mono ml-20'>What's on your mind?</h1>
  <div className='images w-[100%] px-40 mb-12'>
  <Slider {...settings}>
    {data.map((item,i)=>(
        <div key={i} className='w-[100%]'>
          <div className='w-[100%] flex justify-center'>
             <img src={item.url} className='object-cover w-[130px] h-[130px] rounded-full' alt="" />
         </div>
        <div className='flex flex-col items-center gap-1'>
        <p className='text-center font-semibold'>{item.title}</p>
        <p className=''>{item.price}</p>
        <button className='bg-black text-white px-3 py-2 rounded mb-10' onClick={()=>handle()}>Add to Cart</button>
        </div>
       
    </div>
    ))}
     </Slider>
  </div>
</div>
  )
}

export default SliderImg
