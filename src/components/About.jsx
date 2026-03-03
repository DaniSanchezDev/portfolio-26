import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-6 p-6 md:p-8 rounded-2xl border border-border/70 bg-background/40 backdrop-blur-sm shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
              Frontend Developer apasionado por crear experiencias web
            </h3>
            <p className="text-foreground/90 leading-relaxed text-justify">
              Llevo más de 2 años construyendo proyectos frontend y 1 año
              trabajando profesionalmente en el sector. Me motiva crear
              interfaces limpias, eficientes y bien estructuradas, cuidando
              tanto la experiencia de usuario como la calidad del código.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Apasionado del desarrollo Frontend, disfruto creando soluciones
              modernas y elegantes. Me encanta aprender constantemente, explorar
              nuevas tecnologías y seguir perfeccionando mi stack principal,
              especialmente en React, buscando siempre mejorar el rendimiento y
              la experiencia en cada proyecto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="button">
                Contactar
              </a>
              <a
                href="/CV-Daniel-Sanchez.pdf"
                download="CV-Daniel-Sanchez.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg active:scale-95"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 h-full place-items-center">
            <div className="group rounded-2xl border border-border/70 bg-background/40 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/60 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/25">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg tracking-tight">
                    Desarrollador de Software
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Crear webs responsivas y aplicaciones web con frameworks
                    modernos
                  </p>
                </div>
              </div>
            </div>
            <div className="group rounded-2xl border border-border/70 bg-background/40 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/60 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/25">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg tracking-tight">
                    Enfoque en el usuario
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Interfaces claras, accesibles y consistentes, cuidando la
                    usabilidad y los detalles.
                  </p>
                </div>
              </div>
            </div>
            <div className="group rounded-2xl border border-border/70 bg-background/40 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/60 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/25">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg tracking-tight">
                    Experiencia y colaboración
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Trabajo con Git, revisiones de código y metodologías ágiles,
                    coordinándome con el equipo y los objetivos del producto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
