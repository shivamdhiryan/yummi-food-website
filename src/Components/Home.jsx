import React from 'react'
import HeroSection from './HeroSection'
import SliderImg from './SliderImg'
import Use from './Use'

const Home = ({handle}) => {
  return (
    <div>
      <HeroSection/>
      <Use/>
      <SliderImg handle = {handle}/>
    </div>
  )
}

export default Home
