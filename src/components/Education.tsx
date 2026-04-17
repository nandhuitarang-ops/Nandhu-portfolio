"use client";

import { useEffect, useRef } from "react";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
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
    <section id="education" className="py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-12" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-6 reveal">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={edu.degree}
                  className="reveal p-5 rounded-xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <h4 className="font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-muted text-sm mt-1">{edu.institution}</p>
                  <div className="flex items-center justify-between mt-3">
                    {edu.period && (
                      <span className="text-xs text-muted">{edu.period}</span>
                    )}
                    <span className="text-sm font-medium text-accent">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-wider mb-6 reveal">
              Certifications & Achievements
            </h3>
            <div className="space-y-3 reveal">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-300"
                >
                  <span className="text-accent mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-sm text-muted">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
