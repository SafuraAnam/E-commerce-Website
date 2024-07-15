import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import styles from "./BdayComponent.module.css";
import imageSource from "../../assets/avatar.svg";
import { IoHeartOutline } from "react-icons/io5";
import cakeImg from "../../assets/cake.gif";

import { useNavigate } from "react-router-dom";

const BdayComponent = ({ user, onClose }) => {
  const navigate = useNavigate();

  const handleViewWishlist = () => {
    navigate("/wishlist");
  };
  return (
    <div className={styles.bdayComponent}>
      <button className={styles.closeBtn} onClick={onClose}>
        X
      </button>
      <div className={styles.bdayHeader}>
        <img src={imageSource} alt="Profile" className={styles.profilePic} />
        <div className={styles.userInfo}>
          <h4>{user.name}</h4>
          <p>
            <img src={cakeImg} className={styles["cake-img"]} /> 28 Aug
          </p>
        </div>
      </div>
      <div className={styles.bdayBody}>
        <p>
          {user.name}'s birthday is in 7 days... <br />
          Surprise them with a birthday gift from their own Wishlist!
        </p>
        <button className={styles.wishlistBtn} onClick={handleViewWishlist}>
          View Wishlist{" "}
          {/* <span role="img" aria-label="heart">
            ❤️
          </span> */}
          <IoHeartOutline />
        </button>
      </div>
    </div>
  );
};

export default BdayComponent;
