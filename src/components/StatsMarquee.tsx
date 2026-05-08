import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { label: "Projects Completed", value: 48, suffix: "+" },
  { label: "Happy Clients", value: 32, suffix: "+" },
  { label: "Years Experience", value: 6, suffix: "" },
  { label: "Awards Won", value: 12, suffix: "" },
];

const StatsMarquee = () => {
  return (
    <section className="py-20 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="text-4xl md:text-6xl font-bold text-gradient-primary mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex items-center gap-8 mx-4">
              {["React", "TypeScript", "Node.js", "Figma", "Next.js", "Tailwind", "Three.js", "Framer Motion"].map((tech) => (
                <span key={`${tech}-${j}`} className="text-2xl md:text-4xl font-bold text-muted/50 hover:text-primary transition-colors duration-500 cursor-default px-4">
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMarquee;
