import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import chatbotImg from '../assets/chatbot-imagen.png';

const whatsappNumber = '584144735431';
const emailContact = 'inversionesdigitales@hotmail.es';
const locationBusiness = 'Maracay, Aragua, Venezuela';

const knowledgeBase = [
  {
    keywords: ['hola', 'buenos', 'buenas', 'hey', 'saludos', 'informacion', 'información', 'ayuda', 'asesoria', 'asesoría'],
    response: `¡Hola! 👋 Soy el asistente virtual de Inversiones Digitales.\n\nTe puedo ayudar con información sobre creación de páginas web, planes, precios, entrega en 7 días, SEO local, IA integrada, chatbot, tienda online y contacto directo.\n\n¿Qué tipo de página web necesitas para tu negocio?`
  },
  {
    keywords: ['7 dias', 'siete dias', 'tiempo', 'cuanto tarda', 'cuánto tarda', 'entrega', 'rapido', 'rápido', 'lista', 'plazo'],
    response: `Tu diseño web puede estar listo en tan solo 7 días, dependiendo del tipo de proyecto, la cantidad de secciones y la información que necesites incluir.\n\nTrabajamos con un proceso rápido, ordenado y profesional para que puedas comenzar a mostrar tu negocio en internet cuanto antes.`
  },
  {
    keywords: ['quienes son', 'quiénes son', 'empresa', 'inversiones digitales', 'nosotros', 'que hacen', 'qué hacen'],
    response: `Somos Inversiones Digitales, especialistas en diseño y desarrollo web de alto rendimiento.\n\nTransformamos tu visión en una experiencia digital profesional, moderna y estratégica para que tu negocio gane presencia, confianza y más oportunidades de venta.`
  },
  {
    keywords: ['pagina web', 'página web', 'sitio web', 'web', 'quiero una web', 'hacer una pagina', 'crear pagina', 'necesito una pagina', 'desarrollo web'],
    response: `¡Excelente elección! 🚀\n\nEn Inversiones Digitales creamos páginas web modernas, rápidas y estratégicas para que tu negocio transmita profesionalismo y atraiga más clientes.\n\nPodemos desarrollar Landing Pages, Webs Empresariales o Tiendas Online en tiempo récord.\n\n¿Te gustaría agendar una **CONSULTA GRATIS** por WhatsApp para asesorarte con tu proyecto?\n\n Haz clic aquí para chatear:\nhttps://wa.me/584144735431?text=Hola+me+gustaria+agendar+una+asesoria+gratuita`
  },
  {
    keywords: ['servicios', 'que ofrecen', 'qué ofrecen', 'incluye', 'beneficios', 'soluciones digitales'],
    response: `Nuestros servicios están enfocados en hacer crecer tu marca en internet.\n\nOfrecemos:\n\n✅ Presencia digital profesional\n✅ Desarrollo web rápido y profesional\n✅ Optimización para aumentar ventas\n✅ Posicionamiento SEO local\n✅ Integración con WhatsApp\n✅ Formularios de contacto\n✅ Chatbot con IA\n✅ Tiendas online\n✅ Automatizaciones digitales`
  },
  {
    keywords: ['presencia digital', 'profesionalismo', 'imagen profesional', 'marca', 'confianza', 'negocio profesional'],
    response: `Desarrollamos una página web moderna, clara y atractiva que fortalece la imagen de tu negocio, genera confianza en tus clientes y hace que tu marca transmita profesionalismo desde el primer clic.\n\nUna buena web ayuda a que tu negocio se vea más serio, competitivo y preparado para vender.`
  },
  {
    keywords: ['ventas', 'aumento de ventas', 'vender mas', 'vender más', 'conversiones', 'clientes', 'atraer clientes'],
    response: `Aplicamos estrategias de posicionamiento geo-local y optimización web para que tu negocio gane más visibilidad, atraiga clientes de tu zona, aparezca mejor en Google y aumente sus posibilidades de ser recomendado por la IA.\n\nEl objetivo es que tu página web no solo se vea bien, sino que también ayude a generar contactos y oportunidades reales de venta.`
  },
  {
    keywords: ['google', 'seo', 'posicionamiento', 'busqueda', 'búsqueda', 'aparecer en google', 'primeros lugares', 'local', 'seo local', 'geo local', 'geolocal'],
    response: `Sí, trabajamos posicionamiento SEO local para que tu negocio tenga más visibilidad en Google y pueda atraer clientes de tu zona.\n\nDependiendo del plan, podemos incluir optimización SEO local básica o avanzada para mejorar la estructura, el contenido y la presencia digital de tu negocio.`
  },
  {
    keywords: ['ia', 'inteligencia artificial', 'recomendado por ia', 'chatgpt', 'recomiende', 'recomendacion', 'recomendación', 'ia integrada'],
    response: `Sí, desarrollamos sitios web con enfoque en tecnología e IA.\n\nUna web bien estructurada, clara y optimizada ayuda a que tu negocio tenga más posibilidades de ser entendido, encontrado y recomendado por herramientas digitales e inteligencia artificial.\n\nTambién podemos integrar chatbot para responder preguntas frecuentes y captar clientes.`
  },
  {
    keywords: ['chatbot', 'bot', 'asistente virtual', 'automatizacion', 'automatización', 'responder clientes', 'whatsapp automatico', 'whatsapp automático'],
    response: `Podemos integrar un chatbot o asistente virtual para responder preguntas frecuentes, orientar a tus clientes y ayudarte a captar oportunidades incluso fuera del horario laboral.\n\nEs ideal para explicar servicios, mostrar planes, enviar datos de contacto y guiar al usuario hacia WhatsApp o formulario.`
  },
  {
    keywords: ['planes', 'precios', 'precio', 'plan', 'costo', 'cuanto cuesta', 'cuánto cuesta', 'tarifa', 'paquetes', 'basico', 'básico', '599', '1500', '299'],
    response: `¡Oferta especial solo por esta semana! \n\nCrea tu sitio web profesional con **50% de descuento** y paga solo **$149.99**.\n\nHaz que tu negocio se vea más confiable, moderno y preparado para recibir clientes.\n\n Aprovecha esta promoción antes de que finalice:\nhttps://wa.me/584144735431?text=Hola+me+gustaria+aprovechar+la+oferta+de+149`
  },
  {
    keywords: ['dominio', 'hosting', 'correo corporativo', 'servidor'],
    response: `Sí, podemos orientarte con dominio y hosting.\n\nEl Plan Pyme incluye dominio y hosting por 1 año. En otros planes también podemos ayudarte a gestionarlo según las necesidades de tu proyecto.\n\nTener dominio propio ayuda a que tu negocio se vea más profesional y confiable.`
  },
  {
    keywords: ['whatsapp', 'contacto', 'asesor', 'humano', 'correo', 'email', 'llamar', 'cotizar', 'cotizacion', 'cotización', 'agendar', 'consulta gratis'],
    response: `Claro, puedes contactarnos directamente para recibir asesoría gratuita.\n\n WhatsApp: +58 414 473 5431\n📧 Email: ${emailContact}\n📍 Ubicación: ${locationBusiness}\n\nTambién puedes escribirnos por WhatsApp aquí:\nhttps://wa.me/${whatsappNumber}\n\nCuéntanos qué tipo de página web necesitas y te orientamos con gusto.`
  },
  {
    keywords: ['ubicacion', 'ubicación', 'donde estan', 'dónde están', 'maracay', 'venezuela', 'aragua'],
    response: `Estamos ubicados en Maracay, Aragua, Venezuela.\n\nTambién podemos atender proyectos a distancia para clientes en Venezuela, Estados Unidos, España y otros países.`
  },
  {
    keywords: ['clientes', 'testimonios', 'reseñas', 'opiniones', 'google reseñas', 'calificacion', 'calificación'],
    response: `Nuestros clientes nos califican con 4.9/5 en reseñas.\n\nHan destacado la rapidez de entrega, el diseño profesional, la integración de automatizaciones, el SEO local y el soporte durante el proceso.\n\nTrabajamos con negocios en Venezuela, Estados Unidos y España.`
  },
  {
    keywords: ['bilingue', 'bilingüe', 'ingles', 'inglés', 'espanol', 'español', 'hispano'],
    response: `Sí, podemos desarrollar páginas web bilingües en español e inglés.\n\nEs una excelente opción si tu negocio atiende público hispano, clientes internacionales o deseas proyectar una imagen más profesional en distintos mercados.`
  },
  {
    keywords: ['formulario', 'formulario de contacto', 'boton whatsapp', 'botón whatsapp', 'redes sociales', 'instagram', 'facebook'],
    response: `Sí, podemos integrar formulario de contacto, botón de WhatsApp y enlaces a tus redes sociales.\n\nLa idea es que tus visitantes puedan comunicarse contigo de forma rápida y sencilla desde cualquier dispositivo.`
  },
  {
    keywords: ['mantenimiento', 'soporte', 'cambios', 'actualizaciones', 'postventa'],
    response: `Podemos ofrecer soporte según el tipo de proyecto contratado.\n\nEn el Plan E-Commerce se incluye soporte prioritario por 1 mes. Para otros planes, podemos orientarte sobre opciones de mantenimiento, cambios o actualizaciones según lo que necesites.`
  }
];

