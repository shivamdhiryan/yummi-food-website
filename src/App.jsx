import React, { useState } from 'react'
import Footer from './Components/Footer'
import Slider from './Components/Slider'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import SignIn from './Components/SignIn'

const App = () => {
  const [count,setCount] = useState(0);
  function handle(){
    setCount(count+1);
}

  return (
    <div>
      <Header count = {count}/>

      <Routes>
        <Route path='/' element= {<Home handle = {handle}/>}></Route>
        <Route path='/aboutus' element = {<AboutUs/>}></Route>
        <Route path='/ourfood' element= {<Slider handle = {handle}/>}></Route>
        <Route path='/signin' element= {<SignIn/>}></Route>
        
        <Route></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
