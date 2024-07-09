// import styles from './Chats.module.css';
// import  AddFriendIcon  from '../../assets/add-friend-icon.svg'
// import axios from 'axios';
// import { useState,useEffect } from 'react';
// const Chats =()=>{
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         // Fetch users from backend API
//         axios.get('http://localhost:8080/users')  // Adjust URL as per your backend setup
//             .then(response => {
//                 setUsers(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching users:', error);
//             });
//     }, []);

//     return(
//         <div className={styles.container}>
//             <div className={styles['header-name']}>
//                <img src={AddFriendIcon}alt="" className={styles['add-friend-icon']}/>
//                <div className={styles['drip-crew']}>Drip Crew</div>

//                <div className={styles.contacts}>
//                 {users.map(user => (
//                     <div key={user._id} className={styles.contact}>
//                         <img src={user.avatar} alt={user.name} className={styles.avatar} />
//                         <span className={styles.name}>{user.name}</span>
//                     </div>
//                 ))}
//             </div>
           
//             </div>
//         </div>
//     )
// }

// export default Chats;



import styles from './Chats.module.css';
import AddFriendIcon from '../../assets/add-friend-icon.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import defaultAvatar from '../../assets/avatar.svg'
// import defaultAvatar from '../../assets/avatar.svg';

const Chats = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from backend API
        axios.get('http://localhost:8080/users')  // Adjust URL as per your backend setup
            .then(response => {
                console.log(response.data)
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={AddFriendIcon} alt="Add Friend Icon" />
                <div className={styles.title}>Drip Crew</div>
            </div>
            <div className={styles.contacts}>
                {users.map(user => (
                    <div key={user._id} className={styles.contact}>
                        {console.log(typeof user.avatar)}
                        <img
                           src={defaultAvatar}
                           className={styles.avatar}
                           onError={(e)=>{console.log(e,'error loading avatar');
                            console.log(e.target.src)
                           }}
                        />
                        <div className={styles.details}>
                            <div className={styles.name}>{user.name}</div>
                            <div className={styles.status}>{user.status}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chats;
