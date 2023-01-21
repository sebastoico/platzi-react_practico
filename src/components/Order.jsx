import React from 'react';
import "@styles/Order.scss";

const Order = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My order</h1>
        <div className="my-order-content">
          <div className="order">
            <p>
              <span>04.25.2021</span>
              <span>6 articles</span>
            </p>
            <p>$ 560.00</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$ 120.00</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$ 120.00</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$ 120.00</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$ 120.00</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$ 120.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;