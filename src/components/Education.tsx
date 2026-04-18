"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-36 px-6 lg:px-8 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Background
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-accent/60 font-display font-medium text-xs uppercase tracking-[0.2em] mb-6"
            >
              Education
            </motion.h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="p-6 rounded-2xl bg-card-bg border border-card-border transition-all duration-500 hover:border-accent/15 card-glow hover:card-glow-hover hover:-translate-y-0.5"
                >
                  <h4 className="font-display font-semibold text-[15px] tracking-tight">{edu.degree}</h4>
                  <p className="text-muted text-sm mt-1.5">{edu.institution}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-card-border/50">
                    {edu.period && <span className="text-xs text-muted/50">{edu.period}</span>}
                    <span className="text-sm font-semibold text-accent ml-auto">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-accent/60 font-display font-medium text-xs uppercase tracking-[0.2em] mb-6"
            >
              Certifications & Achievements
            </motion.h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-3.5 p-5 rounded-xl bg-card-bg border border-card-border transition-all duration-500 hover:border-accent/15 card-glow"
                >
                  <span className="text-accent/50 mt-0.5 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-sm text-muted/80">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
