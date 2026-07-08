import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Chatbot.css';
import chatbotImg from '../assets/ia-bot-transparent.png';
import { useLocalizedContent } from '../i18n/useLocalizedContent.js';
import { sendContactEmail } from '../config/forms.js';

// Loose email detector for lead capture — any message containing something that
// looks like an address counts, so visitors are never forced through a rigid step.
const EMAIL_REGEX = /[^\s@]+@[^\s@]+\.[^\s@]{2,}/;

const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();
};

// Return the first intent whose keywords match the user text, or null so the
// caller can fall back to cb.fallback.
const matchIntent = (userText, intents) => {
  const textLower = normalizeText(userText);

  for (const intent of intents) {
    if (intent.keywords.some((keyword) => textLower.includes(normalizeText(keyword)))) {
      return intent;
    }
  }

  return null;
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
  const toggleRef = useRef(null);
  // Lead-capture bookkeeping. Refs (not state): they never affect rendering.
  const leadPromptShownRef = useRef(false);
  const leadSentRef = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const openChat = () => {
    setIsOpen(true);

    if (isFirstOpen) {
      setMessages([{ text: cb.intents[0].response, sender: 'bot' }]);
      setIsFirstOpen(false);
    }

    setTimeout(() => inputRef.current?.focus(), 200);
  };

  const closeChat = () => {
    setIsOpen(false);
    // Return focus to the launcher so keyboard users aren't left on a hidden control.
    toggleRef.current?.focus();
  };

  const toggleChat = () => (isOpen ? closeChat() : openChat());

  // Close the window with Escape while it is open.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const addBotMessage = (message) => {
    setMessages(prev => [...prev, { sender: 'bot', ...message }]);
  };

  // Send the captured email to the owner (Web3Forms email + Telegram ping via
  // /telegram-notify.php) reusing the exact payload shape of the contact forms.
  // On failure, degrade gracefully by pointing to the localized contact form.
  const submitLead = async (email, questions) => {
    setIsTyping(true);
    try {
      await sendContactEmail({
        name: '',
        email,
        phone: '',
        message: `Lead capturado por el chatbot.\nPreguntas del visitante: ${questions.join(' | ') || '(ninguna)'}`,
        page: 'Chatbot',
      });
      leadSentRef.current = true;
      setIsTyping(false);
      addBotMessage({ text: cb.leadCapture.success });
    } catch {
      setIsTyping(false);
      addBotMessage({
        text: cb.leadCapture.error,
        link: { href: cb.leadCapture.contactPath, label: cb.leadCapture.errorLinkLabel },
      });
    }
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { text, sender: 'user' }]);
    setInputValue('');

    // Lead capture: a message containing an email means the visitor is leaving
    // their contact (usually after cb.leadCapture.prompt). Only the first one is sent.
    const emailMatch = !leadSentRef.current && text.match(EMAIL_REGEX);
    if (emailMatch) {
      const questions = messages.filter((m) => m.sender === 'user').map((m) => m.text);
      submitLead(emailMatch[0], [...questions, text]);
      return;
    }

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const intent = matchIntent(text, cb.intents);
      addBotMessage({
        text: intent ? intent.response : cb.fallback,
        ...(intent?.cta ? { link: { href: intent.cta.path, label: intent.cta.label } } : {}),
      });
      // After a high-intent answer (pricing, "I want a website"), offer once to
      // take the visitor's email so the conversation isn't lost.
      if (intent?.leadCapture && !leadPromptShownRef.current && !leadSentRef.current) {
        leadPromptShownRef.current = true;
        setTimeout(() => addBotMessage({ text: cb.leadCapture.prompt }), 900);
      }
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
      <button
        id="ka-chatbot-toggle"
        ref={toggleRef}
        aria-label={isOpen ? cb.ui.closeAria : cb.ui.openAria}
        aria-expanded={isOpen}
        aria-controls="ka-chatbot-window"
        onClick={toggleChat}
      >
        <img src={chatbotImg} alt={cb.ui.avatarAlt} id="ka-avatar-img" width={120} height={120} />
        <span id="ka-chatbot-pulse"></span>
      </button>

      {/* inert + .ka-hidden (visibility) keep the closed window out of the tab order. */}
      <div
        id="ka-chatbot-window"
        className={!isOpen ? 'ka-hidden' : ''}
        role="dialog"
        aria-label={cb.ui.headerTitle}
        inert={!isOpen}
      >
        <div id="ka-chatbot-header">
          <div className="ka-header-info">
            <strong>{cb.ui.headerTitle}</strong>
            <span>{cb.ui.headerSubtitle}</span>
          </div>
          <button id="ka-chatbot-close" aria-label={cb.ui.closeAria} onClick={closeChat}>✕</button>
        </div>

        <div id="ka-chatbot-messages" role="log" aria-live="polite">
          {messages.map((msg, index) => (
            <div key={index} className={`ka-msg ${msg.sender === 'bot' ? 'ka-msg-bot' : 'ka-msg-user'}`}>
              {formatMessage(msg.text)}
              {msg.link && (
                <Link to={msg.link.href} className="ka-chat-link ka-chat-cta" onClick={closeChat}>
                  {msg.link.label}
                </Link>
              )}
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
