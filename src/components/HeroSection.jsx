import React from 'react'
import './Style.css'
import heroImage from './images/hero.avif'
import NavBar from './NavBar'

const HeroSection = () => {
  return (
    <>
    <section className="main">
    <div className='hero'>
      <div className="intro">
      
      <div className="head">Welcome to Musadique's resturant</div>
      <div className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatum nihil ducimus libero aut accusamus! Est, neque fugiat eum,
        corrupti quaerat nisi cupiditate necessitatibus sint obcaecati explicabo possimus culpa ipsam sapiente.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        
       </div>


      </div>
      <div className="img"><img src={heroImage} alt="" /></div>
    </div>

</section>
</>
  )
}

export default HeroSection
