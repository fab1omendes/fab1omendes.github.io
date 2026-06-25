import { LanguageProps } from "@/types/LanguageProps";

//Tech list
const techStacks = [
  
  { name: "TypeScript", icon: "📘", color: "#3178C6" },    
  { name: "Java", icon: "☕", color: "#3776AB" },
  { name: "Python", icon: "🐍", color: "#3776AB" },   
  { name: "JavaScript", icon: "📜", color: "#F7DF1E" },
  { name: "Spring Boot", icon: "🍃", color: "#119DFF" },
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "NestJS", icon: "🦁", color: "#FF4B4B" },
  { name: "Angular", icon: "🅰️", color: "#E34F26" },
  { name: "TailwindCSS", icon: "💨", color: "#06B6D4" },
  { name: "ReactJS", icon: "⚛️", color: "#61DAFB" },
  { name: "NodeJS", icon: "🟢", color: "#339933" },
  { name: "SQL", icon: "🗄️", color: "#4479A1" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "NoSQL", icon: "📋", color: "#4DB33D" },
  { name: "Power BI", icon: "📈", color: "#F2C811" },
  { name: "Docker", icon: "🐳", color: "#2496ED" }, 
];

export function TechStacksSection({ t }: LanguageProps) {
  return (
    <section
      id="techSection"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            {t.technologies.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.technologies.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {techStacks.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-card rounded-xl p-6 text-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#59B7D4]/20 cursor-pointer border border-border hover:border-[#59B7D4]/30"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Tech Icon */}
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Tech Name */}
              <h3 className="text-sm text-foreground group-hover:text-[#59B7D4] transition-colors duration-300">
                {tech.name}
              </h3>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, ${tech.color}20, transparent 70%)",
                }}
              ></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 group-hover:animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
