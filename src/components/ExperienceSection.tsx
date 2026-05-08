import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    type: "internship",
    title: "Software Engineering Intern",
    org: "Tech Corp Inc.",
    date: "Jun 2025 – Aug 2025",
    description: "Built microservices with Node.js and deployed to AWS. Improved API response times by 40%.",
    tags: ["Node.js", "AWS", "Docker"],
  },
  {
    type: "certification",
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    date: "2025",
    description: "Demonstrated foundational understanding of AWS cloud services, architecture, and pricing.",
    tags: ["Cloud", "AWS"],
  },
  {
    type: "hackathon",
    title: "1st Place — HackTheCode 2025",
    org: "National Hackathon",
    date: "Mar 2025",
    description: "Built an AI-powered accessibility tool in 36 hours. Won Best Overall Project.",
    tags: ["React", "Python", "AI/ML"],
  },
  {
    type: "achievement",
    title: "Open Source Contributor",
    org: "Various Projects",
    date: "2024 – Present",
    description: "Active contributor to open-source projects with 50+ merged PRs across multiple repositories.",
    tags: ["Git", "TypeScript", "Community"],
  },
];

const typeColors: Record<string, string> = {
  internship: "border-l-primary",
  certification: "border-l-primary",
  hackathon: "border-l-primary",
  achievement: "border-l-primary",
};

const typeIcons: Record<string, string> = {
  internship: "💼",
  certification: "🏆",
  hackathon: "⚡",
  achievement: "🌟",
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative overflow-hidden">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <motion.p
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Journey
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience & <span className="text-gradient-primary">Achievements</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, rotateY: i % 2 === 0 ? -10 : 10 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 -translate-x-1/2 top-8 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.2, type: "spring", stiffness: 300 }}
                />

                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"} pl-8 md:pl-0`}>
                  <motion.div
                    className={`p-6 rounded-2xl bg-card border-l-4 ${typeColors[exp.type]} border border-border hover:border-primary/30 transition-all duration-500`}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      boxShadow: "0 20px 40px -15px hsl(82 85% 55% / 0.1)",
                    }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <motion.span
                        className="text-2xl"
                        animate={isInView ? { rotate: [0, -15, 15, -10, 10, 0] } : {}}
                        transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
                      >
                        {typeIcons[exp.type]}
                      </motion.span>
                      <span className="text-xs font-mono text-primary uppercase tracking-wider">{exp.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-sm text-primary/80 mb-3">{exp.org}</p>
                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                    <div className={`flex gap-2 flex-wrap ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
