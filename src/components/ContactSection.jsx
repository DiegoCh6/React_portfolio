import { Mail, MapPin, Phone, Linkedin, Facebook } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out. I'm always open to discussing new opportunities
          and excited to learn more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:dchuctayar@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    dchuctayar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/51977935185"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +51 977935185
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <p className="text-muted-foreground">Arequipa - Perú</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/moisesch/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://wa.me/51977935185"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone />
                </a>
                <a
                  href="https://www.facebook.com/MoisesCBang/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image block - se adapta a las dimensiones de la imagen */}
          <div className="flex items-center justify-center">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg flex items-center justify-center border-2 border-primary/20">
              <img
                src="/projects/phrase.jpg"
                alt="Moisés Chuctaya"
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};