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
  useEffect(() => {
    console.log(
      "Array iz kontejnera" + array,
      "render iz kontejnera" + renderOut
    );
  });
  return <div className="main">{renderOut}</div>;
}

export default ItemContainer;
