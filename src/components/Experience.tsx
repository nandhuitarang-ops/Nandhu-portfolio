"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/data/portfolio";

export default function Experience() {
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
    <section id="experience" className="py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />
        </div>

        {experience.map((exp) => (
          <div key={exp.company} className="reveal max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 p-6 rounded-2xl bg-card-bg border border-card-border">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-accent font-medium">{exp.company}</p>
              </div>
              <div className="mt-2 sm:mt-0 text-right">
                <p className="text-muted text-sm">{exp.period}</p>
                <p className="text-accent/70 text-sm">{exp.duration}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-card-border space-y-8">
              {exp.responsibilities.map((resp, i) => (
                <div
                  key={resp.title}
                  className="reveal relative"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Dot */}
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />

                  <div className="p-5 rounded-xl bg-card-bg/50 border border-card-border/50 hover:border-accent/20 transition-all duration-300">
                    <h4 className="font-semibold text-foreground mb-2">
                      {resp.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed mb-3">
                      {resp.description}
                    </p>
                    <p className="text-xs text-accent/60">
                      <span className="text-accent/80 font-medium">Tech:</span>{" "}
                      {resp.tech}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
