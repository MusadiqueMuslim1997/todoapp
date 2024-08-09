import React from 'react'
import './Style.css'
import heroImage from './images/rest.jfif'

const HeroSection = () => {
  return (
    <div className='hero'>
      <div className="intro"></div>
      <div className="img"><img  src={heroImage} alt="" /></div>
    </div>
  )
}

export default HeroSection
