import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="bg-background/40 backdrop-blur-sm py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                <span className="text-foreground">Daniel </span>
                <span className="text-primary">Sánchez</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Frontend Developer especializado en React, creando experiencias
                web modernas, accesibles y eficientes.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Enlaces rápidos</h4>
              <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:mt-8">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Sobre mí
                </a>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Habilidades
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Proyectos
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  Contacto
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Sígueme</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://github.com/DaniSanchezDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dani-sanchez-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:danielsanchezvazquez5@gmail.com"
                  className="p-3 rounded-lg bg-background/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-muted-foreground text-sm text-center">
              © {currentYear} Daniel Sánchez Vázquez. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
