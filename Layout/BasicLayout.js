import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer/Footer";

export default function BasicLayout(props) {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      
    </div>  
  );
}
