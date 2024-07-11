import Product from "../Product";
import styles from "./WishlistContainer.module.css";
const WishlistConatiner = () => {
  return (
    <div>
      <div className={styles["bday-name"]}>
        Jane Smith's WishList{" "}
        <span className={styles["bday-name-item"]}>10 items</span>
      </div>
      <Product></Product>
    </div>
  );
};

export default WishlistConatiner;
