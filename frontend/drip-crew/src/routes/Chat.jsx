import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Chats from "../Components/Chats/Chats";
import SideBar2 from "../Components/SideBar2";
import Messages from "../Components/Messages/Messages";
import { useState } from "react";

function Chat() {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <>
      <div className="chat-wrapper">
        <SideBar2></SideBar2>

        <Chats onSelectContact={handleContactSelect} />
        <Messages selectedContact={selectedContact} />
      </div>
    </>
  );
}

export default Chat;
