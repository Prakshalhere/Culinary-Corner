import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const AppDownload = () => {
  
  const clickHandler = () =>{
      toast.warning("The Culinary Corner App is coming soon! Stay tuned for updates.")
  }
  return (
    <div className='app-download'>
        <p>For Better Experience Download <br /> Culinary Corner App</p>
        <div className="app-download-plateforms">
            <img onClick={()=> clickHandler()} src={assets.play_store} alt="" />
            <img onClick={()=> clickHandler()} src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload