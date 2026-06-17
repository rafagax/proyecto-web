import{A as e,D as t,N as n,a as r,d as i,i as a,j as o,k as s,r as c,s as l,t as u,u as d}from"./jsx-runtime-K4d7XFNa.js";import{t as f}from"./createLucideIcon-BQNBndH5.js";import{t as p}from"./bot-DZYoHz5U.js";import{n as m,r as h,t as g}from"./trending-up-DVJaSB0l.js";import{t as _}from"./chevron-down-C2OZ4Fo2.js";import{t as v}from"./chevron-right-BouZWEd4.js";import{n as y,r as b,t as x}from"./message-circle-DIrJ7Biy.js";var S=n(o(),1),C=f(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),w=f(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),T=f(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),E=`/assets/logo%20sin%20fondo-Czlgkq9a.webp`,D=u(),O=[{title:`Web Development & Design`,description:`Premium websites built for speed, trust, and conversions.`,icon:(0,D.jsx)(m,{size:20}),path:`/services/web-development-design`},{title:`SEO & Digital Growth`,description:`Improve visibility, attract qualified traffic, and grow organically.`,icon:(0,D.jsx)(g,{size:20}),path:`/services/seo-digital-growth`},{title:`KPI Dashboards & Analytics`,description:`Track leads, sales, and business performance with clarity.`,icon:(0,D.jsx)(h,{size:20}),path:`/services/kpi-dashboards`},{title:`AI Automation & Chatbots`,description:`Automate replies, qualify leads, and support customers 24/7.`,icon:(0,D.jsx)(p,{size:20}),path:`/services/ai-automation-chatbots`}],k=()=>{let[e,t]=(0,S.useState)(!1),n=(0,S.useRef)(null),r=(0,S.useRef)(null);return(0,D.jsxs)(`div`,{ref:r,style:{position:`relative`,display:`inline-block`},onMouseEnter:()=>{n.current&&clearTimeout(n.current),t(!0)},onMouseLeave:()=>{n.current=setTimeout(()=>{t(!1)},200)},onFocus:()=>{n.current&&clearTimeout(n.current),t(!0)},onBlur:e=>{r.current?.contains(e.relatedTarget)||t(!1)},onKeyDown:e=>{e.key===`Escape`&&t(!1)},children:[(0,D.jsxs)(c,{to:`/services`,className:`services-trigger`,"aria-haspopup":`true`,"aria-expanded":e,style:{background:`transparent`,border:`none`,color:`var(--text-secondary)`,fontSize:`0.92rem`,fontWeight:`500`,letterSpacing:`0.3px`,cursor:`pointer`,padding:`10px 0`,display:`inline-flex`,alignItems:`center`,gap:`6px`,textDecoration:`none`,transition:`all 0.3s ease`},onMouseEnter:e=>{e.currentTarget.style.color=`#fff`},onMouseLeave:e=>{e.currentTarget.style.color=`var(--text-secondary)`},children:[`Services`,(0,D.jsx)(_,{size:14,style:{transition:`transform 0.3s ease`,transform:e?`rotate(180deg)`:`rotate(0deg)`}})]}),e&&(0,D.jsx)(`div`,{className:`services-dropdown`,children:O.map(e=>(0,D.jsxs)(c,{to:e.path,className:`services-dropdown-item`,children:[(0,D.jsx)(`span`,{className:`services-dropdown-icon`,children:e.icon}),(0,D.jsxs)(`span`,{className:`services-dropdown-text`,children:[(0,D.jsx)(`h4`,{children:e.title}),(0,D.jsx)(`p`,{children:e.description})]}),(0,D.jsx)(v,{size:16,className:`services-dropdown-arrow`})]},e.path))}),(0,D.jsx)(`style`,{children:`
        .services-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: 340px;
          background: rgba(10, 10, 12, 0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(77, 148, 255, 0.15);
          border-radius: 14px;
          padding: 0.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.55);
          animation: servicesDropdownIn 0.22s ease-out forwards;
        }

        @keyframes servicesDropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .services-dropdown-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0.85rem 1rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .services-dropdown-item:hover {
          background: rgba(77, 148, 255, 0.1);
        }

        .services-dropdown-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 10px;
          color: var(--accent-cyan);
          background: rgba(77, 148, 255, 0.08);
          border: 1px solid rgba(77, 148, 255, 0.18);
        }

        .services-dropdown-text {
          flex: 1;
          min-width: 0;
        }

        .services-dropdown-text h4 {
          font-size: 0.92rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 2px;
        }

        .services-dropdown-text p {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.3;
        }

        .services-dropdown-arrow {
          color: var(--accent-cyan);
          flex-shrink: 0;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.2s ease;
        }

        .services-dropdown-item:hover .services-dropdown-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `})]})},A=()=>{let[e,n]=(0,S.useState)(!1),[r,i]=(0,S.useState)(!1),a=t();return(0,S.useEffect)(()=>{let e=()=>{n(window.scrollY>50)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),(0,S.useEffect)(()=>{i(!1)},[a]),(0,S.useEffect)(()=>{r?(document.body.style.overflow=`hidden`,document.documentElement.classList.add(`mobile-menu-open`)):(document.body.style.overflow=``,document.documentElement.classList.remove(`mobile-menu-open`))},[r]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`header`,{className:`navbar ${e?`scrolled`:``}`,children:(0,D.jsxs)(`div`,{className:`container`,children:[(0,D.jsx)(c,{to:`/`,className:`navbar-logo`,children:(0,D.jsx)(`img`,{src:E,alt:`Digital Investments Logo`,className:`header-logo`})}),(0,D.jsxs)(`nav`,{className:`navbar-links`,children:[(0,D.jsx)(c,{to:`/`,className:a.pathname===`/`?`active`:``,children:`Home`}),(0,D.jsx)(c,{to:`/our-clients`,className:a.pathname===`/our-clients`?`active`:``,children:`Clients`}),(0,D.jsx)(k,{}),(0,D.jsx)(c,{to:`/pricing`,className:a.pathname===`/pricing`?`active`:``,children:`Pricing`}),(0,D.jsx)(c,{to:`/blog`,className:a.pathname===`/blog`?`active`:``,children:`Blog`}),(0,D.jsx)(c,{to:`/faqs`,className:a.pathname===`/faqs`?`active`:``,children:`FAQs`}),(0,D.jsx)(c,{to:`/contact`,className:`btn btn-contact-header ${a.pathname===`/contact`?`active`:``}`,children:`Contact`})]}),(0,D.jsx)(`button`,{className:`menu-toggle`,onClick:()=>i(!0),children:(0,D.jsx)(w,{size:28})})]})}),(0,D.jsxs)(`div`,{className:`mobile-menu ${r?`open`:``}`,children:[(0,D.jsxs)(`div`,{className:`mobile-menu-header`,children:[(0,D.jsx)(c,{to:`/`,className:`navbar-logo`,onClick:()=>i(!1),children:(0,D.jsx)(`img`,{src:E,alt:`Digital Investments Logo`,className:`mobile-nav-logo`})}),(0,D.jsx)(`button`,{className:`mobile-menu-close`,onClick:()=>i(!1),children:(0,D.jsx)(T,{size:32})})]}),(0,D.jsxs)(`nav`,{className:`mobile-menu-nav`,children:[(0,D.jsx)(c,{to:`/`,className:`mobile-menu-item ${a.pathname===`/`?`active`:``}`,onClick:()=>i(!1),children:`Home`}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(c,{to:`/services`,className:`mobile-menu-item`,style:{fontSize:`0.9rem`,fontWeight:`600`,color:`#fff`,paddingLeft:`1rem`,paddingBottom:`0.5rem`},onClick:()=>i(!1),children:`Services`}),(0,D.jsx)(c,{to:`/services/web-development-design`,className:`mobile-menu-item`,style:{paddingLeft:`2rem`,fontSize:`0.85rem`},onClick:()=>i(!1),children:`Web Development & Design`}),(0,D.jsx)(c,{to:`/services/seo-digital-growth`,className:`mobile-menu-item`,style:{paddingLeft:`2rem`,fontSize:`0.85rem`},onClick:()=>i(!1),children:`SEO & Digital Growth`}),(0,D.jsx)(c,{to:`/services/kpi-dashboards`,className:`mobile-menu-item`,style:{paddingLeft:`2rem`,fontSize:`0.85rem`},onClick:()=>i(!1),children:`KPI Dashboards & Analytics`}),(0,D.jsx)(c,{to:`/services/ai-automation-chatbots`,className:`mobile-menu-item`,style:{paddingLeft:`2rem`,fontSize:`0.85rem`},onClick:()=>i(!1),children:`AI Automation & Chatbots`})]}),(0,D.jsx)(c,{to:`/our-clients`,className:`mobile-menu-item ${a.pathname===`/our-clients`?`active`:``}`,onClick:()=>i(!1),children:`Clients`}),(0,D.jsx)(c,{to:`/pricing`,className:`mobile-menu-item ${a.pathname===`/pricing`?`active`:``}`,onClick:()=>i(!1),children:`Pricing`}),(0,D.jsx)(c,{to:`/contact`,className:`mobile-menu-item contact-link ${a.pathname===`/contact`?`active`:``}`,onClick:()=>i(!1),children:`Contact Us`}),(0,D.jsx)(c,{to:`/faqs`,className:`mobile-menu-item ${a.pathname===`/faqs`?`active`:``}`,onClick:()=>i(!1),children:`FAQs`}),(0,D.jsx)(c,{to:`/blog`,className:`mobile-menu-item ${a.pathname===`/blog`?`active`:``}`,onClick:()=>i(!1),children:`Blog`})]})]})]})},j=()=>(0,D.jsx)(`footer`,{className:`footer`,style:{borderTop:`2px solid rgba(77, 148, 255, 0.1)`,background:`linear-gradient(to bottom, var(--bg-secondary), #000)`},children:(0,D.jsxs)(`div`,{className:`container`,children:[(0,D.jsxs)(`div`,{className:`footer-content`,style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`3rem`,padding:`0`},children:[(0,D.jsxs)(`div`,{className:`footer-col`,children:[(0,D.jsxs)(`h2`,{style:{fontSize:`1.8rem`,letterSpacing:`-0.5px`,marginBottom:`1rem`,color:`#fff`},children:[`Inversiones`,(0,D.jsx)(`span`,{className:`text-gradient`,children:`Digitales`})]}),(0,D.jsx)(`p`,{style:{color:`var(--text-secondary)`,lineHeight:`1.6`,marginBottom:`1.5rem`,maxWidth:`350px`},children:`We transform your vision into a high-performance digital experience. Specialists in premium web development, SEO, KPI dashboards and AI automation.`}),(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`15px`},children:[(0,D.jsx)(`a`,{href:`https://wa.me/584144735431`,target:`_blank`,rel:`noopener noreferrer`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:`40px`,height:`40px`,borderRadius:`50%`,background:`rgba(255,255,255,0.05)`,color:`var(--accent-cyan)`,transition:`all 0.3s`},onMouseOver:e=>e.currentTarget.style.background=`rgba(77, 148, 255, 0.1)`,onMouseOut:e=>e.currentTarget.style.background=`rgba(255,255,255,0.05)`,children:(0,D.jsx)(x,{size:20})}),(0,D.jsx)(`a`,{href:`mailto:inversionesdigitales@hotmail.es`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:`40px`,height:`40px`,borderRadius:`50%`,background:`rgba(255,255,255,0.05)`,color:`var(--accent-cyan)`,transition:`all 0.3s`},onMouseOver:e=>e.currentTarget.style.background=`rgba(77, 148, 255, 0.1)`,onMouseOut:e=>e.currentTarget.style.background=`rgba(255,255,255,0.05)`,children:(0,D.jsx)(b,{size:20})}),(0,D.jsx)(`a`,{href:`#`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:`40px`,height:`40px`,borderRadius:`50%`,background:`rgba(255,255,255,0.05)`,color:`var(--accent-cyan)`,transition:`all 0.3s`},onMouseOver:e=>e.currentTarget.style.background=`rgba(77, 148, 255, 0.1)`,onMouseOut:e=>e.currentTarget.style.background=`rgba(255,255,255,0.05)`,children:(0,D.jsx)(C,{size:20})})]})]}),(0,D.jsxs)(`div`,{className:`footer-col`,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,D.jsx)(`h3`,{style:{fontSize:`1.2rem`,color:`#fff`,borderBottom:`1px solid rgba(255,255,255,0.1)`,paddingBottom:`0.5rem`,display:`inline-block`},children:`Explore`}),(0,D.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`1rem`},children:[(0,D.jsxs)(`div`,{className:`footer-links`,children:[(0,D.jsx)(c,{to:`/`,children:`Home`}),(0,D.jsx)(c,{to:`/services`,children:`Services`}),(0,D.jsx)(c,{to:`/pricing`,children:`Pricing`})]}),(0,D.jsxs)(`div`,{className:`footer-links`,children:[(0,D.jsx)(c,{to:`/our-clients`,children:`Our Clients`}),(0,D.jsx)(c,{to:`/faqs`,children:`FAQs`}),(0,D.jsx)(c,{to:`/contact`,children:`Contact`})]})]})]}),(0,D.jsxs)(`div`,{className:`footer-col`,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,D.jsx)(`h3`,{style:{fontSize:`1.2rem`,color:`#fff`,borderBottom:`1px solid rgba(255,255,255,0.1)`,paddingBottom:`0.5rem`,display:`inline-block`},children:`Direct Contact`}),(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`,color:`var(--text-secondary)`},children:[(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,D.jsx)(b,{size:16,color:`var(--accent-cyan)`}),(0,D.jsx)(`span`,{children:`inversionesdigitales@hotmail.es`})]}),(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,D.jsx)(x,{size:16,color:`var(--accent-cyan)`}),(0,D.jsx)(`span`,{children:`+58 414 473 5431`})]}),(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,D.jsx)(y,{size:16,color:`var(--accent-cyan)`}),(0,D.jsx)(`span`,{children:`Maracay, Aragua, Venezuela`})]})]})]})]}),(0,D.jsxs)(`div`,{className:`footer-bottom-bar`,children:[(0,D.jsxs)(`p`,{style:{margin:0},children:[`© `,new Date().getFullYear(),` Ied.`]}),(0,D.jsx)(`span`,{className:`footer-separator`,children:`|`}),(0,D.jsxs)(`p`,{style:{margin:0,fontSize:`0.85rem`,textAlign:`center`},children:[`CEO:`,` `,(0,D.jsx)(`a`,{href:`https://portafolio-kpi-jv.vercel.app/`,target:`_blank`,rel:`noopener noreferrer`,style:{color:`#ffffff`,fontWeight:`600`},children:`Eng. Jesús Vásquez`})]})]})]})}),M=`/assets/chatbot-imagen-BJxlDeOr.webp`,N=`584144735431`,P=`inversionesdigitales@hotmail.es`,F=[{keywords:[`hi`,`hello`,`hey`,`greetings`,`help`,`info`,`information`,`assistance`,`support`],response:`Hello! 👋 I'm the virtual assistant for Digital Investments.

I can help you with information about web creation, plans, pricing, 7-day delivery, local SEO, AI integration, chatbots, online stores, and contact details.

What type of website do you need for your business?`},{keywords:[`7 days`,`seven days`,`time`,`how long`,`delivery`,`fast`,`quick`,`timeline`,`deadline`],response:`Your web design can be ready in just 7 days, depending on the type of project, the number of sections, and the information you need to include.

We work with a fast, organized, and professional process so you can start showcasing your business on the internet as soon as possible.`},{keywords:[`who are you`,`who are you`,`company`,`digital investments`,`about us`,`what do you do`],response:`We are Digital Investments, specialists in high-performance web design and development.

We transform your vision into a professional, modern, and strategic digital experience so your business gains presence, trust, and more sales opportunities.`},{keywords:[`website`,`web site`,`web page`,`web`,`want a website`,`build website`,`create website`,`need website`,`web development`],response:`Excellent choice! 🚀

At Digital Investments we create modern, fast, and strategic websites for your business to transmit professionalism and attract more customers.

We can develop Landing Pages, Business Websites, or Online Stores in record time.

Would you like to schedule a **FREE CONSULTATION** on WhatsApp to advise you on your project?

 Click here to chat:
https://wa.me/584144735431?text=Hi+I+would+like+to+schedule+a+free+consultation`},{keywords:[`services`,`what do you offer`,`include`,`benefits`,`digital solutions`],response:`Our services are focused on growing your brand on the internet.

We offer:

✅ Professional digital presence
✅ Fast and professional web development
✅ Sales optimization
✅ Local SEO positioning
✅ WhatsApp integration
✅ Contact forms
✅ AI-powered chatbot
✅ Online stores
✅ Digital automation`},{keywords:[`digital presence`,`professionalism`,`professional image`,`brand`,`trust`,`professional business`],response:`We develop a modern, clear, and attractive website that strengthens your business image, builds customer trust, and makes your brand transmit professionalism from the first click.

A good website helps your business look more serious, competitive, and ready to sell.`},{keywords:[`sales`,`increase sales`,`sell more`,`conversions`,`customers`,`attract customers`],response:`We apply geo-local positioning strategies and web optimization so your business gains more visibility, attracts customers in your area, appears better on Google, and increases its chances of being recommended by AI.

The goal is for your website to not only look good, but also help generate real sales contacts and opportunities.`},{keywords:[`google`,`seo`,`positioning`,`search`,`appear on google`,`top results`,`local`,`local seo`,`geo local`],response:`Yes, we work on local SEO positioning so your business has more visibility on Google and can attract customers in your area.

Depending on the plan, we can include basic or advanced local SEO optimization to improve your business structure, content, and digital presence.`},{keywords:[`ai`,`artificial intelligence`,`recommended by ai`,`chatgpt`,`recommend`,`recommendation`,`ai integrated`],response:`Yes, we develop websites with a focus on technology and AI.

A well-structured, clear, and optimized website helps your business have more chances of being understood, found, and recommended by digital tools and artificial intelligence.

We can also integrate a chatbot to answer frequently asked questions and capture customers.`},{keywords:[`chatbot`,`bot`,`virtual assistant`,`automation`,`respond customers`,`whatsapp automatic`,`auto response`],response:`We can integrate a chatbot or virtual assistant to answer frequently asked questions, guide your customers, and help you capture opportunities even outside business hours.

It's ideal for explaining services, showing plans, sending contact details, and guiding the user to WhatsApp or a form.`},{keywords:[`plans`,`pricing`,`price`,`plan`,`cost`,`how much`,`rate`,`packages`,`basic`,`299`,`599`,`1500`],response:`Special offer this week only! 

Create your professional website with **50% discount** and pay only **$149.99**.

Make your business look more trustworthy, modern, and ready to receive customers.

 Take advantage of this promotion before it ends:
https://wa.me/584144735431?text=Hi+I+would+like+to+take+advantage+of+the+149+offer`},{keywords:[`domain`,`hosting`,`corporate email`,`server`],response:`Yes, we can guide you with domain and hosting.

The Business Plan includes domain and hosting for 1 year. In other plans, we can also help you manage it according to your project needs.

Having your own domain helps your business look more professional and trustworthy.`},{keywords:[`whatsapp`,`contact`,`advisor`,`human`,`email`,`call`,`quote`,`schedule`,`free consultation`],response:`Of course, you can contact us directly for free advice.\n\n WhatsApp: +58 414 473 5431\n📧 Email: ${P}\n📍 Location: Maracay, Aragua, Venezuela\n\nYou can also message us on WhatsApp here:\nhttps://wa.me/${N}\n\nTell us what type of website you need and we'll be happy to help.`},{keywords:[`location`,`where are you`,`maracay`,`venezuela`,`aragua`],response:`We are located in Maracay, Aragua, Venezuela.

We can also serve remote projects for clients in Venezuela, United States, Spain, and other countries.`},{keywords:[`clients`,`testimonials`,`reviews`,`opinions`,`google reviews`,`ratings`],response:`Our clients rate us 4.9/5 in reviews.

They have highlighted our fast delivery, professional design, automation integration, local SEO, and support throughout the process.

We work with businesses in Venezuela, United States, and Spain.`},{keywords:[`bilingual`,`english`,`spanish`,`hispanic`],response:`Yes, we can develop bilingual websites in Spanish and English.

It's an excellent option if your business serves Hispanic audiences, international customers, or wants to project a more professional image in different markets.`},{keywords:[`form`,`contact form`,`whatsapp button`,`social media`,`instagram`,`facebook`],response:`Yes, we can integrate a contact form, WhatsApp button, and links to your social media.

The idea is for your visitors to be able to contact you quickly and easily from any device.`},{keywords:[`maintenance`,`support`,`changes`,`updates`,`after-sales`],response:`We can offer support depending on the type of project contracted.

The E-Commerce Plan includes priority support for 1 month. For other plans, we can guide you on maintenance, changes, or updates options according to what you need.`}],I=`Thank you for writing to me. I can help you with information about:\n\n✅ Website creation\n✅ Starter, Business, and E-Commerce Plans\n✅ 7-day delivery\n✅ Local SEO and Google\n✅ Integrated chatbot and AI\n✅ WhatsApp, forms, and contact\n\n WhatsApp: +58 414 473 5431\n📧 Email: ${P}\n\nTell me a bit about what you need and I'll help you.`,L=e=>e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).trim(),R=e=>{let t=L(e);for(let e of F)if(e.keywords.some(e=>t.includes(L(e))))return e.response;return I},z=e=>{let t=/(https?:\/\/[^\s]+)/g;return e.split(t).map((e,n)=>{if(e.match(t)){let t=e;return e.includes(`wa.me`)?t=`📲 +58 414 473 5431`:e.length>40&&(t=e.substring(0,37)+`...`),(0,D.jsx)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,className:`ka-chat-link`,children:t},n)}return e})},B=()=>{let[e,t]=(0,S.useState)(!1),[n,r]=(0,S.useState)([]),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(!1),[c,l]=(0,S.useState)(!0),u=(0,S.useRef)(null),d=(0,S.useRef)(null),f=()=>{u.current?.scrollIntoView({behavior:`smooth`})};(0,S.useEffect)(()=>{f()},[n,o]);let p=()=>{let n=!e;t(n),n&&c&&(r([{text:F[0].response,sender:`bot`}]),l(!1)),n&&setTimeout(()=>d.current?.focus(),200)},m=e=>{e.trim()&&(r(t=>[...t,{text:e,sender:`user`}]),a(``),s(!0),setTimeout(()=>{s(!1),r(t=>[...t,{text:R(e),sender:`bot`}])},650))},h=e=>{e.preventDefault(),m(i)},g=e=>{m(e)};return(0,D.jsxs)(`div`,{id:`ka-chatbot-container`,children:[(0,D.jsxs)(`button`,{id:`ka-chatbot-toggle`,"aria-label":`Open chat`,onClick:p,children:[(0,D.jsx)(`img`,{src:M,alt:`Virtual Assistant Digital Investments`,id:`ka-avatar-img`}),(0,D.jsx)(`span`,{id:`ka-chatbot-pulse`})]}),(0,D.jsxs)(`div`,{id:`ka-chatbot-window`,className:e?``:`ka-hidden`,children:[(0,D.jsxs)(`div`,{id:`ka-chatbot-header`,children:[(0,D.jsxs)(`div`,{className:`ka-header-info`,children:[(0,D.jsx)(`strong`,{children:`Virtual Assistant`}),(0,D.jsx)(`span`,{children:`Digital Investments`})]}),(0,D.jsx)(`button`,{id:`ka-chatbot-close`,"aria-label":`Close chat`,onClick:p,children:`✕`})]}),(0,D.jsxs)(`div`,{id:`ka-chatbot-messages`,children:[n.map((e,t)=>(0,D.jsx)(`div`,{className:`ka-msg ${e.sender===`bot`?`ka-msg-bot`:`ka-msg-user`}`,children:z(e.text)},t)),o&&(0,D.jsx)(`div`,{className:`ka-typing`,id:`ka-typing`,children:`The assistant is typing...`}),(0,D.jsx)(`div`,{ref:u})]}),(0,D.jsxs)(`div`,{id:`ka-chatbot-quick`,children:[(0,D.jsx)(`button`,{type:`button`,onClick:()=>g(`I want a website`),children:`I want a website`}),(0,D.jsx)(`button`,{type:`button`,onClick:()=>g(`What are the plans and pricing`),children:`Plans & Pricing`}),(0,D.jsx)(`button`,{type:`button`,onClick:()=>g(`How long does it take`),children:`Delivery Time`})]}),(0,D.jsxs)(`form`,{id:`ka-chatbot-form`,onSubmit:h,children:[(0,D.jsx)(`input`,{type:`text`,id:`ka-chatbot-input`,placeholder:`Type your question here...`,autoComplete:`off`,required:!0,value:i,onChange:e=>a(e.target.value),ref:d}),(0,D.jsx)(`button`,{type:`submit`,id:`ka-chatbot-send`,"aria-label":`Send message`,children:(0,D.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,fill:`currentColor`,children:(0,D.jsx)(`path`,{d:`M2.01 21L23 12 2.01 3 2 10l15 2-15 2z`})})})]})]})]})},V=()=>[{rel:`preconnect`,href:`https://fonts.googleapis.com`},{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossOrigin:`anonymous`},{rel:`icon`,type:`image/svg+xml`,href:`/favicon.svg`},{rel:`apple-touch-icon`,href:`/favicon.svg`}],H={"@context":`https://schema.org`,"@type":`Organization`,name:`Digital Investments`,url:`https://yourdomain.com`,description:`Premium web development, SEO, KPI dashboards and AI automation for growing businesses.`,logo:`https://yourdomain.com/logo.png`,contactPoint:{"@type":`ContactPoint`,contactType:`Customer Service`,telephone:`+584144735431`,areaServed:[`VE`,`US`,`ES`],availableLanguage:`English`}};function U(){return(0,S.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,t=document.querySelectorAll(`.reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible)`),n=document.querySelectorAll(`.reveal-group:not(.is-revealed)`);if(!t.length&&!n.length)return;if(e||!(`IntersectionObserver`in window)){t.forEach(e=>e.classList.add(`is-visible`)),n.forEach(e=>{e.classList.add(`is-revealed`),e.querySelectorAll(`.reveal-card`).forEach(e=>e.classList.add(`is-visible`))});return}let r=new IntersectionObserver(e=>{e.forEach(e=>{if(!e.isIntersecting)return;let t=e.target;t.classList.contains(`reveal-group`)?(t.classList.add(`is-revealed`),t.querySelectorAll(`.reveal-card`).forEach((e,t)=>{window.setTimeout(()=>e.classList.add(`is-visible`),Math.min(t,8)*40)})):t.classList.add(`is-visible`),r.unobserve(t)})},{rootMargin:`0px 0px -10% 0px`,threshold:.1});return t.forEach(e=>r.observe(e)),n.forEach(e=>r.observe(e)),()=>r.disconnect()},[t().pathname]),null}function W({children:e}){return(0,D.jsxs)(`html`,{lang:`en`,className:`reveal-ready`,children:[(0,D.jsxs)(`head`,{children:[(0,D.jsx)(`meta`,{charSet:`utf-8`}),(0,D.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,D.jsx)(`meta`,{name:`theme-color`,content:`#000000`}),(0,D.jsx)(`meta`,{name:`robots`,content:`index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`}),(0,D.jsx)(`meta`,{property:`og:type`,content:`website`}),(0,D.jsx)(`meta`,{property:`og:site_name`,content:`Digital Investments`}),(0,D.jsx)(`meta`,{property:`og:image`,content:`https://yourdomain.com/og-image.png`}),(0,D.jsx)(`meta`,{name:`twitter:card`,content:`summary_large_image`}),(0,D.jsx)(`meta`,{name:`twitter:image`,content:`https://yourdomain.com/og-image.png`}),(0,D.jsx)(r,{}),(0,D.jsx)(a,{}),(0,D.jsx)(`script`,{type:`application/ld+json`,dangerouslySetInnerHTML:{__html:JSON.stringify(H)}}),(0,D.jsx)(`noscript`,{children:(0,D.jsx)(`style`,{children:`.reveal,.reveal-left,.reveal-right,.reveal-card,.bar-rise,.chat-bubble{opacity:1!important;transform:none!important}`})})]}),(0,D.jsxs)(`body`,{children:[e,(0,D.jsx)(i,{}),(0,D.jsx)(d,{})]})]})}var G=s(function(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(U,{}),(0,D.jsx)(A,{}),(0,D.jsx)(`main`,{children:(0,D.jsx)(l,{})}),(0,D.jsx)(j,{}),(0,D.jsx)(`a`,{href:`https://wa.me/584144735431?text=Hello,%20I%20came%20from%20your%20website%20and%20I'd%20like%20to%20ask%20something.`,target:`_blank`,rel:`noopener noreferrer`,className:`floating-whatsapp`,"aria-label":`Chat on WhatsApp`,children:(0,D.jsx)(`svg`,{width:`30`,height:`30`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,D.jsx)(`path`,{d:`M20.52 3.449C18.24 1.245 15.24 0 12 0C5.383 0 0 5.383 0 12C0 14.12 0.549 16.19 1.593 18.016L0 24L6.115 22.396C7.882 23.344 9.905 23.856 12 23.856C18.617 23.856 24 18.473 24 12C24 8.76 22.755 5.76 20.52 3.449ZM12 21.841C10.203 21.841 8.468 21.359 6.953 20.461L6.593 20.248L2.946 21.203L3.918 17.656L3.684 17.284C2.688 15.704 2.156 13.888 2.156 12C2.156 6.577 6.577 2.156 12 2.156C14.633 2.156 17.076 3.181 18.939 5.044C20.801 6.907 21.827 9.349 21.827 12C21.827 17.423 17.423 21.841 12 21.841ZM17.423 14.588C17.125 14.439 15.656 13.715 15.385 13.616C15.115 13.517 14.916 13.468 14.717 13.765C14.519 14.063 13.973 14.708 13.805 14.907C13.636 15.105 13.468 15.13 13.171 14.981C12.873 14.832 11.909 14.517 10.771 13.501C9.885 12.711 9.288 11.733 9.119 11.436C8.951 11.139 9.101 10.978 9.25 10.831C9.384 10.697 9.553 10.479 9.702 10.306C9.851 10.132 9.901 10.008 10 9.81C10.099 9.612 10.05 9.438 9.975 9.29C9.9 9.141 9.288 7.643 9.032 7.03C8.784 6.435 8.536 6.516 8.357 6.505C8.188 6.495 7.989 6.495 7.791 6.495C7.592 6.495 7.27 6.569 6.997 6.867C6.724 7.164 5.955 7.883 5.955 9.346C5.955 10.809 7.022 12.222 7.171 12.421C7.32 12.619 9.245 15.707 12.27 16.902C14.656 17.844 15.291 17.656 15.936 17.557C16.581 17.458 18.016 16.69 18.313 15.847C18.611 15.005 18.611 14.286 18.512 14.137C18.413 13.988 18.215 13.888 17.917 13.74Z`,fill:`white`})})}),(0,D.jsx)(B,{})]})}),K=e(function(){return null});export{K as HydrateFallback,W as Layout,G as default,V as links};