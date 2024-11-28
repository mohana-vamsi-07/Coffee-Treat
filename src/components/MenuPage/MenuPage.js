import React from 'react';
// import coffee1 from '../assets/images/coffee1.jpg';
// import coffee2 from '../assets/images/coffee2.jpg';
import './MenuPage.css';

const MenuPage = () => {
  return (
    <div className="menu-page" id="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          {/* <img src={coffee1} alt="Espresso" /> */}
          <p>Espresso</p>
        </div>
        <div className="menu-item">
          {/* <img src={coffee2} alt="Latte" /> */}
          <p>Latte</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
