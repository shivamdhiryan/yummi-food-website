import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
const Header = ({count}) => {
    const [data, setData] = useState(false);
    
    return (
        <div className='fixed z-50 w-[100%] bg-white top-0'>
        <div className='flex justify-between items-center px-8 py-4 font-semibold border-b text-[1.1vw] relative'>
            <div className='text-[5vw] md:text-[2vw]' ><Link to="/">Yumi<span className='text-[#FCDC2A] '>Food</span></Link></div>
            <div>
                <ul className='sm:flex gap-8 hidden cursor-pointer'>
                    <Link to="/">
                    <li className='hover:text-[#FCDC2A]'>Home</li>
                     </Link>

                     <Link to="/aboutus">
                    <li  className='hover:text-[#FCDC2A]'>About Us</li>
                     </Link>

                     <Link to="/ourfood">
                    <li  className='hover:text-[#FCDC2A]'>OurFood</li>
                     </Link>

                     <Link to="/signin ">
                    <li  className='hover:text-[#FCDC2A]'>Sign In</li>
                     </Link>
                </ul>
            </div>
            {data ? <div className='absolute right-0 top-0 bg-[#E8F1F5] w-[300px] h-[100vh] text-center flex justify-center items-center z-[999]'>
                <RxCross2 className='absolute right-2 top-2 text-2xl' onClick={() => {
                    setData(!data)
                }} />
                <ul className='flex gap-10 cursor-pointer flex-col text-2xl '>
                <Link to="/">
                    <li className='hover:text-[#FCDC2A]' onClick={() => {
                    setData(!data)
                }}>Home</li>
                     </Link>

                     <Link to="/aboutus">
                    <li  className='hover:text-[#FCDC2A]' onClick={() => {
                    setData(!data)
                }}>About Us</li>
                     </Link>

                     <Link to="/ourfood">
                    <li  className='hover:text-[#FCDC2A]' onClick={() => {
                    setData(!data)
                }}>OurFood</li>
                     </Link>

                     <Link to="/signin ">
                    <li  className='hover:text-[#FCDC2A]' onClick={() => {
                    setData(!data)
                }}>Sign In</li>
                     </Link>
                </ul>
            </div> : ""}
            <div className='flex gap-4'>
                <p className='block cursor-pointer sm:hidden' onClick={() => {
                    setData(!data)
                }}><GiHamburgerMenu size={30} /></p>
            
                <p className='cursor-pointer'> {count} <FaShoppingCart size={30} /></p>
                
            </div>
        </div>
        </div>
    )
}

export default Header

