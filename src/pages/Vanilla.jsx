import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';

import "../components/Style.css";
import { img13 } from '../components/Cards';


const Vanilla = () => {
   const [show, setShow] =useState(false);
   let handleShow = () =>{
    setShow(!show)
    if(show){
        event.target.innerText = 'View Details'
    }
    else{
         event.target.innerText = 'Hide Details'
    }



   }
  return (
    <> <NavBar/>
   <section className="main">
    <div className="box">

    <div className="headItem">
        <div className="cardHeads">Vanilla</div>
      </div>

      <div className="itemImage"><img src={img13} alt="" /></div>
      <div className="itemBtn">

        <button onClick={handleShow}>View Detail</button>
        <Link to = '/'><button>Go Back</button></Link>
      </div>
       
     {show &&  <div className="description">
        <div className="des"><span className='silver'>Description:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Illo autem similique alias ex modi dolor sit fugit ipsum enim nobis nostrum tenetur ipsa adipisci, ad a quibusdam at, incidunt animi.</div>
        <div className="price" ><span className='gold'>Price: Rs.500</span> </div>
       </div>
    }
    </div>
   </section>
   </>
  )
}

export default Vanilla
