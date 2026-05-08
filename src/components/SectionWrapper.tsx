import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-6 my-6 ${className}`}>
      <div className="rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm p-6 md:p-10 lg:p-14">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
