import Product from "./Product";
import productSource from "../assets/offer1.jpg";
import productSource2 from "../assets/offer2.jpg";
const ProductList = () => {
  return (
    <>
      <div className="main">
        <div className="offer">
          <img className="offer1" src={productSource} />
          <img className="offer2" src={productSource2} />
        </div>
      </div>
    </>
  );
};

export default ProductList;
