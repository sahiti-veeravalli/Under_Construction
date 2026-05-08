import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity }} />
      
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl"
        animate={{ x: [0, -40, 30, 0], y: [0, 20, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity }} />
      

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}>
            
            <motion.p variants={item} className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">
              About Me
            </motion.p>
            <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-8">
              Passionate about{" "}
              <span className="text-gradient-primary">building</span>
            </motion.h2>
            <motion.div variants={item} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi! I’m Sahiti Veeravalli, a B.Tech Computer Science student passionate about using technology to solve real-world problems. I enjoy exploring new tools, learning modern technologies, and building projects that combine creativity with problem solving. I thrive at the intersection of design and engineering.
              
              </p>
              <p>
                My interests include software development, data analysis, and experimenting with emerging technologies. I often use AI-powered tools to accelerate development, learn new concepts, and prototype ideas, while continuously improving my programming and problem-solving skills.
              

              </p>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              {["Open to Opportunities", "Remote Friendly", "Open Source Enthusiast"].map((tag, i) =>
              <motion.span
                key={tag}
                className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium"
                whileHover={{
                  scale: 1.1,
                  borderColor: "hsl(82 85% 55%)",
                  boxShadow: "0 0 20px -5px hsl(82 85% 55% / 0.4)"
                }}
                whileTap={{ scale: 0.95 }}>
                
                  {tag}
                </motion.span>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ perspective: "1000px" }}>
            
            <div className="grid grid-cols-2 gap-4">
              {[
              { number: "10+", label: "Projects Built" },
              { number: "5+", label: "Tech Stacks" },
              { number: "3+", label: "Hackathons" },
              { number: "∞", label: "Curiosity" }].
              map((stat, i) =>
              <motion.div
                key={stat.label}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 20px 40px -15px hsl(82 85% 55% / 0.15)"
                }}>
                
                  <motion.div
                  className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 200 }}>
                  
                    {stat.number}
                  </motion.div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;