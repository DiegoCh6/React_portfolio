import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Cybersecurity
  { name: "Splunk", level: 50, category: "cybersecurity" },
  { name: "Suricata", level: 50, category: "cybersecurity" },
  { name: "Wireshark", level: 40, category: "cybersecurity" },
  { name: "Jira", level: 85, category: "cybersecurity" },
  { name: "Nmap", level: 60, category: "cybersecurity" },
  { name: "Burpsuite", level: 60, category: "cybersecurity" },
  { name: "Metasploit", level: 60, category: "cybersecurity" },
  { name: "OWASP Top10", level: 80, category: "cybersecurity" },
  { name: "Qualys", level: 60, category: "cybersecurity" },

  // Software Development
  { name: "AWS", level: 50, category: "software-development" },
  { name: "Python", level: 75, category: "software-development" },
  { name: "Java", level: 70, category: "software-development" },
  { name: "SQL", level: 75, category: "software-development" },
  { name: "JavaScript", level: 65, category: "software-development" },
  { name: "React", level: 50, category: "software-development" },
  { name: "HTML/CSS", level: 70, category: "software-development" },

  // General
  { name: "Git/GitHub", level: 80, category: "general" },
  { name: "Docker", level: 30, category: "general" },
  { name: "Figma", level: 75, category: "general" },
  { name: "Framer", level: 65, category: "general" },
  { name: "English - B2 IELTS", level: 75, category: "general" },

];

const categories = ["all", "cybersecurity", "software-development", "general"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary/70 text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};