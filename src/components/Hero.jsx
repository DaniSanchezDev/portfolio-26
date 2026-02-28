import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className=" space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hola! Soy</span>
            <span className=" text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Daniel
            </span>
            <span className=" text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Sánchez
            </span>
          </h1>

          <p className="text-lg md:text-xl  max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Soy desarrollador Frontend con experiencia en React y pasión por
            crear aplicaciones web limpias, eficientes y bien estructuradas. Me
            gusta aprender constantemente, mejorar cada día y aportar valor real
            a los proyectos en los que participo.
          </p>

          <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="button">
              Ver Proyectos
            </a>
          </div>
        </div>

        <a
          href="#projects"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
          aria-label="Ir a proyectos"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-10 bg-linear-to-b from-muted-foreground/80 to-transparent rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-scroll-hint" />
          </div>
          <span className="text-xs text-muted-foreground tracking-widest uppercase group-hover:text-primary transition-colors duration-300">
            Sigue bajando
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
