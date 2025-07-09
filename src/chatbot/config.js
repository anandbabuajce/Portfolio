import { createChatBotMessage } from 'react-chatbot-kit';

const botName = "TinyBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi 👋 I'm ${botName}. Ask me about skills, projects, achievements, contact, education or even a joke!`
    )
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#ff6700',
    },
    chatButton: {
      backgroundColor: '#ff6700',
    },
  },
  customComponents: {
   botAvatar: () => (
  <div style={{
    background: '#fff',
    color: '#ff6700',
    fontWeight: 'bold',
    padding: '6px 10px',
    borderRadius: '50%',
    marginLeft: '-30px', // << this spacing
  }}>
    🤖
  </div>
)

  },
};

export default config;
