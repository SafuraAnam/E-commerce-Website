// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import styles from './ChatComponent.module.css';
// import defaultAvatar from "../../assets/avatar.svg";

// const socket = io("http://localhost:8080"); // Replace with your server URL

// const ChatComponent = ({ currentUser, selectedContact }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [room, setRoom] = useState(null);

//   useEffect(() => {
//     if (currentUser && selectedContact) {
//       const roomName = [currentUser._id, selectedContact._id].sort().join('-');
//       setRoom(roomName);
//       socket.emit("joinRoom", { userId: currentUser._id, contactId: selectedContact._id });
//     }
//   }, [currentUser, selectedContact]);

//   useEffect(() => {
//     socket.on("receiveMessage", (message) => {
//       setMessages((prevMessages) => [...prevMessages, { type: "text", content: message }]);
//     });

//     socket.on("receiveImage", (image) => {
//       setMessages((prevMessages) => [...prevMessages, { type: "image", content: image }]);
//     });

//     socket.on("receiveProduct", (product) => {
//       setMessages((prevMessages) => [...prevMessages, { type: "product", content: product }]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//       socket.off("receiveImage");
//       socket.off("receiveProduct");
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim()) {
//       socket.emit("sendMessage", { room, message: input });
//       setMessages((prevMessages) => [...prevMessages, { type: "text", content: input }]);
//       setInput("");
//     }
//   };

//   const sendImage = (image) => {
//     socket.emit("sendImage", { room, image });
//   };

//   const sendProduct = (product) => {
//     socket.emit("sendProduct", { room, product });
//   };

//   const contactName = selectedContact ? selectedContact.name : '';

//   return (
//     <div className={styles['chat-container']}>
//       <div className={styles['chat-header']}>
//         <img src={defaultAvatar} alt={contactName} className={styles['profile-pic']}/>
//         <h2>{contactName}</h2>
//         <span className={styles['edit-icon']}>✏️</span>
//         <span className={styles['chat-notifications']}>100</span>
//       </div>
//       <div className={styles['chat-body']}>
//         {messages.map((message, index) => (
//           <div key={index} className={styles['message']}>
//             {message.type === "text" && message.content}
//             {message.type === "image" && <img src={message.content} alt="Shared" />}
//             {message.type === "product" && <div>{message.content}</div>}
//           </div>
//         ))}
//       </div>
//       <div className={styles['chat-input']}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import styles from "./ChatComponent.module.css";
import defaultAvatar from "../../assets/avatar.svg";
import productSource from "../../assets/productImage.jpg";
import { FaStar } from "react-icons/fa";
import streakIconImg from "../../assets/lightning-icon.svg";

const socket = io("http://localhost:8080"); // Replace with your server URL

const ChatComponent = ({ currentUser, selectedContact }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (currentUser && selectedContact) {
      const roomName = [currentUser._id, selectedContact._id].sort().join("-");
      console.log(currentUser);
      setRoom(roomName);
      console.log(
        "Emitting joinRoom with userId:",
        currentUser._id,
        "and contactId:",
        selectedContact._id
      );
      socket.emit("joinRoom", {
        userId: currentUser._id,
        contactId: selectedContact._id,
      });
    }
  }, [currentUser, selectedContact]);

  useEffect(() => {
    const handleReceiveMessage = (message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "text", content: message },
      ]);
    };

    const handleReceiveImage = (image) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "image", content: image },
      ]);
    };

    const handleReceiveProduct = (product) => {
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
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("sendMessage", { room, message: input });
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "text", content: input },
      ]);
      setInput("");
    }
  };

  const sendImage = (image) => {
    socket.emit("sendImage", { room, image });
  };

  const sendProduct = (product) => {
    socket.emit("sendProduct", { room, product });
  };

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
          <img className={styles["streak-icon"]} src={streakIconImg} />
        </span>
        <span className={styles["chat-notifications"]}>2</span>
      </div>
      <div className={styles["chat-body"]}>
        <div className={styles["date"]}>Yesterday</div>
        ME
        <div className={styles["streak-product-card"]}>
          <div className="product-card">
            <img src={productSource} className="product-image" />
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
            <img src={streakIconImg} />
            <span>1</span>
          </div>
        </div>
        JOHN DOE
        <div className={styles["streak-product-card"]}>
          <div className="product-card">
            <img src={productSource} className="product-image" />
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
            <img src={streakIconImg} />
            <span>1</span>
          </div>
        </div>
        <div className={styles["date"]}>Today</div>
        ME
        <div className={styles["streak-product-card"]}>
          <div className="product-card">
            <img src={productSource} className="product-image" />
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
            <img src={streakIconImg} />
            <span>2</span>
          </div>
        </div>
        JOHN DOE
        <div className={styles["streak-product-card"]}>
          <div className="product-card">
            <img src={productSource} className="product-image" />
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
            <img src={streakIconImg} />
            <span>2</span>
          </div>
        </div>
        {/* Real time chat logic below--------- */}
        {messages.map((message, index) => (
          <div key={index} className={styles["message"]}>
            {message.type === "text" && message.content}
            {message.type === "image" && (
              <img src={message.content} alt="Shared" />
            )}
            {message.type === "product" && <div>{message.content}</div>}
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
      </div>
    </div>
  );
};

export default ChatComponent;
