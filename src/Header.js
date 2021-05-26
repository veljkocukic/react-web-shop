import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <i class="fas fa-cart-plus"></i> Tech Shop
      </h1>
      <ul>
        <Link className="link" to="/">
          <li>
            <i class="fas fa-home"></i> Home
          </li>
        </Link>
        <Link className="link" to="/shop">
          <li>
            <i class="fas fa-shopping-cart"></i> Shop
          </li>
        </Link>
        <Link className="link" to="/checkout">
          <li>
            <i class="fas fa-money-check-alt"></i> Checkout
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
