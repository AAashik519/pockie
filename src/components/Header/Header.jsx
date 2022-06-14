import React from "react";
 
import CategoryMenu from "./CategoryMenu";
 import './Header.css'
import Info from "./Info";
import SearchNav from "./SearchNav";

const Header = () => {
  return (
    <div>
      <Info />
      <SearchNav />
      <CategoryMenu />
      
    </div>
  );
};

export default Header;
