import React, { useContext } from "react";
import { DataContext } from "./Data";

function CheckoutItems({ img, title, price }) {
  let [, , , , item, setItem] = useContext(DataContext);

  function handleRemove() {
    let filteredItem = item.filter((item) => {
      if (title != item.name) {
        return true;
      }
    });

    setItem(filteredItem);
  }

  return (
    <div className="checkItem">
      <div className="itemCnt">
        <img src={img} />
        <h2>{title}</h2>
      </div>
      <div>
        <h2>{price}</h2>
        <i class="far fa-times-circle" onClick={handleRemove}></i>
      </div>
    </div>
  );
}

export default CheckoutItems;
