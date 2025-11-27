import {
  ArrowDown,
  Shield,
  Eye,
  Activity,
  Code2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";

const SKILLS = [
  {
    icon: Shield,
    label: "Cybersecurity",
    color: "from-emerald-500 to-teal-600",
  },
  { icon: Eye, label: "SOC", color: "from-blue-500 to-cyan-600" },
  { icon: Activity, label: "SIEM", color: "from-purple-500 to-indigo-600" },
  {
    icon: Code2,
    label: "Software Development",
    color: "from-orange-500 to-red-600",
  },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/DiegoCh6", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/moisesch/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const BackgroundEffects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
    <div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle"
      style={{ animationDelay: "1s" }}
    />
  </div>
);

const SkillPill = ({ skill, index }) => {
  const Icon = skill.icon;
  return (
    <div
      className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default shadow-sm hover:shadow-md"
      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
    >
      <div className={`p-1 rounded-full bg-gradient-to-br ${skill.color}`}>
        <Icon className="h-3 w-3 text-white" />
      </div>
      <span className="text-sm font-medium text-foreground">{skill.label}</span>
    </div>
  );
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
    aria-label={label}
  >
    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
  </a>
);

const ProfileImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/projects/my-photo.png",
    "/projects/my-photo.jpg",
    "/projects/my-photo2.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-shrink-0 opacity-0 animate-fade-in-delay-2">
      <div className="relative group">
        {/* Background glow */}
        <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-emerald-500/20 to-teal-500/30 rounded-full blur-3xl group-hover:blur-[60px] transition-all duration-700 opacity-60 group-hover:opacity-100 animate-pulse-subtle" />

        {/* Decorative rings */}
        <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse-subtle" />
        <div
          className="absolute -inset-8 rounded-full border border-primary/10 animate-pulse-subtle"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Image container */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden bg-card/50 backdrop-blur-md shadow-2xl border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-700 group-hover:scale-105 group-hover:rotate-2">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Moisés Chuctaya - Security Analyst"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Floating particles */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full opacity-60 animate-float" />
        <div
          className="absolute bottom-10 left-0 w-3 h-3 bg-emerald-500 rounded-full opacity-60 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-0 w-2 h-2 bg-teal-500 rounded-full opacity-60 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 pb-24 md:pb-20 overflow-hidden"
    >
      <BackgroundEffects />

      <div className="container max-w-7xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 mb-16 md:mb-0">
          {/* Text content */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6 md:space-y-8">
            {/* Status badge */}
            <div className="opacity-0 animate-fade-in flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-teal-500">
                  Available for opportunities
                </span>
              </div>
            </div>

            {/* Name and title */}
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground opacity-0 animate-fade-in-delay-1">
                👋 Hi, I'm
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground opacity-0 animate-fade-in-delay-1 drop-shadow-sm">
                  Moisés Chuctaya
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-teal-500 opacity-0 animate-fade-in-delay-2 mt-2">
                  Security Analyst
                </span>
              </h1>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start opacity-0 animate-fade-in-delay-2">
              {SKILLS.map((skill, index) => (
                <SkillPill key={skill.label} skill={skill} index={index} />
              ))}
            </div>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              Cybersecurity-focused Systems Engineering graduate with practical
              experience in
              <span className="text-primary font-semibold">
                {" "}
                threat detection
              </span>
              ,
              <span className="text-primary font-semibold">
                {" "}
                SIEM monitoring
              </span>
              , and
              <span className="text-primary font-semibold">
                {" "}
                vulnerability assessment
              </span>
              .
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
              <a
                href="#more-about-me"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  View Certificates
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary/30 bg-card/50 backdrop-blur-sm text-foreground font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 active:scale-95"
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
              {SOCIAL_LINKS.map((social) => (
                <SocialLink key={social.label} {...social} />
              ))}
            </div>
          </div>

          <ProfileImage />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20 group"
        aria-label="Scroll to About section"
      >
        <span className="text-sm font-medium text-muted-foreground mb-2 group-hover:text-primary transition-colors">
          Scroll to explore
        </span>
        <div className="p-2 rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors">
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </a>
    </section>
  );
};
