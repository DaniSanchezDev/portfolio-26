import { useEffect, useRef, useState } from "react";
import { MessageCircle, RotateCcw, Send, Sparkles, X } from "lucide-react";
import { cn } from "../lib/utils";

const MAX_MESSAGE_LENGTH = 300;
const MAX_HISTORY_SENT = 8;

const WELCOME_MESSAGE = {
  id: "welcome",
  role: "assistant",
  content:
    "¡Hola! Soy el asistente de Daniel. Puedo contarte sobre su experiencia, proyectos y habilidades. ¿Qué te gustaría saber?",
};

const SUGGESTIONS = [
  "¿Qué proyectos ha hecho?",
  "¿Cuál es su stack?",
  "¿Cómo puedo contactarle?",
];

const LINK_PATTERN = /(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.]+)/g;

let nextMessageId = 0;
const createMessage = (role, content) => ({
  id: `msg-${++nextMessageId}`,
  role,
  content,
});

// Convierte URLs y emails en enlaces y quita el Markdown básico que a veces
// devuelve el modelo aunque se le pida texto plano.
const renderMessageContent = (text) =>
  text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .split(LINK_PATTERN)
    .map((part, index) => {
      if (index % 2 === 0) return part;
      const cleanPart = part.replace(/[.,;:]+$/, "");
      const trailing = part.slice(cleanPart.length);
      const href = cleanPart.includes("@") && !cleanPart.startsWith("http")
        ? `mailto:${cleanPart}`
        : cleanPart;
      return (
        <span key={index}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 break-all hover:opacity-80"
          >
            {cleanPart}
          </a>
          {trailing}
        </span>
      );
    });

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading, error]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    // En móvil el chat ocupa toda la pantalla: bloqueamos el scroll de fondo.
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) {
      document.documentElement.style.overflow = "hidden";
    } else {
      // En escritorio enfocamos el input; en móvil no, para no abrir el teclado.
      inputRef.current?.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const requestReply = async (history) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history
            .filter((message) => message.id !== WELCOME_MESSAGE.id)
            .slice(-MAX_HISTORY_SENT)
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.reply) {
        throw new Error(
          data.error || "No he podido responder. Inténtalo de nuevo.",
        );
      }

      setMessages((prev) => [...prev, createMessage("assistant", data.reply)]);
    } catch (err) {
      setError(
        err instanceof TypeError
          ? "Sin conexión. Revisa tu red e inténtalo de nuevo."
          : err.message,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = (text) => {
    const content = text.trim().slice(0, MAX_MESSAGE_LENGTH);
    if (!content || isLoading) return;

    const history = [...messages, createMessage("user", content)];
    setMessages(history);
    setInput("");
    requestReply(history);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length === 1 && !isLoading;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "fixed z-[230] bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 sm:right-6 sm:bottom-6",
          "flex items-center justify-center h-14 w-14 rounded-full",
          "bg-primary text-primary-foreground shadow-lg shadow-primary/30",
          "hover:scale-105 hover:shadow-xl transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isOpen && "max-sm:hidden",
        )}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat con el asistente"}
        aria-expanded={isOpen}
        aria-controls="chatbot-panel"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div
          id="chatbot-panel"
          role="dialog"
          aria-label="Asistente de Daniel"
          data-lenis-prevent
          className={cn(
            "fixed z-[230] flex flex-col overflow-hidden bg-card text-foreground",
            "animate-fade-in",
            // Móvil: pantalla completa, respetando notch y barra inferior.
            "inset-0 h-dvh pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]",
            // Tablet y escritorio: ventana flotante.
            "sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-[min(600px,calc(100dvh-11rem))] sm:p-0",
            "sm:rounded-2xl sm:border sm:border-border sm:shadow-2xl",
          )}
        >
          <header className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Sparkles size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold leading-tight">Asistente de Daniel</h3>
              <p className="text-xs text-muted-foreground truncate">
                Pregunta sobre su experiencia y proyectos
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
              aria-label="Cerrar chat"
            >
              <X size={20} />
            </button>
          </header>

          <div
            className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-3"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-foreground/[0.06] text-foreground rounded-bl-md",
                  )}
                >
                  {message.role === "assistant"
                    ? renderMessageContent(message.content)
                    : message.content}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="px-3 py-1.5 text-xs rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start" aria-label="El asistente está escribiendo">
                <div className="flex gap-1.5 px-4 py-3.5 rounded-2xl rounded-bl-md bg-foreground/[0.06]">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div className="flex flex-col items-start gap-2">
                <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-bl-md text-sm bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                  {error}
                </div>
                <button
                  type="button"
                  onClick={() => requestReply(messages)}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RotateCcw size={14} /> Reintentar
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-border p-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escribe tu pregunta..."
                maxLength={MAX_MESSAGE_LENGTH}
                enterKeyHint="send"
                aria-label="Mensaje para el asistente"
                // 16px en móvil evita que iOS haga zoom al enfocar el input.
                className="min-w-0 flex-1 h-11 px-4 rounded-full bg-background border border-border text-base sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
                aria-label="Enviar mensaje"
              >
                <Send size={18} />
              </button>
            </div>
            {input.length > MAX_MESSAGE_LENGTH * 0.8 && (
              <p className="mt-1.5 px-4 text-xs text-muted-foreground">
                {input.length}/{MAX_MESSAGE_LENGTH}
              </p>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
