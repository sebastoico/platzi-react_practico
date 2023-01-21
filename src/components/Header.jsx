import React from "react";
import "@styles/Header.scss";

import logo from "@logos/logo_yard_sale.svg";
import menuLogo from "@icons/icon_menu.svg";
import shoppingCartLogo from "@icons/icon_shopping_cart_notification.svg";

const Header = () => {
  return (
    <nav>
      <img src={menuLogo} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">email@yardsale.com</li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCartLogo} alt="shopping cart" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
