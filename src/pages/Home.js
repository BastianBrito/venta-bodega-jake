import React from 'react';
import './Home.css'; // Asegúrate de que el archivo CSS esté importado

const Home = () => {
  return (
    <div className="product-grid">
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Producto 1"
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-title">Producto 1</h3>
          <p className="product-description">Descripción del producto 1.</p>
          <p className="product-price">$99.99</p>
        </div>
      </div>

      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Producto 2"
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-title">Producto 2</h3>
          <p className="product-description">Descripción del producto 2.</p>
          <p className="product-price">$89.99</p>
        </div>
      </div>

      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Producto 3"
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-title">Producto 3</h3>
          <p className="product-description">Descripción del producto 3.</p>
          <p className="product-price">$79.99</p>
        </div>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Producto 1"
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-title">Producto 1</h3>
          <p className="product-description">Descripción del producto 1.</p>
          <p className="product-price">$99.99</p>
        </div>
      </div>

      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Producto 2"
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-title">Producto 2</h3>
          <p className="product-description">Descripción del producto 2.</p>
          <p className="product-price">$89.99</p>
        </div>
      </div>

      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Producto 3"
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-title">Producto 3</h3>
          <p className="product-description">Descripción del producto 3.</p>
          <p className="product-price">$79.99</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
