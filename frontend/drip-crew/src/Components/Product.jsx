import { FaStar } from "react-icons/fa";

const Product = () => {
  return (
    <>
      <div className="product-card">
        <img
          src=""
          alt="Kook N Keech Typography Printed T-shirt"
          className="product-image"
        />
        <div className="product-info">
          <div className="rating">
            <span>4.4</span>
            <FaStar />
            <span>| 5.3k</span>
          </div>
          <h3 className="product-title">Kook N Keech</h3>
          <p className="product-description">Typography Printed T-shirt</p>
          <div className="product-pricing">
            <span className="current-price">Rs. 516</span>
            <span className="original-price">Rs. 1099</span>
            <span className="discount">(53% OFF)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