const fallbackResponse = `Gracias por escribirme. Puedo ayudarte con información sobre:\n\n✅ Creación de páginas web\n✅ Plan Básico, Pyme y E-Commerce\n✅ Entrega en 7 días\n✅ SEO local y Google\n✅ Chatbot e IA integrada\n✅ WhatsApp, formularios y contacto\n\n WhatsApp: +58 414 473 5431\n📧 Email: ${emailContact}\n\nCuéntame un poco más sobre lo que necesitas y te oriento.`;

const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

const getBotResponse = (userText) => {
  const textLower = normalizeText(userText);

  for (const intent of knowledgeBase) {
    if (intent.keywords.some(keyword => textLower.includes(normalizeText(keyword)))) {
      return intent.response;
    }
  }

  return fallbackResponse;
};

const formatMessage = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      let displayText = part;
      // Si es un link de WhatsApp, mostrar el número formateado
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
      setMessages([{ text: knowledgeBase[0].response, sender: 'bot' }]);
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
      setMessages(prev => [...prev, { text: getBotResponse(text), sender: 'bot' }]);
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
      <button id="ka-chatbot-toggle" aria-label="Abrir chat" onClick={toggleChat}>
        <img src={chatbotImg} alt="Asistente Virtual Inversiones Digitales" id="ka-avatar-img" />
        <span id="ka-chatbot-pulse"></span>
      </button>

      <div id="ka-chatbot-window" className={!isOpen ? 'ka-hidden' : ''}>
        <div id="ka-chatbot-header">
          <div className="ka-header-info">
            <strong>Asistente Virtual</strong>
            <span>Inversiones Digitales</span>
          </div>
          <button id="ka-chatbot-close" aria-label="Cerrar chat" onClick={toggleChat}>✕</button>
        </div>

        <div id="ka-chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`ka-msg ${msg.sender === 'bot' ? 'ka-msg-bot' : 'ka-msg-user'}`}>
              {formatMessage(msg.text)}
            </div>
          ))}
          {isTyping && (
            <div className="ka-typing" id="ka-typing">
              El asistente está escribiendo...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div id="ka-chatbot-quick">
          <button type="button" onClick={() => handleQuickReply('Quiero una página web')}>Quiero una web</button>
          <button type="button" onClick={() => handleQuickReply('Cuáles son los planes y precios')}>Planes y precios</button>
          <button type="button" onClick={() => handleQuickReply('Cuánto tarda mi página web')}>Tiempo de entrega</button>
        </div>

        <form id="ka-chatbot-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="ka-chatbot-input"
            placeholder="Escribe tu consulta aquí..."
            autoComplete="off"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
          <button type="submit" id="ka-chatbot-send" aria-label="Enviar mensaje">
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
