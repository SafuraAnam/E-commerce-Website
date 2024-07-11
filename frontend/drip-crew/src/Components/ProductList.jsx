import Product from "./Product";
import productSource from "../assets/offer1.jpg";
import productSource2 from "../assets/offer2.jpg";
import productSource3 from "../assets/Crazy-Deal.jpg";
import Footer from "./Footer";
const ProductList = () => {
  return (
    <>
      <div className="main">
        <div className="offer">
          <img className="offer1" src={productSource} />
          <img className="offer2" src={productSource2} />
          <img className="offer3" src={productSource3} />
        </div>
        <div>
          <h4 className="text-banner-title">TRENDING IN WESTERN WEAR</h4>
        </div>
        <Product></Product>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ProductList;
