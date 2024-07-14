// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Chats from "../Components/Chats/Chats";
// import SideBar from "../Components/SideBar";
// import Messages from "../Components/Messages/Messages";
// import { useState } from "react";

// function Chat() {

//   const [selectedContact, setSelectedContact] = useState(null);

//   const handleContactSelect = (contact) => {
//     setSelectedContact(contact);
//   };

//   return (
//     <>
//       <div className="chat-wrapper">
//         <SideBar></SideBar>

//            <Chats onSelectContact={handleContactSelect} />
//             <Messages selectedContact={selectedContact} />
//       </div>
//     </>
//   );
// }

// export default Chat;

import Chats from "../Components/Chats/Chats";
import SideBar2 from "../Components/SideBar2";
import Messages from "../Components/Messages/Messages";

import { useState } from "react";
import defaultAvatar from "../assets/avatar.svg";
import { useShare } from "../Components/ShareContext";
const defaultCurrentUser = {
  _id: "668d14a467de43c0bbbdb0d2", // Assign a unique ID
  name: "John Doe", // Assign a name or identifier
  avatar: { defaultAvatar }, // Provide a default avatar image
};

function Chat() {
  const [selectedContact, setSelectedContact] = useState(null);

  const [user, setUser] = useState(defaultCurrentUser);
  const { setRecipientUser } = useShare(); // Destructure from context
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setRecipientUser(contact); // Set the recipient user when a contact is selected
  };

  // const handleSetUser = (user) => {
  //   setUser(user);
  // };

  return (
    <>
      <div className="chat-wrapper">
        <SideBar2 />
        <Chats onSelectContact={handleContactSelect} />
        <Messages selectedContact={selectedContact} currentUser={user} />
      </div>
    </>
  );
}

export default Chat;
