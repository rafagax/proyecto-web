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
    keywords: ['quienes son', 'quiénes son', 'empresa', 'inversiones digitales', 'nosotros', 'que hacen', 'qué hacen'],
    response: `Somos Inversiones Digitales, especialistas en diseño y desarrollo web de alto rendimiento.\n\nTransformamos tu visión en una experiencia digital profesional, moderna y estratégica para que tu negocio gane presencia, confianza y más oportunidades de venta.`
  },
  {
    keywords: ['pagina web', 'página web', 'sitio web', 'web', 'quiero una web', 'hacer una pagina', 'crear pagina', 'necesito una pagina', 'desarrollo web'],
    response: `¡Excelente! 🚀\n\nEn Inversiones Digitales creamos páginas web modernas, rápidas y adaptadas a todos los dispositivos, pensadas para transmitir profesionalismo, generar confianza y ayudar a que más clientes elijan tus servicios.\n\nPodemos desarrollar landing pages, páginas empresariales, sitios multi-página y tiendas online.`
  },
  {
    keywords: ['7 dias', 'siete dias', 'tiempo', 'cuanto tarda', 'cuánto tarda', 'entrega', 'rapido', 'rápido', 'lista', 'plazo'],
    response: `Tu diseño web puede estar listo en tan solo 7 días, dependiendo del tipo de proyecto, la cantidad de secciones y la información que necesites incluir.\n\nTrabajamos con un proceso rápido, ordenado y profesional para que puedas comenzar a mostrar tu negocio en internet cuanto antes.`
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
    keywords: ['planes', 'precios', 'precio', 'plan', 'costo', 'cuanto cuesta', 'cuánto cuesta', 'tarifa', 'paquetes'],
    response: `Tenemos 3 planes principales:\n\n💠 Plan Básico — $299\nIdeal para empezar. Incluye landing page de 5 secciones, diseño responsivo, botón de WhatsApp, formulario de contacto y posicionamiento SEO local.\n\n💠 Plan Pyme — $599\nIdeal para negocios en crecimiento. Incluye web multi-página de hasta 5 páginas, diseño responsivo premium, SEO avanzado, integración con redes, dominio y hosting por 1 año.\n\n💠 Plan E-Commerce — $1500\nIdeal para vender online. Incluye tienda online completa, pasarelas de pago, panel de administración, carga de primeros 20 productos y soporte prioritario por 1 mes.\n\n¿Quieres que te ayude a elegir el mejor plan para tu negocio?`
  },
  {
    keywords: ['basico', 'básico', 'landing', 'landing page', 'plan basico', 'plan básico', '299'],
    response: `El Plan Básico tiene un valor de $299 y es ideal para empezar.\n\nIncluye:\n\n✅ Landing Page de 5 secciones\n✅ Diseño responsivo\n✅ Botón de WhatsApp\n✅ Formulario de contacto\n✅ Posicionamiento SEO local\n\nEs una excelente opción si necesitas una página clara, profesional y rápida para presentar tu negocio.`
  },
  {
    keywords: ['pyme', 'plan pyme', '599', 'negocio en crecimiento', 'multi pagina', 'multipagina', 'multi-página'],
    response: `El Plan Pyme tiene un valor de $599 y está pensado para negocios en crecimiento.\n\nIncluye:\n\n✅ Web multi-página de hasta 5 páginas\n✅ Diseño responsivo premium\n✅ Optimización SEO avanzada\n✅ Integración con redes sociales\n✅ Dominio y hosting por 1 año\n\nEs uno de los planes más completos para empresas que desean una presencia digital más sólida.`
  },
  {
    keywords: ['ecommerce', 'e-commerce', 'tienda online', 'tienda', 'vender online', 'productos', 'catalogo', 'catálogo', '1500'],
    response: `El Plan E-Commerce tiene un valor de $1500 y es ideal para vender productos online.\n\nIncluye:\n\n✅ Tienda online completa\n✅ Pasarelas de pago\n✅ Panel de administración\n✅ Carga de los primeros 20 productos\n✅ Soporte prioritario por 1 mes\n\nEs perfecto si quieres llevar tu negocio al mundo digital y comenzar a vender por internet.`
  },
  {
    keywords: ['dominio', 'hosting', 'correo corporativo', 'servidor'],
    response: `Sí, podemos orientarte con dominio y hosting.\n\nEl Plan Pyme incluye dominio y hosting por 1 año. En otros planes también podemos ayudarte a gestionarlo según las necesidades de tu proyecto.\n\nTener dominio propio ayuda a que tu negocio se vea más profesional y confiable.`
  },
  {
    keywords: ['whatsapp', 'contacto', 'asesor', 'humano', 'correo', 'email', 'llamar', 'cotizar', 'cotizacion', 'cotización', 'agendar', 'consulta gratis'],
    response: `Claro, puedes contactarnos directamente para recibir asesoría gratuita.\n\n📲 WhatsApp: +58 414 473 5431\n📧 Email: ${emailContact}\n📍 Ubicación: ${locationBusiness}\n\nTambién puedes escribirnos por WhatsApp aquí:\nhttps://wa.me/${whatsappNumber}\n\nCuéntanos qué tipo de página web necesitas y te orientamos con gusto.`
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

const fallbackResponse = `Gracias por escribirme. Puedo ayudarte con información sobre:\n\n✅ Creación de páginas web\n✅ Plan Básico, Pyme y E-Commerce\n✅ Entrega en 7 días\n✅ SEO local y Google\n✅ Chatbot e IA integrada\n✅ WhatsApp, formularios y contacto\n\n📲 WhatsApp: +58 414 473 5431\n📧 Email: ${emailContact}\n\nCuéntame un poco más sobre lo que necesitas y te oriento.`;

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
              {msg.text}
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
