import React from "react";
import { Link } from "react-router-dom";

function GoTo() {
  return (
    <div className="goto">
      <Link to="/shop" className="btnLink">
        <button>Go to the shop!</button>
      </Link>
    </div>
  );
}

export default GoTo;
