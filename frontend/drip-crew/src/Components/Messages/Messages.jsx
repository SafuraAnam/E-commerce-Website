// import ChatComponent from "../ChatComponent/ChatComponent";
// import EmptyMessage from "../EmptyMessage/EmptyMessage";

// // const Messages =()=>{
// //     return(
// //         <>
// //           <EmptyMessage></EmptyMessage>
// //           <ChatComponent/>
// //         </>
      
// //     )
// // }

// const Messages = ({ selectedContact }) => {
//   return (
//     <>
//       {selectedContact ? (
//         <ChatComponent selectedContact={selectedContact} />
//       ) : (
//         <EmptyMessage />
//       )}

//     </>

//   );
// };


// export default Messages;

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

