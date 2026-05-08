import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "CMR Institute of Technology, Medchal, Hyderabad",
    duration: "2023– 2027",
    grade: "CGPA: 8.4 / 10",
    highlights: ["Data Structures & Algorithms", "Web Technologies", "Cloud Computing", "Machine Learning"],
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College, Uppal, Hyderabad",
    duration: "2021 – 2023",
    grade: "Score: 82%",
    highlights: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    degree: "SSC (10th Grade)",
    institution: "Sri Chaitanya Techno School, Ecil, Hyderabad",
    duration: "2018 – 2021",
    grade: "CGPA: 10 / 10",
    highlights: ["Cultural Coordinator", "Event Emcee"],
  },
  {
    degree: "Schooling",
    institution: "St Anns High School, Tarnaka, Hyderabad",
    duration: "2008 – 2018",
    grade: "",
    highlights: [],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="relative overflow-hidden">
      <motion.div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl"
        animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />

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
            Education
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Academic <span className="text-gradient-primary">Journey</span>
          </motion.h2>
        </motion.div>

        <div className="relative space-y-8">
          {/* Vertical connector */}
          <motion.div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="relative pl-16 md:pl-20"
              initial={{ opacity: 0, x: -60, rotateY: -8 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
              style={{ perspective: "1000px" }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-[18px] md:left-[26px] top-8 w-5 h-5 rounded-full border-4 border-background z-10"
                style={{ background: i === 0 ? "hsl(82 85% 55%)" : i === 1 ? "hsl(280 80% 60%)" : "hsl(200 80% 55%)" }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.25, type: "spring", stiffness: 300 }}
              />

              {/* Pulse ring on first item */}
              {i === 0 && (
                <motion.div
                  className="absolute left-[14px] md:left-[22px] top-[28px] w-7 h-7 rounded-full border-2 border-primary"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <motion.div
                className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -15px hsl(82 85% 55% / 0.12)",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                    >
                      {edu.degree}
                    </motion.h3>
                    <p className="text-primary/80 text-sm mt-1">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{edu.duration}</span>
                    {edu.grade && (
                      <motion.span
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 20px -5px hsl(82 85% 55% / 0.4)" }}
                      >
                        {edu.grade}
                      </motion.span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {edu.highlights.map((h, hi) => (
                    <motion.span
                      key={h}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.25 + hi * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(82 85% 55% / 0.15)" }}
                    >
                      {h}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
