import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Texto: ahora está centrado verticalmente junto a la foto */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Moisés
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Chuctaya
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-prose mt-4 opacity-0 animate-fade-in-delay-3">
              Bachelor’s degree in Systems Engineering with a solid foundation in
              software development and management. Currently specializing in
              cybersecurity, with a strong focus on continuous learning and
              practical application.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#more-about-me" className="cosmic-button">
                Certificates
              </a>
            </div>
          </div>

          {/* Bloque foto: tamaño más grande, estético y responsive */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-card shadow-lg border border-border">
              {/* reemplaza con la ruta de tu foto */}
              <img
                src="/projects/my-photo.jpg"
                alt="Moisés Chuctaya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};