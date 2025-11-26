import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Project Categories
  const categories = ["All", "Web App", "Mobile App", "UI/UX Design"];

  // Sample Project Data (မိမိ Project များနှင့် ချိတ်ဆက်ပါ)
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      desc: "A full-featured online store with cart, payment gateway, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      links: { demo: "#", github: "#" },
    },
    {
      id: 2,
      title: "Finance Tracker App",
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      desc: "Mobile application to track daily expenses and income with visual charts.",
      tech: ["React Native", "Firebase", "Chart.js"],
      links: { demo: "#", github: "#" },
    },
    {
      id: 3,
      title: "Travel Booking UI",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop",
      desc: "Modern and clean user interface design for a travel agency website.",
      tech: ["Figma", "Adobe XD", "Prototyping"],
      links: { demo: "#", github: "#" },
    },
    {
      id: 4,
      title: "Chat Application",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      desc: "Real-time messaging app with group chat and file sharing features.",
      tech: ["React", "Socket.io", "Express"],
      links: { demo: "#", github: "#" },
    },
    {
      id: 5,
      title: "Fitness Workout App",
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
      desc: "Personalized workout plans and diet tracking for fitness enthusiasts.",
      tech: ["Flutter", "Dart", "Firebase"],
      links: { demo: "#", github: "#" },
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      desc: "Personal portfolio website to showcase skills and projects (Like this one!).",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      links: { demo: "#", github: "#" },
    },
  ];

  // Filter Logic
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20 px-6">
      {/* --- Header Section --- */}
      <div className="max-w-7xl mx-auto mb-16 space-y-4">
        <p className="text-[#4ADE80] font-mono text-sm tracking-widest uppercase font-bold">
          My Work
        </p>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Featured Projects<span className="text-[#4ADE80]"></span>
          </h1>

          {/* Stats / Counter */}
          <div className="text-right hidden md:block">
            <span className="text-4xl font-bold text-white">
              {projects.length}
            </span>
            <span className="text-zinc-500 ml-2">Total Projects</span>
          </div>
        </div>
      </div>

      {/* --- Filter Tabs --- */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold border transition-all duration-300 
            ${
              activeCategory === cat
                ? "bg-[#4ADE80] text-black border-[#4ADE80]"
                : "bg-transparent text-gray-400 border-zinc-800 hover:border-[#4ADE80] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- Projects Grid --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#0a0a0a] border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#4ADE80] transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] flex flex-col"
          >
            {/* Image Section with Overlay */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.links.github}
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#4ADE80] hover:text-black transition-colors"
                  title="View Code"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.links.demo}
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#4ADE80] hover:text-black transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[#4ADE80] text-xs font-mono font-bold uppercase tracking-wider mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#4ADE80] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight
                  className="text-zinc-600 group-hover:text-[#4ADE80] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  size={24}
                />
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-900 rounded-md border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
