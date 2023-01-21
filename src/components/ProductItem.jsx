import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import cartLogo from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  }

  return (
    <div class="ProductItem">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg" alt="" />
      <div class="product-info">
        <div>
          <p>$120.00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleClick}>
          <img src={cartLogo} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;