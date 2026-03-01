import React from "react";

const projects = [
  {
    id: 1,
    name: "Pawtopia",
    description:
      "Pawtopia es un proyecto web desarrollado junto a tres compañeros enfocado en la adopción responsable y el bienestar animal. La plataforma combina diseño y contenido con propósito social, permitiéndonos trabajar en equipo en la planificación, estructura y desarrollo del sitio.",
    image: "/projects/pawtopia.png",
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    id: 2,
    name: "EcoVibe",
    description:
      "Eco Vibe es una web desarrollada junto a un compañero enfocada en sostenibilidad y hábitos responsables. El proyecto combina diseño claro y estructura organizada, reforzando nuestra colaboración en la planificación y desarrollo conjunto.",
    image: "/projects/ecovibe.png",
    tags: ["HTML", "CSS", "JavaScript", "Boostrap"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mis <span className="text-primary">Proyectos</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Aquí podrás encontrar algunos de los proyectos en los que he
          trabajado, tanto individualmente como en equipo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-border/70 bg-background/40 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/60 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="px-4 pt-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
