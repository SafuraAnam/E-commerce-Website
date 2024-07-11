// import styles from "./Chats.module.css";
// import AddFriendIcon from "../../assets/add-friend-icon.svg";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import defaultAvatar from "../../assets/avatar.svg";

// const Chats = ({ onSelectContact }) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch users from backend API
//     axios
//       .get("http://localhost:8080/users") // Adjust URL as per your backend setup
//       .then((response) => {
//         console.log(response.data);
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//       });
//   }, []);

//   const handleContactClick = (contact) => {
//     onSelectContact(contact); // Notify parent component of selected contact
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <img src={AddFriendIcon} alt="Add Friend Icon" />
//         <div className={styles.title}>Drip Crew</div>
//       </div>
//       <div className={styles.contacts}>
//         {users.map((user) => (
//           <div key={user._id} className={styles.contact} onClick={() => handleContactClick(user)}>
//             {console.log(typeof user.avatar)}
//             <img
//               src={defaultAvatar}
//               className={styles.avatar}
//               onError={(e) => {
//                 console.log(e, "error loading avatar");
//                 console.log(e.target.src);
//               }}
//             />
//             <div className={styles.details}>
//               <div className={styles.name}>{user.name}</div>
//               <div className={styles.status}>{user.status}</div>
//             </div>
//           </div>
//         ))}

//         {/* ------------------------------//style icons -------------------------------------*/}
//         <div className={styles.styleIconsContainer}>

//           <div className={styles.styleIconsHeading}>
//             <h2>Style Icons</h2>

//           <p>Follow your favourite fashion influencers to stay updated with the latest fashion trends</p>
//           </div>

//         <div className={`${styles.styleIconsDetails} ${styles.contacts} `}>
//           <img className={styles.styleIconsAvatar} src={defaultAvatar} />
//           <div className={styles.details}>
//             <div className={styles.name}>Sonam</div>
//           </div>
//         </div>

//         <div className={`${styles.styleIconsDetails} ${styles.contacts} `}>
//           <img className={styles.styleIconsAvatar} src={defaultAvatar} />
//           <div className={styles.details}>
//             <div className={styles.name}>Sonam</div>
//           </div>
//         </div>

//         <div className={`${styles.styleIconsDetails} ${styles.contacts} `}>
//           <img className={styles.styleIconsAvatar} src={defaultAvatar} />
//           <div className={styles.details}>
//             <div className={styles.name}>Sonam</div>
//           </div>
//         </div>

//         </div>

//       </div>
//     </div>
//   );

// };

// export default Chats;

import styles from "./Chats.module.css";
import AddFriendIcon from "../../assets/add-friend-icon.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import defaultAvatar from "../../assets/avatar.svg";
import { FaBirthdayCake } from "react-icons/fa";
import BdayComponent from "../BdayComponent/BdayComponent";

const Chats = ({ onSelectContact }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    // Fetch users from backend API
    axios
      .get("http://localhost:8080/users") // Adjust URL as per your backend setup
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        // setUser(response.data); // Pass user data to parent component
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleContactClick = (contact) => {
    onSelectContact(contact); // Notify parent component of selected contact
  };

  const handleCakeClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={AddFriendIcon} alt="Add Friend Icon" />
        <div className={styles.title}>Drip Crew</div>
      </div>
      <div className={styles.contacts}>
        {users.map((user) => (
          <div
            key={user._id}
            className={styles.contact}
            onClick={() => handleContactClick(user)}
          >
            <img
              src={defaultAvatar}
              className={styles.avatar}
              onError={(e) => {
                console.log(e, "error loading avatar");
                console.log(e.target.src);
              }}
            />
            <div className={styles.details}>
              <div className={styles.name}>{user.name}</div>
              <div className={styles.status}>{user.status}</div>
              {user.isBdayComing && (
                <FaBirthdayCake
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the contact click
                    handleCakeClick(user);
                  }}
                  className={styles.bdayIcon}
                />
              )}
            </div>
          </div>
        ))}

        {/* ------------------------------//style icons -------------------------------------*/}
        <div className={styles.styleIconsContainer}>
          <div className={styles.styleIconsHeading}>
            <h2>Style Icons</h2>
            <p>
              Follow your favourite fashion influencers to stay updated with the
              latest fashion trends
            </p>
          </div>
          <div className={`${styles.styleIconsDetails} ${styles.contacts} `}>
            <img className={styles.styleIconsAvatar} src={defaultAvatar} />
            <div className={styles.details}>
              <div className={styles.name}>Sonam</div>
            </div>
          </div>
          <div className={`${styles.styleIconsDetails} ${styles.contacts} `}>
            <img className={styles.styleIconsAvatar} src={defaultAvatar} />
            <div className={styles.details}>
              <div className={styles.name}>Sonam</div>
            </div>
          </div>
          <div className={`${styles.styleIconsDetails} ${styles.contacts} `}>
            <img className={styles.styleIconsAvatar} src={defaultAvatar} />
            <div className={styles.details}>
              <div className={styles.name}>Sonam</div>
            </div>
          </div>
        </div>
      </div>
      {selectedUser && (
        <BdayComponent
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default Chats;
