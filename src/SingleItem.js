import React, { useContext,useEffect } from "react";
import { DataContext } from "./Data";

function SingleItem({ match }) {
  const [data, setData, , , item, setItem] = useContext(DataContext);
  const itemNew = data.filter((item) => {
    if (match.params.id === item.name) {
      return true;
    }
  });

  useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
  
  },[])
  


  function handleCart(e) {
    let add = data.filter((item) => {
      if (match.params.id === item.path) {
        return true;
      }
    });
    setItem((prev) => [...prev, add[0]]);
    console.log(item);
  }
  return (
    <div className="singleItem">
      <div className="itemContainer">
        <img src={itemNew[0].url} alt="pic" />
        <div className="singleItemText">
          <h1>{itemNew[0].name}</h1>
          <h2>{itemNew[0].desc}</h2>
          <p>{itemNew[0].details}</p>
          <hr />
          <div className="priceDiv">
            <h1 className="priceHeading">Price: {itemNew[0].price}</h1>
            <button onClick={handleCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
