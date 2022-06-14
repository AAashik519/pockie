import React from 'react'

const HotDealComponent = ({deals}) => {
    const {title,Description,text,image}=deals
  return (
    <div className='HotDealComponent col-lg-6  '> 
            <div className="HoyDealCard w-100 h-auto">
                <img src={image}alt="image" className=' w-100 h-auto' />
                <p>{title}</p>
                <h4>{Description} </h4>
                <h4>{text} </h4>
                <button>Order Now</button>
                 
            </div>
    </div>
  )
}

export default HotDealComponent