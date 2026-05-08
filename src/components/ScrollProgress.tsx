import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, hsl(var(--primary)), hsl(120 70% 45%))",
        boxShadow: "0 0 10px hsl(var(--primary) / 0.6)",
      }}
    />
  );
};

export default ScrollProgress;
