import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { toast } from "sonner";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Pulse Dashboard",
    category: "Web App",
    description: "Real-time analytics dashboard with live data visualization and dark mode interface.",
    image: project1,
    tags: ["React", "D3.js", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Luxe Commerce",
    category: "E-Commerce",
    description: "Premium fashion e-commerce platform with AI-powered recommendations.",
    image: project2,
    tags: ["Next.js", "Stripe", "Prisma"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "TradeFlow",
    category: "FinTech",
    description: "Advanced trading platform with real-time market data and portfolio tracking.",
    image: project3,
    tags: ["TypeScript", "WebSocket", "Charts"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "ConnectHub",
    category: "Social Platform",
    description: "Modern social networking app with real-time messaging and content sharing.",
    image: project4,
    tags: ["React Native", "Firebase", "GraphQL"],
    liveLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="projects" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <motion.p
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, x: -40 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, x: -60 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Selected <span className="text-gradient-primary">Works</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2 md:gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-mono uppercase tracking-wider border transition-colors duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success("Coming Soon :)", {
      description: "This project details will be available soon!",
      duration: 3000,
      style: {
        borderRadius: "8px",
        background: "hsl(82 85% 55% / 0.1)",
        border: "1px solid hsl(82 85% 55% / 0.3)",
        color: "hsl(0 0% 100%)",
      },
    });
  };

  return (
    <motion.div
      ref={ref}
      layout
      className="group block relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "1000px" }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-primary uppercase tracking-wider">{project.category}</span>
          <motion.span
            className="h-px bg-primary"
            initial={{ width: 0 }}
            animate={isInView ? { width: 32 } : {}}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
          />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-lg">
          {project.title}
        </h3>
        <motion.p
          className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-md"
        >
          {project.description}
        </motion.p>
        <div className="flex gap-2 flex-wrap mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <motion.button
            onClick={handleComingSoon}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Live Demo
          </motion.button>
          <motion.button
            onClick={handleComingSoon}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/40 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            GitHub
          </motion.button>
        </div>
      </div>

      {/* Hover arrow */}
      <motion.div
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.2, rotate: 45 }}
      >
        <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
