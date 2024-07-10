import React from 'react'

const SignIn = () => {
  return (
    <div className='w-[90%] mx-auto flex md:flex-row flex-col items-center gap-10 md:justify-around py-10 mt-28'>
    <div className='md:w-[45%] left flex flex-col justify-center px-10'>
      <h1 className='text-[4.7vw] md:text-[1.7vw] font-[700]'>Get Started With Your Account</h1>
      <p className='md:text-[1vw]'>Find Your Favourite Food On our platform. Just one step to order your food</p>
    </div>
    <div className='right md:w-[30%] w-[80%] bg-zinc-200 py-8 rounded'>
     <form action="">
     <h2 className='px-6 md:px-10 mb-4 font-semibold text-[5vw] md:text-[1.2vw]'>Sign Up</h2>
      <div className='w-[100%] px-6 md:px-10 mb-2'>
      <label htmlFor="name">Full Name</label> <br />
       <input type="text" id='name' className='w-[100%] py-2 px-2 rounded'/>
      </div>
      <div className='w-[100%] px-6 md:px-10 mb-2'>
      <label htmlFor="email">Email</label> <br />
       <input type="text" id='email' className='w-[100%] py-2 px-2 rounded'/>
      </div>
      <div className='w-[100%] px-6 md:px-10 mb-2'>
      <label htmlFor="mobile">Mobile</label> <br />
       <input type="text" id='mobile' className='w-[100%] py-2 px-2 rounded'/>
      </div>
      <div className='w-[100%] px-6 md:px-10'>
      <label htmlFor="password">Password</label> <br />
       <input type="text" id='password' className='w-[100%] py-2 px-2 rounded'/>
      </div>
      <div className='w-[100%] px-6 md:px-10'>
      <button className=' bg-blue-800 w-[100%] py-3 mt-4 text-white rounded'>Sign Up</button>
      </div>

     </form>
    </div>
    </div>
  )
}

export default SignIn
