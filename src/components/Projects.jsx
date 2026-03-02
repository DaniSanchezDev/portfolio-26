import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Pawtopia",
    description:
      "Pawtopia es un proyecto web desarrollado junto a tres compañeros enfocado en la adopción responsable y el bienestar animal. La plataforma combina diseño y contenido con propósito social, permitiéndonos trabajar en equipo en la planificación, estructura y desarrollo del sitio.",
    image: "/projects/Pawtopia.webp",
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    url: "https://pawtopia-nine.vercel.app/",
    github: "https://github.com/DaniSanchezDev/PawTopia",
  },
  {
    id: 2,
    name: "EcoVibe",
    description:
      "Eco Vibe es una web desarrollada junto a Eloy Lozano con un enfoque en la concienciación del medio ambiente, mostrando información sobre reutilización de materiales y cuidado del medio ambiente mediante un diseño limpio y estructurado. Este trabajo refuerza nuestra colaboración en la planificación.",
    image: "/projects/EcoVibe.webp",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    url: "https://eco-vibe.vercel.app/",
    github: "https://github.com/DaniSanchezDev/eco-vibe",
  },
  {
    id: 3,
    name: "Appfluence",
    description:
      "Proyecto de página web de podcast desarrollada con HTML, CSS y JavaScript, centrada en ofrecer una experiencia de usuario sencilla y moderna para la reproducción y visualización de contenido. Incluye integración de API de spotify para reproductor, diseño responsive y funcionalidades básicas",
    image: "/projects/Appfluence.webp",
    tags: ["HTML", "CSS", "JavaScript", "Flexbox"],
    url: "https://danisanchezdev.github.io/P5_Podcast/html/index.html",
    github: "https://github.com/DaniSanchezDev/P5_Podcast",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
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
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                      project.id === 1 ? "object-[center_0%]" : "object-center"
                    }`}
                  />
                </a>
              </div>

              <div className="px-6 pt-6 pb-6 flex flex-col">
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-3 text-center">
                  {project.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                  {project.description}
                </p>
                <div className="flex justify-center items-center gap-6 pt-4 border-t border-border/30">
                  <a
                    href={project.url}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver proyecto"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
                    target="_blank"
                    title="Ver código"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/DaniSanchezDev"
            className="button w-fit flex items-center mx-auto gap-2 pointer-events-auto"
            target="_blank"
          >
            Visita mi Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
