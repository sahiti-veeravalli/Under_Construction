import { motion } from "framer-motion";
import {
  SiMongodb, SiHtml5, SiCss, SiGit, SiGithub
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const iconData = [
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiCss, color: "#1572B6" },
  { Icon: FaJava, color: "#ED8B00" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiGithub, color: "#aaa" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: FaJava, color: "#ED8B00" },
  { Icon: SiGithub, color: "#aaa" },
  { Icon: SiCss, color: "#1572B6" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: FaJava, color: "#ED8B00" },
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiGithub, color: "#aaa" },
  { Icon: SiCss, color: "#1572B6" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: FaJava, color: "#ED8B00" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiGithub, color: "#aaa" },
  { Icon: SiCss, color: "#1572B6" },
  { Icon: FaJava, color: "#ED8B00" },
  { Icon: SiMongodb, color: "#47A248" },
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
};

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {iconData.map(({ Icon, color }, i) => {
        const left = seededRandom(i * 3 + 1) * 100;
        const top = seededRandom(i * 7 + 2) * 100;
        const size = 24 + seededRandom(i * 11 + 3) * 28;
        const duration = 18 + seededRandom(i * 13 + 4) * 30;
        const delay = seededRandom(i * 17 + 5) * 10;
        const rotStart = (seededRandom(i * 19 + 6) - 0.5) * 40;
        const rotEnd = rotStart + (seededRandom(i * 31 + 9) - 0.5) * 60;
        const xDrift = (seededRandom(i * 23 + 7) - 0.5) * 80;
        const yDrift = (seededRandom(i * 29 + 8) - 0.5) * 80;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: size,
              color,
              opacity: 0.35,
            }}
            animate={{
              x: [0, xDrift, -xDrift * 0.5, 0],
              y: [0, yDrift, -yDrift * 0.7, 0],
              rotate: [rotStart, rotEnd, rotStart],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
