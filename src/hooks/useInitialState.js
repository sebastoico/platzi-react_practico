import { useState } from "react";

const initialState = {
  cart: [],
  menuIsOpen: false,
  orderIsOpen: false
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== payload)
    })
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
      menuIsOpen: false
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
      orderIsOpen: false
    })
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu
  };
};

export default useInitialState;