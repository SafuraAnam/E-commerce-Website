//old correct code---------
// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import styles from "./ChatComponent.module.css";
// import defaultAvatar from "../../assets/avatar.svg";
// import productSource from "../../assets/productImage.jpg";
// import { FaStar } from "react-icons/fa";
// import streakIconImg from "../../assets/lightning-icon.svg";
// import messageSound from "../../assets/message-send-audio.mp3"; //

// const socket = io("http://localhost:8080"); // Replace with your server URL

// const ChatComponent = ({ currentUser, selectedContact }) => {
//   let audio;

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [room, setRoom] = useState(null);

//   useEffect(() => {
//     if (currentUser && selectedContact) {
//       const roomName = [currentUser._id, selectedContact._id].sort().join("-");
//       console.log(currentUser);
//       setRoom(roomName);
//       console.log(
//         "Emitting joinRoom with userId:",
//         currentUser._id,
//         "and contactId:",
//         selectedContact._id
//       );
//       socket.emit("joinRoom", {
//         userId: currentUser._id,
//         contactId: selectedContact._id,
//       });
//     }
//   }, [currentUser, selectedContact]);

//   useEffect(() => {
//     const handleReceiveMessage = (message) => {
//       if(message.currentUser.id!== currentUser._id){

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "text", content: message },
//       ]);
//     }
//     };

//     const handleReceiveImage = (image) => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "image", content: image },
//       ]);
//     };

//     const handleReceiveProduct = (product) => {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "product", content: product },
//       ]);
//     };

//     socket.on("receiveMessage", handleReceiveMessage);
//     socket.on("receiveImage", handleReceiveImage);
//     socket.on("receiveProduct", handleReceiveProduct);

//     return () => {
//       socket.off("receiveMessage", handleReceiveMessage);
//       socket.off("receiveImage", handleReceiveImage);
//       socket.off("receiveProduct", handleReceiveProduct);
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim()) {
//       socket.emit("sendMessage", { room, message: input });
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "text", content: input },
//       ]);
//       setInput("");
//       audio.play();
//     }
//   };

//   const sendImage = (image) => {
//     socket.emit("sendImage", { room, image });
//   };

//   const sendProduct = (product) => {
//     socket.emit("sendProduct", { room, product });
//   };

//   const contactName = selectedContact ? selectedContact.name : "";

//   return (
//     <div className={styles["chat-container"]}>
//       <div className={styles["chat-header"]}>
//         <img
//           src={defaultAvatar}
//           alt={contactName}
//           className={styles["profile-pic"]}
//         />
//         <h2>{contactName}</h2>
//         <span className={styles["edit-icon"]}>
//           <img className={styles["streak-icon"]} src={streakIconImg} />
//         </span>
//         <span className={styles["chat-notifications"]}>2</span>
//       </div>
//       <div className={styles["chat-body"]}>
//         <div className={styles["date"]}>Yesterday</div>
//         ME
//         <div className={styles["streak-product-card"]}>
//           <div className="product-card">
//             <img src={productSource} className="product-image" />
//             <div className="product-info">
//               <div className="rating">
//                 <span>4.0</span>
//                 <FaStar />
//                 <span>| 9.0k</span>
//               </div>
//               <h3 className="product-title">Roadster</h3>
//               <p className="product-description">Women Cargo Track Pants</p>
//               <div className="product-pricing">
//                 <span className="current-price">Rs. 781</span>
//                 <span className="original-price">Rs. 2499</span>
//                 <span className="discount">(66% OFF)</span>
//               </div>
//             </div>
//           </div>
//           <div className={styles["streak-count"]}>
//             <img src={streakIconImg} />
//             <span>1</span>
//           </div>
//         </div>
//         JOHN DOE
//         <div className={styles["streak-product-card"]}>
//           <div className="product-card">
//             <img src={productSource} className="product-image" />
//             <div className="product-info">
//               <div className="rating">
//                 <span>3.9</span>
//                 <FaStar />
//                 <span>| 2.8k</span>
//               </div>
//               <h3 className="product-title">Tokyo Talkies</h3>
//               <p className="product-description">Floral A-Line Midi Dress</p>
//               <div className="product-pricing">
//                 <span className="current-price">Rs. 649</span>
//                 <span className="original-price">Rs. 1499</span>
//                 <span className="discount">(50% OFF)</span>
//               </div>
//             </div>
//           </div>
//           <div className={styles["streak-count"]}>
//             <img src={streakIconImg} />
//             <span>1</span>
//           </div>
//         </div>
//         <div className={styles["date"]}>Today</div>
//         ME
//         <div className={styles["streak-product-card"]}>
//           <div className="product-card">
//             <img src={productSource} className="product-image" />
//             <div className="product-info">
//               <div className="rating">
//                 <span>4.4</span>
//                 <FaStar />
//                 <span>| 5.3k</span>
//               </div>
//               <h3 className="product-title">Kook N Keech</h3>
//               <p className="product-description">Typography Printed T-shirt</p>
//               <div className="product-pricing">
//                 <span className="current-price">Rs. 516</span>
//                 <span className="original-price">Rs. 1099</span>
//                 <span className="discount">(47% OFF)</span>
//               </div>
//             </div>
//           </div>
//           <div className={styles["streak-count"]}>
//             <img src={streakIconImg} />
//             <span>2</span>
//           </div>
//         </div>
//         JOHN DOE
//         <div className={styles["streak-product-card"]}>
//           <div className="product-card">
//             <img src={productSource} className="product-image" />
//             <div className="product-info">
//               <div className="rating">
//                 <span>4.1</span>
//                 <FaStar />
//                 <span>| 1.2k</span>
//               </div>
//               <h3 className="product-title">Levis</h3>
//               <p className="product-description">Solid V Neck T-shirt</p>
//               <div className="product-pricing">
//                 <span className="current-price">Rs. 299</span>
//                 <span className="original-price">Rs. 899</span>
//                 <span className="discount">(45% OFF)</span>
//               </div>
//             </div>
//           </div>
//           <div className={styles["streak-count"]}>
//             <img src={streakIconImg} />
//             <span>2</span>
//           </div>
//         </div>
//         {/* Real time chat logic below--------- */}
//         {messages.map((message, index) => (
//           <div key={index} className={styles["message"]}>
//             {message.type === "text" && message.content}
//             {message.type === "image" && (
//               <img src={message.content} alt="Shared" />
//             )}
//             {message.type === "product" && <div>{message.content}</div>}
//           </div>
//         ))}
//       </div>
//       <div className={styles["chat-input"]}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Message..."
//         />
//         <button onClick={sendMessage}>Send</button>

