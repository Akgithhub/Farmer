import React, { useState } from "react";
import Footer from "./Footer";

const Comment = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "User1", text: "Hello there!" },
    { id: 2, user: "User2", text: "Hi! How are you?" },
    // Add more messages for testing
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    setMessages([
      ...messages,
      { id: messages.length + 1, user: "User3", text: newMessage },
    ]);
    setNewMessage("");
  };

  return (
    <>
      <div className="comment-container m-auto bg-[#cbe6be] w-[70%] h-[80vh] rounded-t-3xl p-6 flex flex-col">
        <div className="messages flex-1 overflow-auto mb-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="message mb-4 p-2 bg-white rounded-lg shadow-sm"
            >
              <p className="user font-bold">{msg.user}:</p>
              <p className="text">{msg.text}</p>
            </div>
          ))}
        </div>
        <form
          className="input-form flex items-center"
          onSubmit={handleSendMessage}
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded-l-lg"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-lg"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Comment;
