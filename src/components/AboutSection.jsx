import {
  Briefcase,
  Code,
  MonitorCheck,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Developing efficient and scalable software solutions using modern programming languages such as ",
    highlights: ["Java", "Python"],
    gradient: "from-primary/20 to-emerald-500/20",
    hoverGradient: "from-primary/30 to-emerald-500/30",
    glowGradient: "from-primary to-emerald-600",
    iconColor: "text-primary",
    hoverColor: "group-hover:text-primary",
  },
  {
    icon: MonitorCheck,
    title: "SIEM & Monitoring",
    description:
      "Implementing and managing Security Information and Event Management (SIEM) solutions for ",
    highlights: ["real-time monitoring"],
    extra: ", threat detection, and incident response.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    hoverGradient: "from-blue-500/30 to-cyan-500/30",
    glowGradient: "from-blue-500 to-cyan-600",
    iconColor: "text-blue-500",
    hoverColor: "group-hover:text-blue-500",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Knowledge of ",
    highlights: ["Agile methodologies"],
    extra:
      " and experience collaborating in cross-functional teams to ensure efficient project delivery.",
    gradient: "from-purple-500/20 to-indigo-500/20",
    hoverGradient: "from-purple-500/30 to-indigo-500/30",
    glowGradient: "from-purple-500 to-indigo-600",
    iconColor: "text-purple-500",
    hoverColor: "group-hover:text-purple-500",
  },
];

const BackgroundEffects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
  </div>
);

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="group relative p-7 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.glowGradient} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
          />
          <div
            className={`relative p-4 rounded-2xl bg-gradient-to-br ${
              service.gradient
            } ${service.hoverGradient
              .replace("from-", "group-hover:from-")
              .replace("to-", "group-hover:to-")} transition-all duration-300`}
          >
            <Icon className={`h-7 w-7 ${service.iconColor}`} />
          </div>
        </div>
        <div className="flex-1 text-left space-y-2">
          <h4
            className={`font-bold text-xl text-foreground ${service.hoverColor} transition-colors`}
          >
            {service.title}
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            {service.description}
            {service.highlights.map((highlight, idx) => (
              <span key={idx}>
                <span className={`${service.iconColor} font-medium`}>
                  {highlight}
                </span>
                {idx < service.highlights.length - 1 && " and "}
              </span>
            ))}
            {service.highlights.length === 1 && "."}
            {service.extra}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <BackgroundEffects />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="inline-flex items-center gap-3 justify-center">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Get to know me
            </span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                Passionate about technology &
                <span className="text-primary"> Information Security</span>
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto lg:mx-0" />

              <div className="space-y-5 max-w-2xl mx-auto lg:mx-0">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Professional with{" "}
                  <span className="text-primary font-semibold">
                    hands-on experience
                  </span>{" "}
                  in simulated cybersecurity environments using
                  industry-standard tools, complemented by a solid foundation in
                  software development.
                </p>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Constantly learning new technologies and techniques to stay at
                  the forefront of the ever-evolving field of{" "}
                  <span className="text-primary font-semibold">
                    cybersecurity
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="/projects/CV_DiegoCh_SecurityAnalyst.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-9 py-5 rounded-full border-2 border-primary/30 bg-card/50 backdrop-blur-sm text-foreground font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 active:scale-95"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
