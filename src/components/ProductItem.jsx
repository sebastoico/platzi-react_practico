import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';

import cartLogo from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
  const {addToCart} = useContext(AppContext);

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>$ {product.price}.00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => addToCart(product)}>
          <img src={cartLogo} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;