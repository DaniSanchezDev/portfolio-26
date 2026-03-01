import React, { useEffect, useRef, useState } from "react";
import {
  Atom,
  Braces,
  Code2,
  Database,
  Figma,
  FileCode2,
  GitBranch,
  Palette,
  Server,
  Sparkles,
  TextCursor,
  Wind,
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML", icon: Code2, level: 90, category: "Frontend" },
  { name: "CSS", icon: Palette, level: 85, category: "Frontend" },
  { name: "React", icon: Atom, level: 85, category: "Frontend" },
  { name: "JavaScript", icon: FileCode2, level: 80, category: "Frontend" },
  { name: "TypeScript", icon: Braces, level: 70, category: "Frontend" },
  { name: "Tailwind CSS", icon: Wind, level: 70, category: "Frontend" },
  { name: "Next.js", icon: Sparkles, level: 50, category: "Frontend" },

  // Backend
  { name: "Spring Boot", icon: Server, level: 85, category: "Backend" },
  { name: "Java", icon: Braces, level: 70, category: "Backend" },
  { name: "PostgreSQL", icon: Database, level: 70, category: "Backend" },
  { name: "Node.js", icon: Server, level: 70, category: "Backend" },
  { name: "MongoDB", icon: Database, level: 65, category: "Backend" },

  // Tools
  { name: "Git/Github", icon: GitBranch, level: 85, category: "Tools" },
  { name: "Figma", icon: Figma, level: 70, category: "Tools" },
  { name: "Cursor", icon: TextCursor, level: 70, category: "Tools" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartXRef = useRef(null);

  const filteredSkills =
    activeCategory === "all"
      ? [...skills].sort((a, b) => b.level - a.level)
      : skills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    if (filteredSkills.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredSkills.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredSkills.length]);

  const handlePrev = () => {
    if (!filteredSkills.length) return;
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredSkills.length) % filteredSkills.length,
    );
  };

  const handleNext = () => {
    if (!filteredSkills.length) return;
    setActiveIndex((prevIndex) => (prevIndex + 1) % filteredSkills.length);
  };

  const handleTouchStart = (event) => {
    if (event.touches && event.touches.length > 0) {
      touchStartXRef.current = event.touches[0].clientX;
    }
  };

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current == null) return;

    const touch = event.changedTouches && event.changedTouches[0];
    if (!touch) {
      touchStartXRef.current = null;
      return;
    }

    const diff = touch.clientX - touchStartXRef.current;
    const threshold = 40;

    if (Math.abs(diff) > threshold) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Mis <span className="text-primary">Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "Frontend", "Backend", "Tools"].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground/80 border-border hover:border-primary/40"
              }`}
            >
              {category === "all" ? "Todas" : category}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
            aria-label="Anterior habilidad"
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-4xl h-[210px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              const total = filteredSkills.length;

              if (!total) return null;

              const half = Math.floor(total / 2);
              let offset = index - activeIndex;
              if (offset > half) offset -= total;
              if (offset < -half) offset += total;

              const distance = Math.abs(offset);
              const baseWidth = 210;
              const translateX = offset * baseWidth;
              const scale = 1 - Math.min(distance * 0.12, 0.5);
              const opacity = 1 - Math.min(distance * 0.2, 0.8);
              const blur = distance >= 3 ? 4 : 0;

              const style = {
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                opacity,
                filter: blur ? `blur(${blur}px)` : undefined,
                zIndex: 100 - distance,
              };

              return (
                <div
                  key={index}
                  className="group absolute w-[190px] sm:w-[220px] lg:w-[200px] rounded-2xl border border-border/70 bg-background/40 backdrop-blur-sm p-4 shadow-sm transition-all duration-700 ease-out hover:border-primary/30 hover:bg-background/60 hover:shadow-lg"
                  style={style}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      {Icon && (
                        <Icon className="w-7 h-7 text-primary" aria-hidden />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    {(() => {
                      let tags;

                      switch (skill.category) {
                        case "Frontend":
                          tags = [
                            "Interfaces modernas",
                            "Componentes reutilizables",
                            "Experiencia real",
                          ];
                          break;
                        case "Backend":
                          tags = [
                            "APIs y servicios",
                            "Lógica de negocio",
                            "Trabajo con datos",
                          ];
                          break;
                        case "Tools":
                          tags = [
                            "Flujo de trabajo",
                            "Productividad",
                            "Colaboración",
                          ];
                          break;
                        default:
                          tags = ["Parte de mi stack"];
                      }

                      return (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {tags.map((tag, idx) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 rounded-full text-xs ${
                                idx === 0
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
            aria-label="Siguiente habilidad"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
