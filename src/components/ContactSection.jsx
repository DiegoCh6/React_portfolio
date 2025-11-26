import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Facebook,
  Github,
  Sparkles,
} from "lucide-react";

// Typewriter code component with syntax highlighting
const TypewriterCode = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const codeText = `const securityAnalyst = {
  name: "Diego Chuctaya",
  role: "Security Analyst | Software development",
  mission: "Turning vulnerabilities into fortifications",
  expertise: [
    "SIEM Analysis",
    "Threat Detection",
    "Incident Response",
    "Security Monitoring"
  ],
  contact: {
    email: "dchuctayar@gmail.com",
    linkedin: "linkedin.com/in/moisesch",
    status: "Open to opportunities"
  }
};`;

  useEffect(() => {
    if (currentIndex < codeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + codeText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    } else {
      // Wait 3 seconds then restart the animation
      const restartTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 3000);

      return () => clearTimeout(restartTimeout);
    }
  }, [currentIndex, codeText]);

  // Render text with syntax highlighting
  const renderHighlightedText = () => {
    const parts = [];
    let buffer = "";

    for (let i = 0; i < displayedText.length; i++) {
      const char = displayedText[i];
      buffer += char;

      // Check if we completed a token
      if (buffer === "const" || buffer === "let" || buffer === "function") {
        parts.push(
          <span key={i} className="text-purple-400">
            {buffer}
          </span>
        );
        buffer = "";
      } else if (char === '"') {
        // Handle strings
        const stringEnd = displayedText.indexOf('"', i + 1);
        if (stringEnd !== -1 && stringEnd < displayedText.length) {
          const stringContent = displayedText.substring(i, stringEnd + 1);
          parts.push(
            <span key={i} className="text-emerald-400">
              {stringContent}
            </span>
          );
          i = stringEnd;
          buffer = "";
        }
      } else if (char === "[" || char === "]") {
        if (buffer.length > 1) {
          parts.push(
            <span key={`${i}-buf`} className="text-slate-200">
              {buffer.slice(0, -1)}
            </span>
          );
        }
        parts.push(
          <span key={i} className="text-yellow-400">
            {char}
          </span>
        );
        buffer = "";
      } else if (char === ":") {
        if (buffer.length > 1) {
          const property = buffer.slice(0, -1).trim();
          if (property) {
            parts.push(
              <span key={i} className="text-blue-400">
                {property}
              </span>
            );
          }
        }
        parts.push(
          <span key={`${i}-colon`} className="text-slate-200">
            :
          </span>
        );
        buffer = "";
      } else if (
        char === " " ||
        char === "\n" ||
        char === "," ||
        char === "{" ||
        char === "}" ||
        char === ";"
      ) {
        if (buffer.length > 1) {
          parts.push(
            <span key={`${i}-txt`} className="text-slate-200">
              {buffer.slice(0, -1)}
            </span>
          );
        }
        parts.push(
          <span key={i} className="text-slate-200">
            {char}
          </span>
        );
        buffer = "";
      }
    }

    if (buffer) {
      parts.push(
        <span key="final" className="text-slate-200">
          {buffer}
        </span>
      );
    }

    return parts;
  };

  return (
    <div className="relative w-full max-w-2xl group h-full">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

      {/* Code editor window */}
      <div className="relative bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50">
        {/* Window header */}
        <div className="bg-slate-800/90 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-4 text-xs text-slate-400 font-mono">
            security-analyst.ts
          </span>
        </div>

        {/* Code content */}
        <div className="p-6 text-slate-200 min-h-[360px]">
          <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
            {renderHighlightedText()}
            {currentIndex < codeText.length && (
              <span className="inline-block w-2 h-5 bg-primary animate-pulse ml-0.5" />
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export const ContactSection = () => {
  const contactItems = [
    {
      label: "Email",
      value: "dchuctayar@gmail.com",
      href: "mailto:dchuctayar@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+51 977 935 185",
      href: "https://wa.me/51977935185",
      icon: Phone,
    },
    {
      label: "Location",
      value: "Arequipa, Perú",
      href: "https://maps.google.com/?q=Arequipa,Peru",
      icon: MapPin,
    },
  ];

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/moisesch/",
      icon: Linkedin,
    },
    { label: "GitHub", href: "https://github.com/DiegoCh6", icon: Github },
    {
      label: "Facebook",
      href: "https://www.facebook.com/MoisesCBang/",
      icon: Facebook,
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden bg-transparent"
    >
      {/* Decorative background - removed for cleaner look */}
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 justify-center">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Contact & Connect
            </span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Please feel free to reach out. I'm always open to discussing new opportunities and excited to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact info - clean text layout */}
          <div className="space-y-8 lg:col-span-1 flex flex-col justify-center items-center">
            {/* Contact details */}
            <div className="space-y-5 w-full max-w-md">
              {contactItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-4"
                    style={{
                      animation: "var(--animate-card-in)",
                      animationDelay: `${idx * 80}ms`,
                    }}
                  >
                    <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div
              className="pt-6 border-t border-border/50 w-full max-w-md"
              style={{
                animation: "var(--animate-card-in)",
                animationDelay: `${contactItems.length * 80}ms`,
              }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-card/60 backdrop-blur-sm border border-border hover:bg-primary/10 hover:border-primary/50 transition-all group"
                      title={s.label}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Animated typewriter code block */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <TypewriterCode />
          </div>
        </div>
      </div>
    </section>
  );
};
