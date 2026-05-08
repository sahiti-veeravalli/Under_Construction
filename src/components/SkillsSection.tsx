import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML / CSS", level: 95 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python / FastAPI", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS / Cloud", level: 75 },
      { name: "Figma", level: 85 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative overflow-hidden">
      <motion.div
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
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
            Expertise
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Skills & <span className="text-gradient-primary">Tools</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + ci * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 p-6 rounded-2xl bg-card/80 border border-border hover:border-primary/20 transition-all duration-500"
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px hsl(82 85% 55% / 0.1)" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.span
                  className="text-3xl"
                  animate={isInView ? { rotate: [0, -10, 10, -5, 5, 0] } : {}}
                  transition={{ delay: 0.8 + ci * 0.2, duration: 0.6 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              {category.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + ci * 0.2 + si * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <motion.span
                      className="text-sm font-mono text-primary"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + ci * 0.2 + si * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:
                      "linear-gradient(90deg, hsl(var(--primary)), hsl(120 70% 45%))",
                      }}
                      initial={{ width: 0, opacity: 0 }}
                      animate={isInView ? { width: `${skill.level}%`, opacity: 1 } : {}}
                      transition={{
                        delay: 0.6 + ci * 0.2 + si * 0.15,
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
