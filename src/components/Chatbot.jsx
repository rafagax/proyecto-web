import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import chatbotImg from '../assets/ia-bot-transparent.png';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';

const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();
};

const getBotResponse = (userText, intents, fallback) => {
  const textLower = normalizeText(userText);

  for (const intent of intents) {
    if (intent.keywords.some((keyword) => textLower.includes(normalizeText(keyword)))) {
      return intent.response;
    }
  }

  return fallback;
};

const formatMessage = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      let displayText = part;
      // If it's a WhatsApp link, show the formatted number
      if (part.includes('wa.me')) {
        displayText = '📲 +58 414 473 5431';
      } else if (part.length > 40) {
        displayText = part.substring(0, 37) + '...';
      }
      return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="ka-chat-link">{displayText}</a>;
    }
    return part;
  });
};

const Chatbot = () => {
  const { content } = useLocalizedContent();
  const cb = content.chatbot;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState && isFirstOpen) {
      setMessages([{ text: cb.intents[0].response, sender: 'bot' }]);
      setIsFirstOpen(false);
    }

    if (newState) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { text, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: getBotResponse(text, cb.intents, cb.fallback), sender: 'bot' }]);
    }, 650);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(inputValue);
  };

  const handleQuickReply = (question) => {
    handleSend(question);
  };

  return (
    <div id="ka-chatbot-container">
      <button id="ka-chatbot-toggle" aria-label={cb.ui.openAria} onClick={toggleChat}>
        <img src={chatbotImg} alt={cb.ui.avatarAlt} id="ka-avatar-img" />
        <span id="ka-chatbot-pulse"></span>
      </button>

      <div id="ka-chatbot-window" className={!isOpen ? 'ka-hidden' : ''}>
        <div id="ka-chatbot-header">
          <div className="ka-header-info">
            <strong>{cb.ui.headerTitle}</strong>
            <span>{cb.ui.headerSubtitle}</span>
          </div>
          <button id="ka-chatbot-close" aria-label={cb.ui.closeAria} onClick={toggleChat}>✕</button>
        </div>

        <div id="ka-chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`ka-msg ${msg.sender === 'bot' ? 'ka-msg-bot' : 'ka-msg-user'}`}>
              {formatMessage(msg.text)}
            </div>
          ))}
          {isTyping && (
            <div className="ka-typing" id="ka-typing">
              {cb.ui.typing}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div id="ka-chatbot-quick">
          {cb.quickReplies.map((reply, i) => (
            <button key={i} type="button" onClick={() => handleQuickReply(reply.value)}>{reply.label}</button>
          ))}
        </div>

        <form id="ka-chatbot-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="ka-chatbot-input"
            placeholder={cb.ui.placeholder}
            autoComplete="off"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
          <button type="submit" id="ka-chatbot-send" aria-label={cb.ui.sendAria}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
