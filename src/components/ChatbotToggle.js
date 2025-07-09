import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';

import './ChatbotToggle.css';

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot-toggle">
      {isOpen && (
        <div className="chatbot-box">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}

      <button className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
    </div>
  );
};

export default ChatbotToggle;
