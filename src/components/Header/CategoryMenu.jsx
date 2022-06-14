import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const CategoryMenu = () => {
  return (
    <div className='categoryMenu'> 
        <div className="container">
            <div className="row  ">
                
                <div className="col-lg-2 ">
                    <div className='category'>
                        <ul className='navbar-nav'>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-5 d-flex align-items-center  ">
                    <div className='homeMenu    '>
                      <ul className='d-flex justify-content-end '>
                        <li><a href="">Home</a></li>
                        <li><a href="">New Products</a></li>
                        <li><a href="">Promototion <span>Hot</span> </a></li>
                      </ul>
                    </div>
                </div>
                <div className="col-lg-5">
                   <div className="register ">
                   <ul className='d-flex justify-content-end ' >
                        <li><a href=""><LocalShippingIcon/> Track Your Order </a></li>
                        <li><a href=""><PersonOutlineOutlinedIcon/> Sign In/Register</a></li>
                    </ul>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryMenu