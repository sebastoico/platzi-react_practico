import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';

import addToCartLogo from '@icons/bt_add_to_cart.svg';
import addedToCartLogo from '@icons/bt_added_to_cart.svg';

const ProductItem = ({product}) => {
  const {state:{cart}, addToCart, removeFromCart} = useContext(AppContext);
  const [toggle, setToggle] = useState(false);

  const isInCart = () => cart.some((item) => item.id === product.id);

  const handleClick = () => {
    isInCart() ? removeFromCart(product) : addToCart(product);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>$ {product.price}.00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={isInCart() ? addedToCartLogo : addToCartLogo} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;