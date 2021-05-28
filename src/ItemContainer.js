import React, { useContext, useEffect } from "react";
import { DataContext } from "./Data";
import Item from "./Item";

function ItemContainer() {
  let [data, setData, array, setArray] = useContext(DataContext);

  let renderOut = array.map((item) => {
    return (
      <Item
        name={item.name}
        desc={item.desc}
        url={item.url}
        price={item.price}
        path={item.path}
      />
    );
  });
  let rndr = array.length > 0 ? <div className="main">{renderOut}</div> : <div className="main"><h2>No items found</h2></div>
  return rndr
}

export default ItemContainer;
