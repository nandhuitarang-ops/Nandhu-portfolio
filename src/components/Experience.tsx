"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-36 px-6 lg:px-8 relative bg-surface" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Career
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {experience.map((exp) => (
          <div key={exp.company} className="max-w-4xl mx-auto">
            {/* Company header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 p-7 rounded-2xl bg-card-bg border border-card-border card-glow"
            >
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-accent text-sm font-medium mt-1">{exp.company}</p>
              </div>
              <div className="mt-3 sm:mt-0 sm:text-right">
                <p className="text-muted text-sm">{exp.period}</p>
                <p className="text-muted/50 text-xs mt-0.5">{exp.duration}</p>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-10 border-l border-card-border space-y-6 ml-3">
              {exp.responsibilities.map((resp, i) => (
                <motion.div
                  key={resp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[calc(2.5rem+5px)] top-3 w-2.5 h-2.5 rounded-full bg-accent/40 ring-4 ring-background group-hover:bg-accent group-hover:ring-accent/10 transition-all duration-500" />

                  <div className="p-6 rounded-2xl bg-card-bg border border-card-border transition-all duration-500 hover:border-accent/15 card-glow hover:card-glow-hover hover:-translate-y-0.5">
                    <h4 className="font-display font-semibold text-[15px] tracking-tight mb-2">
                      {resp.title}
                    </h4>
                    <p className="text-muted text-sm leading-[1.8] mb-4">
                      {resp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {resp.tech.split(", ").map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-medium bg-accent-subtle text-accent/80 rounded-full border border-accent/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
