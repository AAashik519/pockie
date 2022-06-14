import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const SearchNav = () => {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="searchBar">
              <div className="col-lg-3">
                <img
                  src="https://cdn.discordapp.com/attachments/831294468317118484/985508775714779136/Screenshot_2022-06-10_064105.png"
                  alt="pockie"
                />
              </div>
              <div className="col-lg-7">
                <div className="Search">
                  <form className="d-flex  justify-content-center align-items-center">
                    <input
                      className="form-control me-2 w-50 mx-2"
                      type="search"
                      placeholder="What are you looking for ?"
                      aria-label="Search"
                    />
                    <ul className="">
                      <li class="nav-item dropdown nestedDropDown  ">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Category
                        </a>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <button
                      className="btn btn-success  px-5 mx-2  "
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="cartItems" cartItems>
                  <div className="favourite">
                    
                    <FavoriteBorderIcon /> 
                  </div>
                  <div className="shoppingCart">
                    <ShoppingCartOutlinedIcon />
                    <div className="cartText">
                      <p>3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchNav;
