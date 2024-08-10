import React from 'react'
import './Style.css'
import { Link } from "react-router-dom";
import img1 from './images/chicken.avif'
import img2 from './images/beef.jpg'
import img3 from './images/mutton.jpg'
import img4 from './images/sindhi.png'
import img5 from './images/chapli.jfif'
import img6 from './images/seekh.jfif'
import img7 from './images/reshmi.jpg'
import img8 from './images/shami.jfif'
import img9 from './images/cuban.jfif'
import img10 from './images/ruman.jfif'
import img11 from './images/siclian.jfif'
import img12 from './images/bbq.jpg'
import img13 from './images/vanella.jfif'
import img14 from './images/choclate.avif'
import img15 from './images/straw.jpg'
import img16 from './images/moose.jfif'

export {img1}









const Cards = () => {
 


 
  
  return (
    
    <section className='main'>
     
     <div className="cardsSec">
      <div className="cardHead">Resturant Items</div>  
      <div className="content-para">
       Indulge in our succulent Grilled Chicken Delight, marinated in a blend of aromatic spices and herbs.
       Perfectly grilled to juicy tenderness, it’s served with a side of fresh vegetables and your choice of fluffy rice or crispy fries. 
       A burst of flavor in every bite, this dish is a must-try for all chicken lovers. Enjoy a delicious meal that’s both satisfying and healthy!</div>
     
       <div className="cardHead">
       <div className="cardHeads"> Biryani</div>
        </div>
      

     
     <Link to="/chicken"><div className="card">
     <div className="card-img"><img src={img1} alt="" /></div>
     <div className="card-title">Chicken Biryani</div>
     </div>
     </Link>
     <Link to = "/beef"><div className="card">
     <div className="card-img"><img src={img2} alt="" /></div>
     <div className="card-title">Beef Biryani</div>
     </div>
     </Link>

    <Link to="/mutton"> <div className="card">
     <div className="card-img"><img src={img3} alt="" /></div>
     <div className="card-title">Mutton Biryani</div>
     </div>
     </Link>
     <Link to ="/sindhi"><div className="card">
     <div className="card-img"><img src={img4} alt="" /></div>
     <div className="card-title">Sindhi Biryani</div>
     </div>
     </Link>
     <div className="cardHead">
       <div className="cardHeads"> Kabab</div>
        </div>
        <Link to ="/chapli">  <div className="card">
     <div className="card-img"><img src={img5} alt="" /></div>
     <div className="card-title">Chapli Kabab</div>
     </div>
     </Link>
   
     <Link to = "/seekh"> <div className="card">
     <div className="card-img"><img src={img6} alt="" /></div>
     <div className="card-title">Seekh Kabab</div>
     </div>
     </Link>
     <Link to = "/reshmi">  <div className="card">
     <div className="card-img"><img src={img7} alt="" /></div>
     <div className="card-title">Reshmi Kabab</div>
     </div>
     </Link>
     <Link to = "/shami">  <div className="card">
     <div className="card-img"><img src={img8} alt="" /></div>
     <div className="card-title">Shami Kebab</div>
     </div>
     </Link>
     <div className="cardHead">
       <div className="cardHeads"> Pizza</div>
        </div>

     <Link><div className="card">
     <div className="card-img"><img src={img9} alt="" /></div>
     <div className="card-title">Cuban Pizza</div>
     </div>
     </Link>
     <Link> <div className="card">
     <div className="card-img"><img src={img10} alt="" /></div>
     <div className="card-title">Roman Pizza</div>
     </div>
     </Link>
     <Link><div className="card">
     <div className="card-img"><img src={img11} alt="" /></div>
     <div className="card-title">Sicilian Pizza</div>
     </div>
     </Link> 
     <Link> <div className="card">
     <div className="card-img"><img src={img12} alt="" /></div>
     <div className="card-title">BBQ Chicken Pizza</div>
     </div>
     </Link>
     <div className="cardHead">
       <div className="cardHeads"> Ice Cream</div>
        </div>
       
        <Link><div className="card">
     <div className="card-img"><img src={img13} alt="" /></div>
     <div className="card-title">Vanilla</div>
     </div>
     </Link> 
     <Link> <div className="card">
     <div className="card-img"><img src={img14} alt="" /></div>
     <div className="card-title">Chocolate</div>
     </div>
     </Link>
     <Link> <div className="card">
     <div className="card-img"><img src={img15} alt="" /></div>
     <div className="card-title">Strawberry</div>
     </div>
     </Link>
     <Link> <div className="card">
     <div className="card-img"><img src={img16} alt="" /></div>
     <div className="card-title">Moose Tracks</div>
     </div>
     </Link>
     </div>

    </section>
    
  )
}

export default Cards
