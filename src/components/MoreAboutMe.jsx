import {
  ArrowRight,
  ExternalLink,
  X,
  Sparkles,
  Eye,
  Trophy,
  Award,
  Book,
  Globe,
} from "lucide-react";
import { useState, useMemo } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Google Cybersecurity Professional Certificate",
    image: "/projects/Cs-google.png",
    demoUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/IG9R3SOO5OQT",
    category: "Certification",
  },
  {
    id: 2,
    title: "IBM Python for Data Science, AI & Development",
    image: "/projects/IBMpy.png",
    demoUrl:
      "https://www.coursera.org/account/accomplishments/verify/WOR7WC6WRY10",
    category: "Certification",
  },
  {
    id: 3,
    title: "Qualys - Vulnerability Management Certificate",
    image: "/projects/Qualys.png",
    category: "Certification",
  },
  {
    id: 4,
    title: "3rd Place Hackathon - Entel Event",
    description:
      "Developed a mobile app focused on consumer health. Role: Presenter & Systems Analyst.",
    images: [
      "/projects/HK-entel.png",
      "/projects/HK2-entel.png", // Reemplaza con la ruta de tu segunda imagen
    ],
    thumbnail: "/projects/HK-entel.png", // Imagen principal para la miniatura
    //tags: ["React", "Node.js", "Stripe"],
    category: "Hackathon",
  },
  {
    id: 5,
    title: "3rd Place Hackathon - Hackathon Koica",
    description:
      "Developed an IoT solution for smart waste management. Role: Presenter & Systems Analyst.",
    image: "/projects/HK-koica.JPG",
    //tags: ["React", "Node.js", "Stripe"],
    // demoUrl: "#",
    // githubUrl: "#",
    category: "Hackathon",
  },
  {
    id: 6,
    title: "IELTS English Certificate - B2",
    description:
      "Currently improving my English to pursue a Master’s degree in Cybersecurity in Australia.",
    image: "/projects/IELTS.png",
    //tags: ["React", "Node.js", "Stripe"],
    // demoUrl: "#",
    // githubUrl: "#",
    category: "Language",
  },
  {
    id: 7,
    title: "Bachiller Degree in Systems Engineering",
    // description:
    //   "Currently improving my English to pursue a Master’s degree in Cybersecurity in Australia.",
    image: "/projects/bachiller1.png",
    //tags: ["React", "Node.js", "Stripe"],
    // demoUrl: "#",
    // githubUrl: "#",
    category: "Academic",
  },
  {
    id: 8,
    title: "Ranking degree - Top 20%",
    // description:
    //   "Currently improving my English to pursue a Master’s degree in Cybersecurity in Australia.",
    image: "/projects/Ranking.png",
    //tags: ["React", "Node.js", "Stripe"],
    // demoUrl: "#",
    // githubUrl: "#",
    category: "Academic",
  },
];

const CATEGORIES = [
  "All",
  "Certification",
  "Hackathon",
  "Academic",
  "Language",
];

const CATEGORY_ICONS = {
  Certification: Award,
  Hackathon: Trophy,
  Academic: Book,
  Language: Globe,
};

const ImagePopup = ({ images, title, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageArray = Array.isArray(images) ? images : [images];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + imageArray.length) % imageArray.length
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-primary text-white rounded-full p-1 hover:bg-primary/80 z-50"
        >
          <X size={24} />
        </button>

        {imageArray.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-primary/80 z-40"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-primary/80 z-40"
            >
              →
            </button>
          </>
        )}

        <img
          src={imageArray[currentImageIndex]}
          alt={`${title} - ${currentImageIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />

        {imageArray.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {imageArray.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentImageIndex === index ? "bg-primary" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const BackgroundEffects = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
  </div>
);

const CategoryButton = ({ category, isActive, onClick }) => {
  const Icon = CATEGORY_ICONS[category] || Sparkles;
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
        isActive
          ? "bg-primary text-primary-foreground border-primary shadow-md animate-filter-active"
          : "bg-card/60 text-foreground border-border hover:border-primary/50 hover:scale-[1.04] hover:shadow-md"
      }`}
    >
      <Icon
        className={`h-4 w-4 ${
          isActive
            ? "text-primary-foreground"
            : "text-muted-foreground group-hover:text-primary"
        }`}
      />
      {category}
    </button>
  );
};

const ProjectCard = ({ project, onImageClick }) => {
  const CatIcon = CATEGORY_ICONS[project.category] || Trophy;

  return (
    <div className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col animate-card-in">
      <div className="relative h-48 cursor-pointer" onClick={onImageClick}>
        <img
          src={project.thumbnail || project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button
          className="absolute bottom-3 left-3 inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-primary text-primary-foreground shadow hover:shadow-md transition"
          onClick={onImageClick}
          type="button"
        >
          <Eye className="h-4 w-4" /> View
        </button>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-xs uppercase tracking-wide font-medium text-primary/80 flex items-center gap-1">
              <CatIcon className="h-3 w-3" />{" "}
              {project.category || "Achievement"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        {project.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        )}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const MoreAboutMe = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter(
        (p) => activeCategory === "All" || p.category === activeCategory
      ),
    [activeCategory]
  );

  return (
    <section id="more-about-me" className="py-28 px-6 relative overflow-hidden">
      <BackgroundEffects />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 justify-center">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Highlights & Achievements
            </span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            More About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A curated selection of certifications, academic milestones and
            hackathon achievements that reflect my continuous growth in
            cybersecurity & software engineering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <CategoryButton
              key={cat}
              category={cat}
              isActive={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={() =>
                setSelectedImage({
                  ...project,
                  images: project.images || project.image,
                })
              }
            />
          ))}
        </div>

        {selectedImage && (
          <ImagePopup
            images={selectedImage.images}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DiegoCh6"
          >
            <span className="relative z-10 flex items-center gap-2">
              Visit My GitHub <ArrowRight size={16} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </a>
        </div>
      </div>
    </section>
  );
};
