import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visible.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
          });
          let topId = sectionIds[0];
          let topRatio = 0;
          visible.forEach((ratio, key) => {
            if (ratio > topRatio) {
              topRatio = ratio;
              topId = key;
            }
          });
          if (topRatio > 0) setActive(topId);
        },
        { threshold: [0.15, 0.35, 0.6], rootMargin: "-80px 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds.join(",")]);

  return active;
};
