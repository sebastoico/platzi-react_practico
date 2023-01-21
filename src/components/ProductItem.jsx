import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import cartLogo from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  }

  return (
    <div class="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div class="product-info">
        <div>
          <p>$ {product.price}.00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={cartLogo} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;