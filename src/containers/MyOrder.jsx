import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import '@styles/MyOrder.scss';

import flecha from '@icons/flechita.svg';

const MyOrder = () => {
  const {state:{cart}} = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="MyOrder">
      <div className="title-container">
        <img src={flecha} alt="arrow" />
        <p className="title">My order</p>
      </div>
    
      <div>
        {cart.map((product, index) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} indexValue={index}/>
        ))}
    
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ {sumTotal()}.00</p>
        </div>
    
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default MyOrder;