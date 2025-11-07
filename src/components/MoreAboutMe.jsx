import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";

const projects = [
	{
		id: 1,
		title: "Google Cybersecurity Professional Certificate",
		// description:
		//   "Full-featured e-commerce platform with user authentication and payment processing.",
		image: "/projects/Cs-google.png",
		//tags: ["React", "TailwindCSS", "Supabase"],
		demoUrl: "https://www.coursera.org/account/accomplishments/professional-cert/IG9R3SOO5OQT",
		// githubUrl: "#a",
	},
	{
		id: 2,
		title: "IBM Python for Data Science, AI & Development",
		// description:
		//   "Interactive analytics dashboard with data visualization and filtering capabilities.",
		image: "/projects/IBMpy.png",
		//tags: ["TypeScript", "D3.js", "Next.js"],
		demoUrl: "https://www.coursera.org/account/accomplishments/verify/WOR7WC6WRY10",
		// githubUrl: "#",
	},
	{
		id: 3,
		title: "Qualys - Vulnerability Management Certificate",
		// description:
		//   "Full-featured e-commerce platform with user authentication and payment processing.",
		image: "/projects/Qualys.png",
		//tags: ["React", "Node.js", "Stripe"],
		// demoUrl: "#",
		// githubUrl: "#",
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
	},
];

const ImagePopup = ({ images, title, onClose }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const imageArray = Array.isArray(images) ? images : [images];

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
	};

	return (
		<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onClose}>
			<div className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
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
									currentImageIndex === index ? 'bg-primary' : 'bg-white/50'
								}`}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export const MoreAboutMe = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<section id="more-about-me" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					{" "}
					More about <span className="text-primary"> Me </span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of the certifications and courses I’ve completed to
					enhance my skills and knowledge in cybersecurity and software
					development, as well as the hackathons I’ve participated in and my GitHub.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
						>
							<div
								className="h-48 overflow-hidden cursor-pointer"
								onClick={() => setSelectedImage({
									...project,
									images: project.images || project.image // Usa images si existe, si no usa image
								})}
							>
								<img
									src={project.thumbnail || project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
								/>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-1">
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										{project.demoUrl && project.demoUrl !== "#" && (
											<a
												href={project.demoUrl}
												target="_blank"
												className="text-foreground/80 hover:text-primary transition-colors duration-300"
											>
												<ExternalLink size={20} />
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{selectedImage && (
					<ImagePopup
						images={selectedImage.images}
						title={selectedImage.title}
						onClose={() => setSelectedImage(null)}
					/>
				)}

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						href="https://github.com/DiegoCh6"
					>
						Check My GitHub <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
