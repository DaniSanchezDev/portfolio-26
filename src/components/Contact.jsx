import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState, useRef } from "react";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          toast({
            title: "¡Mensaje enviado!",
            description: "Gracias por contactarme, te responderé pronto.",
            variant: "success",
          });
          formRef.current.reset();
        },
        (error) => {
          toast({
            title: "Error al enviar",
            description:
              "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
            variant: "destructive",
          });
          console.error("EmailJS Error:", error);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className=" container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Contacta <span className="text-primary">conmigo</span>{" "}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estoy abierto a nuevas oportunidades y proyectos interesantes. Si
          tienes interés o curiosidad de saber algo sobre mí, estoy abierto a
          nuevas oportunidades
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-2xl border border-border/70 bg-background/40 backdrop-blur-sm p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/60 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-8">
              Información de contacto
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-2 sm:p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Email
                  </h4>
                  <a
                    href="mailto:danielsanchezvazquez5@gmail.com"
                    className="text-foreground hover:text-primary transition-colors font-medium break-all"
                  >
                    danielsanchezvazquez5@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-2 sm:p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Teléfono
                  </h4>
                  <a
                    href="tel:+34682084358"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    +34 682 084 358
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-2 sm:p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Localización
                  </h4>
                  <p className="text-foreground hover:text-primary transition-colors font-medium">
                    A Coruña, Galicia
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/30">
              <h4 className="font-semibold mb-4">Visítame en redes</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/dani-sanchez-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/DaniSanchezDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-background/40 backdrop-blur-sm p-4 sm:p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/60 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-border/80"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-border/80"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-border/80 resize-none"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="button w-full flex items-center justify-center gap-2 mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
