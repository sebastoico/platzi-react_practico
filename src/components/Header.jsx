import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu.jsx";
import MyOrder from "@containers/MyOrder";
import AppContext from "@context/AppContext";

import yardSaleLogo from "@logos/logo_yard_sale.svg";
import menuLogo from "@icons/icon_menu.svg";
import shoppingCartLogo from "@icons/icon_shopping_cart_notification.svg";
import shoppingCartNotLogo from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const {state, toggleMenu, toggleOrder} = useContext(AppContext);

  return (
    <nav>
      <img src={menuLogo} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={yardSaleLogo} alt="logo" className="nav-logo" />
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
          <li className="navbar-email" onClick={() => toggleMenu()}>
            email@yardsale.com
          </li>
          <li className="navbar-shopping-cart" onClick={() => toggleOrder()}>
            <img 
              src={state.cart.length > 0 ? shoppingCartLogo : shoppingCartNotLogo} 
              alt="shopping cart" 
            />
          </li>
        </ul>
      </div>
      {state.menuIsOpen && <Menu/>}
      {state.orderIsOpen && <MyOrder/>}
    </nav>
  );
};

export default Header;
