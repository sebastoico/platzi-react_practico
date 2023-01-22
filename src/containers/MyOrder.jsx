import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import '@styles/MyOrder.scss';

import flecha from '@icons/flechita.svg';

const MyOrder = () => {
  const {state:{cart}} = useContext(AppContext);

  return (
    <div className="MyOrder">
      <div className="title-container">
        <img src={flecha} alt="arrow" />
        <p className="title">My order</p>
      </div>
    
      <div>
        {cart.map(product => (
          <OrderItem product={product} key={`orderItem-${product.id}`}/>
        ))}
    
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ 360.00</p>
        </div>
    
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default MyOrder;