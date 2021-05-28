import React,{useEffect} from "react";
import News from "./News";
import GoTo from "./GoTo";
import About from "./About";

function Main() {

  useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
  
  },[])


  return (
    <div className="mainDiv">
      <div className="wideImage">
        {
          <img
            src="https://images.unsplash.com/photo-1556011308-d6aedab5ed8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            className="deliveryImage"
          />
        }
        <div className="wideText">
          <h1>FREE DELIVERY FOR PURCHASES</h1>
          <h1>ABOVE 1500$</h1>
        </div>
      </div>
      <div className="newsContainer">
        <News
          name="New models"
          url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
        />
        <News
          name="-25% Discount"
          url="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1007&q=80"
        />
      </div>
      <GoTo />
      <About />
    </div>
  );
}

export default Main;
