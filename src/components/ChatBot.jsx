import { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, AlertCircle } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy el asistente de Daniel. Puedo responder preguntas sobre su experiencia, proyectos, habilidades y más. ¿Qué deseas saber?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);
  const requestCountRef = useRef(0);
  const lastResetRef = useRef(Date.now());
  const responsesCacheRef = useRef(new Map());

  const MAX_REQUESTS_PER_DAY = 100;
  const MAX_REQUESTS_PER_HOUR = 15;
  const MAX_MESSAGES_IN_CONTEXT = 5;
  const MAX_MESSAGE_LENGTH = 300;
  const CACHE_DURATION_MS = 1000 * 60 * 60;
  const MIN_DELAY_BETWEEN_REQUESTS_MS = 2000;

  const dailyCountRef = useRef(0);
  const lastRequestTimeRef = useRef(0);
  const dailyResetRef = useRef(Date.now());

  const portfolioContext = `Eres un asistente virtual del portfolio de Daniel Sánchez Vázquez.

REGLAS IMPORTANTES:
- En conversaciones normales, refiere al propietario como "Daniel" (solo nombre)
- SOLO usa "Daniel Sánchez Vázquez" (nombre completo) cuando te presentes o cuando se te pregunta explícitamente quién es
- Sé amable, profesional y conciso
- Limita respuestas a máximo 100 palabras

INFORMACIÓN SOBRE DANIEL:

Carrera Profesional:
Daniel es un Full-stack developer, más enfocado al front, con experiencia en:
- Frontend: React, JavaScript, TypeScript, TailwindCSS, HTML, CSS, Next.js
- Backend: Spring Boot, Java, Node.js, PostgreSQL, MongoDB
- Tools: Git, GitHub, Figma, Cursor, Vite

Proyectos destacados:
1. Pawtopia - Plataforma de adopción responsable (HTML, CSS, JS, TailwindCSS)
2. EcoVibe - Web de sostenibilidad (HTML, CSS, JS, Bootstrap)
3. AppFluence - Página de podcast con reproductor (HTML, CSS, JS, Spotify API)

Intereses Personales:
- Futbol: Es una pasión en su vida, juega regularmente y le encanta el futbol
- Boxeo: Practica boxeo como parte de su rutina de ejercicio
- Música: La música es esencial en su día a día, siempre la tiene presente

Contacto: danielsanchezvazquez5@gmail.com
GitHub: https://github.com/DaniSanchezDev
LinkedIn: https://linkedin.com/in/danielsanchezdev`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const getCachedResponse = (userInput) => {
    const cached = responsesCacheRef.current.get(userInput.toLowerCase());
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION_MS) {
      return cached.response;
    }
    return null;
  };

  const setCachedResponse = (userInput, response) => {
    responsesCacheRef.current.set(userInput.toLowerCase(), {
      response,
      timestamp: Date.now(),
    });
  };

  const checkRateLimit = () => {
    const now = Date.now();
    const hourInMs = 60 * 60 * 1000;
    const dayInMs = 24 * 60 * 60 * 1000;

    if (now - lastResetRef.current > hourInMs) {
      requestCountRef.current = 0;
      lastResetRef.current = now;
    }

    if (now - dailyResetRef.current > dayInMs) {
      dailyCountRef.current = 0;
      dailyResetRef.current = now;
    }

    if (requestCountRef.current >= MAX_REQUESTS_PER_HOUR) {
      return {
        allowed: false,
        reason: `Límite de ${MAX_REQUESTS_PER_HOUR} mensajes por hora alcanzado.`,
      };
    }

    if (dailyCountRef.current >= MAX_REQUESTS_PER_DAY) {
      return {
        allowed: false,
        reason: `Límite diario de ${MAX_REQUESTS_PER_DAY} mensajes alcanzado.`,
      };
    }

    if (now - lastRequestTimeRef.current < MIN_DELAY_BETWEEN_REQUESTS_MS) {
      return {
        allowed: false,
        reason: "Espera un momento antes de enviar otro mensaje.",
      };
    }

    requestCountRef.current++;
    dailyCountRef.current++;
    lastRequestTimeRef.current = now;
    return { allowed: true };
  };

  const getContextMessages = () => {
    const recentMessages = messages.slice(-MAX_MESSAGES_IN_CONTEXT);
    return recentMessages
      .map(
        (msg) =>
          `${msg.sender === "user" ? "Usuario" : "Asistente"}: ${msg.text}`,
      )
      .join("\n");
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (input.length > MAX_MESSAGE_LENGTH) {
      setError(
        `El mensaje es demasiado largo (máximo ${MAX_MESSAGE_LENGTH} caracteres)`,
      );
      setTimeout(() => setError(""), 3000);
      return;
    }

    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      setError(rateLimitCheck.reason);
      setTimeout(() => setError(""), 5000);
      return;
    }

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError("");

    try {
      const cachedResponse = getCachedResponse(input);
      if (cachedResponse) {
        const botMessage = {
          id: messages.length + 2,
          text: `${cachedResponse} (respuesta en caché)`,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
        return;
      }

      const apiKey = import.meta.env.VITE_GROQ_API_KEY;

      if (!apiKey) {
        throw new Error(
          "API key no configurada. Configura VITE_GROQ_API_KEY en .env",
        );
      }

      const contextMessages = getContextMessages();
      const systemPrompt = `${portfolioContext}\n\nHistorial de conversación:\n${contextMessages}`;

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: input,
              },
            ],
            max_tokens: 200,
            temperature: 0.7,
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Error en la API de Groq");
      }

      const data = await response.json();
      const botResponse = data.choices[0].message.content;

      setCachedResponse(input, botResponse);

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Error al conectar con la IA. Intenta de nuevo.");

      const errorMessage = {
        id: messages.length + 2,
        text: `Error: ${err.message}`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
        style={{ zIndex: 150 }}
        aria-label="Abrir chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col h-[500px] md:h-[600px] sm:h-[320px] border border-gray-200 dark:border-gray-700"
          style={{ zIndex: 150 }}
        >
          <div className="bg-linear-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Asistente Daniel</h3>
            <p className="text-sm opacity-90">
              Pregunta sobre mi experiencia y proyectos
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-start">
                <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 px-4 py-2 rounded-lg text-sm">
                  {error}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900 rounded-b-lg"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                maxLength={MAX_MESSAGE_LENGTH}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg p-2 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {input.length}/{MAX_MESSAGE_LENGTH}
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
