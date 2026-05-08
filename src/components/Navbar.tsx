import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Profiles", href: "#coding-profiles", id: "coding-profiles" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(navItems.map((i) => i.id));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="relative">
          <motion.a
            href="#"
            className="text-2xl font-bold text-gradient-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setShowName(true)}
            onHoverEnd={() => setShowName(false)}
          >
            SV.
          </motion.a>

          <AnimatePresence>
            {showName && (
              <motion.div
                className="absolute top-[80%] left-[60%] pointer-events-none z-50"
                initial={{ opacity: 0, scale: 0.5, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* SVG cloud shape */}
                <svg width="200" height="80" viewBox="0 0 200 80" fill="none" className="drop-shadow-[0_8px_24px_hsl(82_85%_55%/0.3)]">
                  {/* Cloud body */}
                  <ellipse cx="100" cy="48" rx="85" ry="28" fill="hsl(82 85% 55% / 0.08)" stroke="hsl(82 85% 55% / 0.25)" strokeWidth="1" />
                  <ellipse cx="55" cy="42" rx="40" ry="24" fill="hsl(82 85% 55% / 0.06)" />
                  <ellipse cx="140" cy="44" rx="38" ry="22" fill="hsl(280 80% 60% / 0.05)" />
                  <ellipse cx="85" cy="35" rx="30" ry="18" fill="hsl(82 85% 55% / 0.04)" />
                  {/* Small bubble connectors going to top-left */}
                  <circle cx="22" cy="22" r="10" fill="hsl(82 85% 55% / 0.1)" stroke="hsl(82 85% 55% / 0.2)" strokeWidth="0.8" />
                  <circle cx="12" cy="10" r="5" fill="hsl(82 85% 55% / 0.12)" stroke="hsl(82 85% 55% / 0.2)" strokeWidth="0.6" />
                </svg>
                {/* Text overlay */}
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gradient-primary whitespace-nowrap pt-2"
                  initial={{ filter: "blur(6px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.12 }}
                >
                  Sahiti Veeravalli
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => {
            const isActive = activeId === item.id;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
          <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <div className="relative group">
            <motion.button
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-52 rounded-xl border border-border bg-popover/95 backdrop-blur-xl shadow-lg overflow-hidden">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Open in browser
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 z-50">
          <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-foreground block" />
          <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-foreground block" />
          <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-foreground block" />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
