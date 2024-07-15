import styles from "./StyleIconProfile.module.css";
import profileImage from "../../assets/styleIconProfileImg.jpg";

import productImage from "../../assets/productImage.jpg";
import Product from "../Product";
import tickImg from "../../assets/verifiedTick.svg";

const StyleIconProfile = ({ icon }) => {
  if (!icon) {
    return <div>Loading...</div>; // Placeholder for when icon data is loading
  }
  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-header"]}>
        <img
          src={profileImage}
          alt={icon.name}
          className={styles["profile-image"]}
        />
        <div className={styles["profile-info"]}>
          <div className={styles["name-tick"]}>
            <h2>{icon.name}</h2>
            <img src={tickImg} />
          </div>

          <button className={styles["follow-button"]}>Follow</button>
          <p className={styles["followers"]}>{icon.followers} followers</p>
          <p className={styles["description"]}>{icon.description}</p>
        </div>
      </div>
      <div className={styles["posts-recommended-products"]}>
        <div className={styles["posts-heading"]}>
          <h3>Posts</h3>
        </div>

        <div className={styles["posts"]}>
          <h3>Recommended Products</h3>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default StyleIconProfile;
