import React from 'react';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className="NotFound">
      <div>
        <h1 className="NotFound-title">We're sorry.</h1>
        <p className="NotFound-subtitle">We couldn't find the page you're looking for.</p>
      </div>
    </div>
  );
}

export default NotFound;