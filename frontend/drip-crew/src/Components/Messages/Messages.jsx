

import ChatComponent from "../ChatComponent/ChatComponent";
import EmptyMessage from "../EmptyMessage/EmptyMessage";

const Messages = ({ selectedContact, currentUser }) => {

  return (
    <> 
   
      {selectedContact ? (
        <ChatComponent currentUser={currentUser} selectedContact={selectedContact} />

      ) : (
        <EmptyMessage  />
      )}
    </>
  );
};

export default Messages;



