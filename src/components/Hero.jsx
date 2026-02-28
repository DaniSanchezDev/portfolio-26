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
              Trabajos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
