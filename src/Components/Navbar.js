import React, {useState} from "react";
import Logo from "../Assets/Logo.svg";
import {BsCart3} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>

        <a href="">Testimonials</a>

        <a href="">Contact</a>

        <a href="">
          <BsCart3 className="navbar-cart-icon"/>
        </a>
        <button className="primary-button">
            Bookings Now
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={()=> setOpenMenu(true)}/>
      </div>
    </nav>
  );
};

export default Navbar;
