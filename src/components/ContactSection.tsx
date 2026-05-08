import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const SocialIcon = ({ label, href, icon, tooltip }: { label: string; href: string; icon: React.ReactNode; tooltip?: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="relative">
      <motion.a
        href={href}
        target={label !== "Gmail" ? "_blank" : undefined}
        rel={label !== "Gmail" ? "noopener noreferrer" : undefined}
        className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
        whileHover={{ y: -4, scale: 1.1 }}
        onHoverStart={() => tooltip && setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}>
        {icon}
      </motion.a>
      <AnimatePresence>
        {showTooltip && tooltip && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-card border border-border text-foreground px-3 py-1.5 rounded-lg shadow-lg pointer-events-none">
            {tooltip}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sahithi.veeravalli19@gmail.com&su=${subject}&body=${body}`;

    const composeWindow = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
    if (!composeWindow) {
      toast.error("Could not open Gmail", {
        description: "Please allow pop-ups and try again.",
      });
    } else {
      toast.success("Opening Gmail compose", {
        description: "Your message draft is ready.",
      });
      setFormData({ name: "", email: "", message: "" });
    }

    setIsSending(false);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div className="text-center lg:text-left">
            <motion.p
              className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}>
              Get in Touch
            </motion.p>

            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}>
              Let's create<br />
              <span className="text-gradient-primary">something</span><br />
              <span className="text-gradient-primary">amazing</span>
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}>
              Have a project in mind or just want to chat? I'd love to hear from you.
            </motion.p>

            {/* Social icons */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}>
              {[
                { label: "GitHub", href: "https://github.com/sahiti-veeravalli", icon:
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sahiti-veeravalli/", icon:
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
                },
                { label: "Gmail", href: "mailto:sahithi.veeravalli19@gmail.com", tooltip: "sahithi.veeravalli19@gmail.com", icon:
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                }
              ].map((social) => (
                <SocialIcon key={social.label} {...social} />
              ))}
            </motion.div>
          </div>

          {/* Right side - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}>
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-base"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-base"
              />
            </div>
            <div>
              <textarea
                placeholder="Your message..."
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-base resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSending}
              className="w-full px-8 py-5 bg-primary text-primary-foreground rounded-xl font-semibold text-lg glow-primary flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px -5px hsl(82 85% 55% / 0.5)" }}
              whileTap={{ scale: 0.98 }}>
              {isSending ? "Opening..." : "Send Message"}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;