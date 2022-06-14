import React, { useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import axios from 'axios'
import './ProductCard.css'
 import { setProducts } from '../../redux/actions/productAction'
const ProductCard = () => {
  const  products = useSelector((state)=>state.allProducts.products)
  
  const dispatch = useDispatch()
  // const category =products.query(category==="jewelery")
 

  const fetchProducts = async ()=>{
    try {
      const  response = await axios.get("https://fakestoreapi.com/products")
      dispatch(setProducts( response.data))
    } catch (error) {
      console.log(error)
    }
}
 
useEffect(()=>{
    fetchProducts();
},[])
 
  return (
      <>
     {products.slice(0,6).map((product,)=> (
      <div className="col-lg-2 my-4">
      <div className='product'>
         <img src= {product.image} alt="" />
   
        <div className='product_text'>
              <p>{product.title.slice(0, 20)}</p>
         <h5>$ {product.price} </h5>
            {/* <p>by Co., Ltd Minie Li</p> */}
     </div>
        <p>by Co., Ltd Minie Li</p> 
  </div>
</div>
))}
        

        </>
    
  )
}

export default ProductCard



 