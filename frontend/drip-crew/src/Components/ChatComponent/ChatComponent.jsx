import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styles from './ChatComponent.module.css';
import defaultAvatar from "../../assets/avatar.svg";

const socket = io("http://localhost:8080"); // Replace with your server URL

const ChatComponent = ({ currentUser, selectedContact }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (currentUser && selectedContact) {
      const roomName = [currentUser._id, selectedContact._id].sort().join('-');
      setRoom(roomName);
      socket.emit("joinRoom", { userId: currentUser._id, contactId: selectedContact._id });
    }
  }, [currentUser, selectedContact]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, { type: "text", content: message }]);
    });

    socket.on("receiveImage", (image) => {
      setMessages((prevMessages) => [...prevMessages, { type: "image", content: image }]);
    });

    socket.on("receiveProduct", (product) => {
      setMessages((prevMessages) => [...prevMessages, { type: "product", content: product }]);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("receiveImage");
      socket.off("receiveProduct");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("sendMessage", { room, message: input });
      setMessages((prevMessages) => [...prevMessages, { type: "text", content: input }]);
      setInput("");
    }
  };

  const sendImage = (image) => {
    socket.emit("sendImage", { room, image });
  };

  const sendProduct = (product) => {
    socket.emit("sendProduct", { room, product });
  };

  const contactName = selectedContact ? selectedContact.name : '';

  return (
    <div className={styles['chat-container']}>
      <div className={styles['chat-header']}>
        <img src={defaultAvatar} alt={contactName} className={styles['profile-pic']}/>
        <h2>{contactName}</h2>
        <span className={styles['edit-icon']}>✏️</span>
        <span className={styles['chat-notifications']}>100</span>
      </div>
      <div className={styles['chat-body']}>
        {messages.map((message, index) => (
          <div key={index} className={styles['message']}>
            {message.type === "text" && message.content}
            {message.type === "image" && <img src={message.content} alt="Shared" />}
            {message.type === "product" && <div>{message.content}</div>}
          </div>
        ))}
      </div>
      <div className={styles['chat-input']}>
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
