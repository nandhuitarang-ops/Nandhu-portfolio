"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((cat, i) => (
            <div
              key={cat.name}
              className="reveal p-6 rounded-2xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-accent/5 border border-accent/15 text-foreground rounded-lg hover:bg-accent/10 hover:border-accent/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
