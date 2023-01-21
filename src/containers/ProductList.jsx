import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

const ProductList = () => {
  return (
    <section class="main-container">
      <div class="ProductList">
        <ProductItem />
      </div>
    </section>
  );
}

export default ProductList;