//         <audio ref={(element) => (audio = element)} src={messageSound} />
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;

// chat OG---------------------------------------------------
import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import styles from "./ChatComponent.module.css";
import defaultAvatar from "../../assets/avatar.svg";
import productSource from "../../assets/productImage.jpg";
import { FaStar } from "react-icons/fa";
import streakIconImg from "../../assets/lightning-icon.svg";
import messageSound from "../../assets/message-send-audio.mp3";
import { useShare } from "../ShareContext";
const socket = io("http://localhost:8080"); // Replace with your server URL

const ChatComponent = ({ currentUser, selectedContact }) => {
  const { sharedProduct, recipientUser, setSharedProduct } = useShare();
  const audioRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [room, setRoom] = useState(null);

  const chatBodyRef = useRef(null); // Ref for chat body container
  // Function to scroll chat body to the bottom
  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (currentUser && selectedContact) {
      const roomName = [currentUser._id, selectedContact._id].sort().join("-");
      console.log("in chat componentn", roomName);
      setRoom(roomName);
      socket.emit("joinRoom", {
        userId: currentUser._id,
        contactId: selectedContact._id,
      });
    }
  }, [currentUser, selectedContact]);

  useEffect(() => {
    const handleReceiveMessage = (message) => {
      if (message.currentUser.id !== currentUser._id) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "text", content: message.content },
        ]);
      }
    };

    const handleReceiveImage = (image) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "image", content: image },
      ]);
    };

    const handleReceiveProduct = (product) => {
      console.log("Product received:", product);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "product", content: product },
      ]);
    };

    socket.on("receiveMessage", handleReceiveMessage);
    socket.on("receiveImage", handleReceiveImage);
    socket.on("receiveProduct", handleReceiveProduct);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
      socket.off("receiveImage", handleReceiveImage);
      socket.off("receiveProduct", handleReceiveProduct);
    };
  }, [currentUser]);

  useEffect(() => {
    if (
      sharedProduct &&
      recipientUser &&
      recipientUser._id === selectedContact._id
    ) {
      if (room) {
        sendProduct(sharedProduct);
        console.log("Shared product:", sharedProduct);
        console.log("Recipient user:", recipientUser);
        console.log("Room:", room);
        setSharedProduct(null); // Reset shared product after sending
      } else {
        console.error("Room is not set. Cannot send product.");
      }
    }
  }, [sharedProduct, recipientUser, selectedContact, room, setSharedProduct]);

  // useEffect(() => {
  //   if (sharedProduct && recipientUser && recipientUser._id === selectedContact._id) {
  //     sendProduct(sharedProduct);
  //     console.log("Shared product:", sharedProduct);
  //     console.log("Recipient user:", recipientUser);
  //     setSharedProduct(null); // Reset shared product after sending
  //   }
  // }, [sharedProduct, recipientUser, selectedContact, setSharedProduct]);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("sendMessage", { room, message: input });
      console.log("in sendMessage", room);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "text", content: input },
      ]);
      setInput("");
      audioRef.current.play();
    }
  };

  const sendImage = (image) => {
    socket.emit("sendImage", { room, image });
  };

  const sendProduct = (product) => {
    console.log("in sendProduct", room);
    socket.emit("sendProduct", { room, product });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom when messages update
  }, [sharedProduct, messages]);

  const contactName = selectedContact ? selectedContact.name : "";

  return (
    <div className={styles["chat-container"]}>
      <div className={styles["chat-header"]}>
        <img
          src={defaultAvatar}
          alt={contactName}
          className={styles["profile-pic"]}
        />
        <h2>{contactName}</h2>
        <span className={styles["edit-icon"]}>
          <img
            className={styles["streak-icon"]}
            src={streakIconImg}
            alt="Streak"
          />
        </span>
        <span className={styles["chat-notifications"]}>99</span>
      </div>
      <div className={styles["chat-body"]} ref={chatBodyRef}>
        <div className={styles["date"]}>Yesterday</div>
        {/*  */}
        ME
        <div className={styles["streak-product-card"]}>
          <div className="product-card">
            <img
              src="http://localhost:8080/assets/product1.jpg"
              className="product-image"
              alt="Product"
            />
            <div className="product-info">
              <div className="rating">
                <span>4.0</span>
                <FaStar />
                <span>| 9.0k</span>
              </div>
              <h3 className="product-title">Roadster</h3>
              <p className="product-description">Women Cargo Track Pants</p>
              <div className="product-pricing">
                <span className="current-price">Rs. 781</span>
                <span className="original-price">Rs. 2499</span>
                <span className="discount">(66% OFF)</span>
              </div>
            </div>
          </div>
          <div className={styles["streak-count"]}>
            <img src={streakIconImg} alt="Streak" />
            <span>98</span>
          </div>
        </div>
        JOHN DOE
        <div className={styles["streak-product-card"]}>
          <div className="product-card">
            <img
              src="http://localhost:8080/assets/product2.jpg"
              className="product-image"
              alt="Product"
            />
            <div className="product-info">
              <div className="rating">
                <span>3.9</span>
                <FaStar />
                <span>| 2.8k</span>
              </div>
              <h3 className="product-title">Tokyo Talkies</h3>
              <p className="product-description">Floral A-Line Midi Dress</p>
              <div className="product-pricing">
                <span className="current-price">Rs. 649</span>
                <span className="original-price">Rs. 1499</span>
                <span className="discount">(50% OFF)</span>
              </div>
            </div>
          </div>
          <div className={styles["streak-count"]}>
            <img src={streakIconImg} alt="Streak" />
            <span>98</span>
          </div>
        </div>
        <div className={styles["date"]}>Today</div>
        ME
        <div className={styles["streak-product-card"]}>
          <div className="product-card">
            <img src={productSource} className="product-image" alt="Product" />
            <div className="product-info">
              <div className="rating">
                <span>4.4</span>
                <FaStar />
                <span>| 5.3k</span>
              </div>
              <h3 className="product-title">Kook N Keech</h3>
              <p className="product-description">Typography Printed T-shirt</p>
              <div className="product-pricing">
                <span className="current-price">Rs. 516</span>
                <span className="original-price">Rs. 1099</span>
                <span className="discount">(47% OFF)</span>
              </div>
            </div>
          </div>
          <div className={styles["streak-count"]}>
            <img src={streakIconImg} alt="Streak" />
            <span>99</span>
          </div>
        </div>
        JOHN DOE
        <div className={styles["streak-product-card"]}>
          <div className="product-card">
            <img
              src="http://localhost:8080/assets/product5.jpg"
              className="product-image"
              alt="Product"
            />
            <div className="product-info">
              <div className="rating">
                <span>4.1</span>
                <FaStar />
                <span>| 1.2k</span>
              </div>
              <h3 className="product-title">Levis</h3>
              <p className="product-description">Solid V Neck T-shirt</p>
              <div className="product-pricing">
                <span className="current-price">Rs. 299</span>
                <span className="original-price">Rs. 899</span>
                <span className="discount">(45% OFF)</span>
              </div>
            </div>
          </div>
          <div className={styles["streak-count"]}>
            <img src={streakIconImg} alt="Streak" />
            <span>99</span>
          </div>
        </div>
        {/*  */}
        {/* Real-time chat logic */}
        {messages.map((message, index) => (
          <div key={index} className={styles["message"]}>
            {message.type === "text" && message.content}
            {message.type === "image" && (
              <img src={message.content} alt="Shared" />
            )}
            {message.type === "product" && (
              <div className="my-new-div">
                <div className="product-card">
                  <img
                    src={message.content.image}
                    className="product-image"
                    alt="Shared Product"
                  />
                  <div className="product-info">
                    <div className="rating">
                      <span>{message.content.rating}</span>
                      <FaStar />
                      <span>| {message.content.reviews}</span>
                    </div>
                    <h3 className="product-title">{message.content.title}</h3>
                    <p className="product-description">
                      {message.content.description}
                    </p>
                    <div className="product-pricing">
                      <span className="current-price">
                        Rs. {message.content.currentPrice}
                      </span>
                      <span className="original-price">
                        Rs. {message.content.originalPrice}
                      </span>
                      <span className="discount">
                        ({message.content.discount}% OFF)
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles["streak-count"]}>
                  <img src={streakIconImg} alt="Streak" />
                  <span>100</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles["chat-input"]}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message..."
        />
        <button onClick={sendMessage}>Send</button>
        <audio ref={audioRef} src={messageSound} />
      </div>
    </div>
  );
};

export default ChatComponent;
