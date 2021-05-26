import React, { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Data";

function SmallCart() {
  let [, , , , item] = useContext(DataContext);
  const refD = useRef(null);

  useEffect(() => {
    if (item.length > 0) {
      refD.current.style.display = "flex";
    } else {
      refD.current.style.display = "none";
    }
  }, [item]);

  return (
    <div ref={refD} className="cartSmall">
      <h1>Your cart</h1>
      <div className="cartItems">
        <i class="fab fa-opencart"></i>
        <p className="itemsp">{item.length} Items</p>
      </div>
      <Link to="/checkout" className="plink">
        <p>Proceed to checkout</p>
      </Link>
    </div>
  );
}

export default SmallCart;
