import { useState, useEffect, useMemo } from "react";
import { Shield, Code2, Layers, Grid3X3, Sparkles } from "lucide-react";

const SKILLS = [
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

const CATEGORIES = [
  { key: "all", label: "All", icon: Grid3X3 },
  { key: "cybersecurity", label: "Cybersecurity", icon: Shield },
  { key: "software-development", label: "Software Dev", icon: Code2 },
  { key: "general", label: "General", icon: Layers },
];

const ICON_URLS = {
  Python: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
  Java: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/java.svg",
  React: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
  AWS: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg",
  Docker: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
  "Git/GitHub":
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
  SQL: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg",
  Wireshark:
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wireshark.svg",
  Suricata: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/suricata.svg",
  Nmap: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nmap.svg",
  Splunk: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/splunk.svg",
  Burpsuite:
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/burpsuite.svg",
  Metasploit:
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/metasploit.svg",
  Jira: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jira.svg",
  Qualys: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/qualys.svg",
  "OWASP Top10":
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/owasp.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg",
  Figma: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
  Framer: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/framer.svg",
};

const getCategoryStyles = (category) => {
  const styles = {
    cybersecurity: {
      bg: "bg-emerald-500/20 dark:bg-emerald-500/15",
      border: "border-emerald-400/40",
      text: "text-emerald-700 dark:text-emerald-400",
    },
    "software-development": {
      bg: "bg-blue-500/20 dark:bg-blue-500/15",
      border: "border-blue-400/40",
      text: "text-blue-700 dark:text-blue-400",
    },
    general: {
      bg: "bg-purple-500/20 dark:bg-purple-500/15",
      border: "border-purple-400/40",
      text: "text-purple-700 dark:text-purple-400",
    },
  };
  return styles[category] || styles.general;
};

const getLevelBadgeStyles = (level) => {
  if (level >= 70) {
    return "bg-emerald-500/15 text-emerald-600 border-emerald-500/30";
  }
  if (level >= 50) {
    return "bg-amber-500/15 text-amber-600 border-amber-500/30";
  }
  return "bg-gray-500/10 text-gray-600 border-gray-500/20";
};

const SkillIcon = ({ skill }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [skill.name]);

  const iconUrl = ICON_URLS[skill.name];
  const fallbackLetter = skill.name
    .split(/[\s/-]/)[0]
    .charAt(0)
    .toUpperCase();
  const styles = getCategoryStyles(skill.category);

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full w-10 h-10 text-sm font-bold ${styles.bg} border ${styles.border} ${styles.text}`}
    >
      {iconUrl && !imageError ? (
        <img
          key={`${skill.name}-${skill.category}`}
          src={iconUrl}
          alt={`${skill.name} icon`}
          className="h-6 w-6 [filter:brightness(0)_saturate(100%)_invert(20%)_sepia(0%)_saturate(0%)_hue-rotate(0deg)_brightness(90%)_contrast(100%)] dark:invert dark:brightness-100 dark:saturate-100"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        fallbackLetter
      )}
    </span>
  );
};

const BackgroundEffects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
  </div>
);

const CategoryButton = ({ category, isActive, onClick }) => {
  const Icon = category.icon;
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300 capitalize backdrop-blur-sm ${
        isActive
          ? "bg-primary text-primary-foreground border-primary shadow-md hover:shadow-lg"
          : "bg-card/60 text-foreground border-border hover:border-primary/50 hover:scale-[1.03]"
      }`}
    >
      <Icon
        className={`h-4 w-4 ${
          isActive
            ? "text-primary-foreground"
            : "text-muted-foreground group-hover:text-primary"
        }`}
      />
      {category.label}
    </button>
  );
};

const SkillCard = ({ skill }) => (
  <div className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-3">
        <SkillIcon skill={skill} />
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
      </div>
      <span
        className={`text-xs px-2 py-1 rounded-full font-medium border ${getLevelBadgeStyles(
          skill.level
        )}`}
      >
        {skill.level}%
      </span>
    </div>
    <div className="w-full h-2 rounded-full bg-gradient-to-r from-secondary/60 to-secondary/40 overflow-hidden">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-primary to-emerald-500 origin-left transition-all duration-500 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-emerald-500/0 group-hover:from-primary/5 group-hover:to-emerald-500/5 transition-all duration-300 -z-10" />
  </div>
);

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = useMemo(
    () =>
      SKILLS.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
      ),
    [activeCategory]
  );

  return (
    <section
      id="skills"
      className="py-28 px-6 relative bg-secondary/30 overflow-hidden"
    >
      <BackgroundEffects />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 justify-center">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Skills & Tools
            </span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto" />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map((category) => (
            <CategoryButton
              key={category.key}
              category={category}
              isActive={activeCategory === category.key}
              onClick={() => setActiveCategory(category.key)}
            />
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredSkills.map((skill) => (
            <SkillCard key={`${skill.name}-${skill.category}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
