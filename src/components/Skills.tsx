"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-36 px-6 lg:px-8 relative bg-surface" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Expertise
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="p-6 rounded-2xl bg-card-bg border border-card-border transition-all duration-500 hover:border-accent/15 card-glow hover:card-glow-hover hover:-translate-y-0.5"
            >
              <h3 className="text-accent/70 font-display font-medium text-xs uppercase tracking-[0.2em] mb-5">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-[13px] bg-accent-subtle text-foreground/70 rounded-full border border-card-border hover:border-accent/25 hover:text-accent hover:bg-accent-subtle transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
