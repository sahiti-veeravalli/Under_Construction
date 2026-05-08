import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    color: "hsl(82 85% 55%)",
    glowBorder: "hsl(82 85% 55% / 0.4)",
    titleGradient: "from-[hsl(82_85%_55%)] to-[hsl(160_70%_50%)]",
    link: "#",
  },
  {
    title: "Meta Frontend Developer Certificate",
    issuer: "Meta (Coursera)",
    date: "2024",
    color: "hsl(280 80% 60%)",
    glowBorder: "hsl(280 80% 60% / 0.3)",
    titleGradient: "",
    link: "#",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    color: "hsl(280 80% 60%)",
    glowBorder: "hsl(280 80% 60% / 0.2)",
    titleGradient: "",
    link: "#",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM (Coursera)",
    date: "2023",
    color: "hsl(145 70% 50%)",
    glowBorder: "hsl(145 70% 50% / 0.2)",
    titleGradient: "",
    link: "#",
  },
];

const courses = [
  {
    title: "Full-Stack Web Development",
    platform: "Udemy",
    instructor: "Dr. Angela Yu",
    emoji: "🌐",
    color: "hsl(200 80% 55%)",
  },
  {
    title: "AIML 24 Week Training",
    platform: "IIIT  Hyderabad",
    instructor: "Dr.C.K.Raju",
    emoji: "🤖",
    color: "hsl(320 80% 55%)",
    titleGradient: "from-[hsl(82_85%_55%)] to-[hsl(280_80%_60%)]",
  },
  {
    title: "React – The Complete Guide",
    platform: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    emoji: "⚡",
    color: "hsl(30 90% 55%)",
  },
  {
    title: "Python for Data Science & AI",
    platform: "IBM / Coursera",
    instructor: "IBM Team",
    emoji: "🐍",
    color: "hsl(145 70% 50%)",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
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
            Credentials
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Certifications & <span className="text-gradient-primary">Courses</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              className="group relative flex items-center gap-5 p-5 md:p-6 rounded-2xl bg-card border border-border transition-all duration-500 overflow-hidden hover:-translate-y-1.5 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
              style={{ perspective: "1000px" }}
            >
              {/* Medal icon */}
              <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="1.5">
                  <circle cx="12" cy="9" r="5" />
                  <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
                </svg>
              </motion.div>

              <div className="flex-1 min-w-0">
                <h3
                  className={`text-base md:text-lg font-bold mb-1 transition-colors duration-300 ${
                    cert.titleGradient
                      ? `bg-clip-text text-transparent bg-gradient-to-r ${cert.titleGradient}`
                      : "text-foreground group-hover:text-primary"
                  }`}
                >
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span>{cert.issuer}</span>
                  <span className="text-border">•</span>
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* External link icon */}
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                whileHover={{ scale: 1.2 }}
              >
                <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Relevant Courses */}
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-foreground mt-20 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          Relevant <span className="text-gradient-primary">Courses</span>
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_40px_-12px_hsl(82_85%_55%/0.1)]"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <motion.span
                className="text-3xl block mb-4"
                whileHover={{ scale: 1.3, rotate: [0, -12, 12, 0] }}
                transition={{ duration: 0.4 }}
              >
                {course.emoji}
              </motion.span>
              <h4
                className={`text-sm font-bold mb-2 transition-colors duration-300 ${
                  course.titleGradient
                    ? `bg-clip-text text-transparent bg-gradient-to-r ${course.titleGradient}`
                    : "text-foreground group-hover:text-primary"
                }`}
              >
                {course.title}
              </h4>
              <p className="text-xs text-primary/60 mb-0.5">{course.platform}</p>
              <p className="text-xs text-muted-foreground italic">{course.instructor}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
