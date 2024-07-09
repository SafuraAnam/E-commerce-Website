import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Chats from "../Components/Chats/Chats";
import SideBar from "../Components/SideBar";

function Chat() {
  return (
    <>
      <div className="chat-wrapper">
        <SideBar></SideBar>
        <Chats></Chats>
      </div>
    </>
  );
}

export default Chat;
