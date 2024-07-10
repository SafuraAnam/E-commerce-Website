import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Chats from "../Components/Chats/Chats";
import SideBar2 from "../Components/SideBar2";

function Chat() {
  return (
    <>
      <div className="chat-wrapper">
        <SideBar2></SideBar2>
        <Chats></Chats>
      </div>
    </>
  );
}

export default Chat;
