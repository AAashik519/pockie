import React from 'react'
import HotDealComponent from './HotDealComponent'
import './HotDeal.css'
const HotDeal = () => {
    const hotDeals = [
        
            {
                "id": 3,
                "title": "New Product",
                "Description":"EXPERIENCE TECHNOLOGY",
                "text":"RELAX HIGHTLY",
                "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                 
              },
              {
                "id": 2,
                "title": "Hot Deal",
                "Description":"TOURS SAFE",
                "text":"TRUE DISCOUNT",
                "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
               
              }
        
    ]
  return (
    <div className='container'>
        <div className="row">
            {hotDeals.map((deals)=>(
                <HotDealComponent deals={deals} />
            ))}

        </div>
    </div>
  )
}

export default HotDeal