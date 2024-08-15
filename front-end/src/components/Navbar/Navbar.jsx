import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import {Link, useNavigate} from "react-router-dom"
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    const {getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate (); 

    const logout = () =>{
        localStorage.removeItem("token");
        setToken("");
        navigate('/')
    }

  return (
    <div className="navbar">
     <Link to="/"> <img src={assets.logo} alt="" className="logo" /> </Link>
        <ul className="nav-menu">
          <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
          <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
          <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
          <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</li>
        </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="" />
        <div className="basket">
        <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
        <div className={getTotalCartAmount()===0 ?"" : "dot"}></div>
        </div>
        {!token ? <button onClick={()=>setShowLogin(true)}>sign in</button>
        : <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" />
              <ul className="navbar-profile-dropdown">
                <li><img src={assets.bag_icon} alt="" /><p>Orders</p> </li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
           </div>}
        
      </div>
    </div>
  );
};

export default Navbar;