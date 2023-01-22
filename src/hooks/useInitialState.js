import { useState } from "react";

const initialState = {
  cart: [],
  menuIsOpen: false,
  orderIsOpen: false,
  mobileMenuIsOpen: false
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
      cart: state.cart.filter((product, index) => product.id !== payload.id)
    })
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
      menuIsOpen: false,
      mobileMenuIsOpen: false
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
      orderIsOpen: false,
      mobileMenuIsOpen: false
    })
  };

  const toggleMobileMenu = () => {
    setState({
      ...state,
      mobileMenuIsOpen: !state.mobileMenuIsOpen,
      orderIsOpen: false,
      menuIsOpen: false
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
    toggleMobileMenu
  };
};

export default useInitialState;