import React from 'react';
import '@styles/ProductItem.scss';

import cartLogo from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
  return (
    <div class="ProductItem">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div class="product-info">
        <div>
          <p>$120.00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={cartLogo} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;