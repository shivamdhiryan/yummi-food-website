import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
const HeroSection = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1600891965230-bab485b08bbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1594179047519-f347310d3322?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

    ]
    const [slide, setSlide] = useState(0);
    function plus() {
        setSlide(slide === 2 ? 0 : slide + 1);
    }
    function sub() {
        setSlide(slide === 0 ? 2 : slide - 1);
    }
    useEffect(()=>{
        setInterval(()=>{
            plus()
        },2000)
    },[slide]);
    return (
        <div className='mt-28'>
            <div className='w-[90%] h-[60vh] md:w-[90%] md:h-[80vh] mx-auto relative'>
                {images.map((item, i) => (
                    <div key={i} className={`w-[100%] h-[100%]  ${slide === i ? "block" : "hidden"}`}>
                        <img src={item.url} className='object-cover rounded-lg  w-[100%] h-[100%]' alt="" />
                    </div>
                ))}
               <div className='w-[100%] h-[100%] bg-black absolute top-0 opacity-50 rounded-lg'></div> 
               <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-[4vw] md:text-[1.9vw] font-semibold' >Welcome to the World of Test & Fresh Food</p>
            </div>
            
                <MdKeyboardArrowLeft className='absolute top-[42%] md:top-[50%] left-[5%] text-white' size={60} onClick={sub} />
                <MdKeyboardArrowRight size={60} className='absolute top-[42%] md:top-[50%] right-[5%] text-white' onClick={plus} />
        
        </div>
    )
}

export default HeroSection
