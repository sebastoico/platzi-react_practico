import React, {useEffect, useState} from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts.js';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section class="main-container">
      <div class="ProductList">
        {products.map(product => (
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
}

export default ProductList;