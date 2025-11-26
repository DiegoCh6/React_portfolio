import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "More", href: "#more-about-me" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ item, onClick }) => (
    <a
      href={item.href}
      onClick={onClick}
      className="text-foreground/80 hover:text-primary transition-colors duration-300"
    >
      {item.name}
    </a>
  );

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/90 backdrop-blur-md shadow-md border-b border-border"
            : "py-5 bg-background/60"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary"
            href="#hero"
            aria-label="Home"
          >
            <span className="text-foreground">Moisés Ch</span> Portfolio
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile nav buttons */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground z-50"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu overlay - moved outside nav for stacking */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center md:hidden">
          {/* Close button at top right */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full text-foreground hover:bg-primary/10 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
