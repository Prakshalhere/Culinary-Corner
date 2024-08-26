import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import AppDownload from "../../components/AppDownload/AppDownload";
import WhyOrderOnline from "../../components/WhyOrderOnline/WhyOrderOnline";

const Home = () => {


  return (
    <div>
      <Header />
      <WhyOrderOnline/>
      <AppDownload/>
    </div>
  );
};

export default Home;
