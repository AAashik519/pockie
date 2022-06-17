import React from 'react'
import './HotDeal.css'
const HotDealComponent = ({deals}) => {
    const {title,Description,text,image}=deals
  return (
    <div className='HotDealComponent col-lg-6  '> 
            <div className="HotDealCard  ">
            <div className="HotDealImage">
            <img src={image}alt="image" className=' w-100 h-auto' />
            </div>
              <div className="HotDealText">
              <p>{title}</p>
                <h4>{Description} </h4>
                <h4>{text} </h4>
                <button type="button" class="btn btn-success px-2 mt-5">Order Now</button>
              </div>
                 
                
                 
            </div>
    </div>
  )
}

export default HotDealComponent