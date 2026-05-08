import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(82 85% 55% / 0.35) 0%, hsl(82 85% 55% / 0.12) 35%, transparent 65%)",
        filter: "blur(12px)",
        transition: "left 0.08s linear, top 0.08s linear",
      }}
    />
  );
};

export default CursorGlow;
