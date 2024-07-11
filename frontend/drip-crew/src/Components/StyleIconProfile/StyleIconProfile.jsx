import styles from './StyleIconProfile.module.css'
import profileImage from "../../assets/styleIconProfileImg.jpg"

import productImage from '../../assets/productImage.jpg'
import Product from '../Product';


const StyleIconProfile = ({ icon }) => {
  if (!icon) {
    return <div>Loading...</div>; // Placeholder for when icon data is loading
  }
  return (
    <div className={styles['profile-container']}>
      <div className={styles['profile-header']}>
        <img src={profileImage} alt={icon.name} className={styles['profile-image']} />
        <div className={styles['profile-info']}>
          <h2>{icon.name}</h2>
          <button className={styles['follow-button']}>Follow</button>
          <p className={styles['followers']}>{icon.followers} followers</p>
          <p className={styles['description']}>{icon.description}</p>
        </div>
        </div>
      <div className={styles['posts-recommended-products']}>
      <div className={styles['posts-heading']}>
      <h3 >Posts</h3>
      </div>

      <div className={styles['posts']}>
      <h3>Recommended Products</h3>
      </div>
       
   
      </div>
      {/* <div className={styles['profile-content']}>
        <div className={styles['posts-section']}>
          <h3>Posts</h3>
          <div className={styles['post']}>
           
            <img src={productImage} alt={icon.posts[0].title} />
             <p className={styles['price']}>
              <span className={styles['new-price']}>₹{icon.posts[0].newPrice}</span>
              <span className={styles['old-price']}>₹{icon.posts[0].oldPrice}</span>
              <span className={styles['discount']}>{icon.posts[0].discount}% OFF</span>
            </p> 
          </div>
        </div>
        <div className={styles['recommended-section']}>
          <h3>Recommended Products</h3>
          <div className={styles['recommended']}>
           
            <img src={productImage} alt={icon.posts[0].title} /> 

            <p className={styles['price']}>
              <span className={styles['new-price']}>₹{icon.recommended[0].newPrice}</span>
              <span className={styles['old-price']}>₹{icon.recommended[0].oldPrice}</span>
              <span className={styles['discount']}>{icon.recommended[0].discount}% OFF</span>
            </p>
          </div>
        </div>
      </div> */}
      <Product/>
    </div>
  );
};

export default StyleIconProfile;