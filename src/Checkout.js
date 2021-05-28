import React, { useContext,useEffect} from "react";
import { DataContext } from "./Data";
import CheckoutItems from "./CheckoutItems";

function Checkout() {


  useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
  
  },[])


  let {items} = useContext(DataContext);
  console.log(items);
  let itemList;

  function Alert() {
    alert("That's all from this site, thanks for visiting :)");
  }

  if (items.length > 0) {
    itemList = items.map((obj) => {
      return <CheckoutItems img={obj.url} title={obj.name} price={obj.price} />;
    });
  } else {
    itemList = <h3>Nothing is selected</h3>;
  }
  return (
    <div className="checkout">
      <h1>Your items:</h1>
      <div className="checkoutItems">{itemList}</div>
      <button className="payBtn" onClick={Alert}>
        Add Payment Method
      </button>
    </div>
  );
}

export default Checkout;
