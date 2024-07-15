import Chats from "../Components/Chats/Chats";
import SideBar2 from "../Components/SideBar2";
import Messages from "../Components/Messages/Messages";

import { useState } from "react";
import defaultAvatar from "../assets/avatar.svg";
import { useShare } from "../Components/ShareContext";
const defaultCurrentUser = {
  _id: "668d14a467de43c0bbbdb0d2",
  name: "John Doe",
  avatar: { defaultAvatar },
};

function Chat() {
  const [selectedContact, setSelectedContact] = useState(null);

  const [user, setUser] = useState(defaultCurrentUser);
  const { setRecipientUser } = useShare();
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setRecipientUser(contact);
  };

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
