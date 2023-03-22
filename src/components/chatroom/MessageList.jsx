import React, { useState } from 'react';
import ChatWindow from './Chatwindows';



const MessageList = ({ messages }) => {
  return (
    <div className="">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
};

const MessageItem = ({ message }) => {
  // const messageClass = message.fromMe ? "from-me" : "from-others";className={`message-item ${messageClass}`}
  return (
    <div>
      <div className="message-content text-green-700">{message}</div>
    </div>
  );
};

export default MessageList;
