import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import {Link, useNavigate, useLocation} from "react-router-dom"
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 



const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    const {getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate (); 
    const location = useLocation();

    useEffect(() => {
      if (location.pathname.includes("/menu")) {
        setMenu("menu");
      } else if (location.pathname === "/") {
        setMenu("home");}
        else{
          setMenu("")
        }
    }, [location.pathname]);
  

    const logout = () =>{
        localStorage.removeItem("token");
        setToken("");
        navigate('/');
        toast.success("Logged out successfully!")
    }

  return (
    <div className="navbar">
     <Link to="/"> <img src={assets.logo_main} alt="" className="logo" /> </Link>
        <ul className="nav-menu">
          <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><Link to="/"> home</Link></li>
          <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><Link to="/menu"> menu</Link></li>
          <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
          <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</li>
        </ul>
      <div className="nav-right">
       {menu === "menu" ? <img src={assets.search_icon} alt="" /> : ""} 
        <div className="basket">
        <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
        <div className={getTotalCartAmount()===0 ?"" : "dot"}></div>
        </div>
        {!token ? <button onClick={()=>setShowLogin(true)}>sign in</button>
        : <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" />
              <ul className="navbar-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p> </li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
           </div>}
        
      </div>
    </div>
  );
};

export default Navbar;
