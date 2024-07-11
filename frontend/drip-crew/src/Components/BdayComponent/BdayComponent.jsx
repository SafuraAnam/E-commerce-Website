import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import styles from "./BdayComponent.module.css"; // Assuming you create a corresponding CSS file
import imageSource from "../../assets/avatar.svg";
import { IoHeartOutline } from "react-icons/io5";

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
          <h2>{user.name}</h2>
          <p>
            <FaBirthdayCake /> 28 Aug
          </p>
        </div>
      </div>
      <div className={styles.bdayBody}>
        <p>
          Birthday in 7 days... <br />
          Surprise {user.name} with a birthday gift from their own wishlist!!!
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
