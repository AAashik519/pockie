import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import CameraIcon from '@mui/icons-material/Camera';
import ProductCard from "../CommonComponents/ProductCard";
const ShopByCategory = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-4">
            <div className="shop d-flex  justify-content-between">
              <div className="Shop_text">
                <h4>Shop by Category</h4>
              </div>
              <div className="see_All">
                <p>
                  See All <ArrowForwardIosOutlinedIcon />{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-2">

            <div className="Catagory_icons">
              <div className="category_icon  ">
                <div className="d-flex justify-content-center" ><CameraOutdoorIcon /></div>
                <h4 className="d-flex justify-content-center py-3">Real Estate</h4>
              </div>
            </div>
            
          </div>
          <div className="col-lg-2">

          <div className="Catagory_icons">
              <div className="category_icon  ">
                <div className="d-flex justify-content-center" ><MemoryOutlinedIcon/></div>
                <h4 className="d-flex justify-content-center py-3">Technology</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">

          <div className="Catagory_icons">
              <div className="category_icon  ">
                <div className="d-flex justify-content-center" ><WatchOutlinedIcon/></div>
                <h4 className="d-flex justify-content-center  py-3">Watch</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">

          <div className="Catagory_icons">
              <div className="category_icon  ">
                <div className="d-flex justify-content-center" ><UmbrellaIcon /></div>
                <h4 className="d-flex justify-content-center py-3">Cosmetic</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
          <div className="Catagory_icons">
              <div className="category_icon  ">
                <div className="d-flex justify-content-center" ><CameraIcon/></div>
                <h4 className="d-flex justify-content-center py-3">Glasses</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
          <div className="Catagory_icons">
              <div className="category_icon  ">
                <div className="d-flex justify-content-center" >< FastfoodOutlinedIcon /></div>
                <h4 className="d-flex justify-content-center  py-3"> Food High Grade</h4>
              </div>
            </div>
          </div>

         
            <ProductCard />
          
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
