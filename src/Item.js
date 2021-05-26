import React from "react";
import { Link } from "react-router-dom";

function Item({ url, name, desc, price, path }) {
  return (
    <div>
      <div className="Item">
        <img src={url} />
        <h1>{name}</h1>
        <p>{desc}</p>
        <h2>{price}</h2>
        <Link to={`/product/${path}`}>
          <h3>See details</h3>
        </Link>
      </div>
    </div>
  );
}

export default Item;
