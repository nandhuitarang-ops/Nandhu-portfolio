"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/nandhu939880@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-36 px-6 lg:px-8 relative bg-surface" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-to-tl from-accent/[0.03] to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted text-[15px] max-w-md mx-auto">
            I&apos;m always open to discussing new opportunities, projects, or
            collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="p-6 rounded-2xl bg-card-bg border border-card-border card-glow transition-all duration-500 hover:border-accent/15 hover:card-glow-hover">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-subtle text-accent/70 flex items-center justify-center shrink-0">
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted/60 mb-0.5">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-foreground hover:text-accent transition-colors duration-300">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card-bg border border-card-border card-glow transition-all duration-500 hover:border-accent/15 hover:card-glow-hover">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-subtle text-accent/70 flex items-center justify-center shrink-0">
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted/60 mb-0.5">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm text-foreground hover:text-accent transition-colors duration-300">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card-bg border border-card-border card-glow transition-all duration-500 hover:border-accent/15 hover:card-glow-hover">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-subtle text-accent/70 flex items-center justify-center shrink-0">
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted/60 mb-0.5">Location</p>
                  <p className="text-sm text-foreground">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 rounded-2xl bg-card-bg border border-card-border flex items-center justify-center gap-2.5 text-muted hover:text-accent transition-all duration-300 card-glow hover:border-accent/15"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-4 rounded-2xl bg-card-bg border border-card-border flex items-center justify-center gap-2.5 text-muted hover:text-accent transition-all duration-300 card-glow hover:border-accent/15"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value="New message from your Portfolio!" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-card-bg border border-card-border text-foreground text-sm placeholder:text-muted/30 transition-all duration-300 focus:outline-none focus:border-accent/30 focus:shadow-[0_0_0_3px_rgba(184,134,11,0.08)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-card-bg border border-card-border text-foreground text-sm placeholder:text-muted/30 transition-all duration-300 focus:outline-none focus:border-accent/30 focus:shadow-[0_0_0_3px_rgba(184,134,11,0.08)]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-5 py-3.5 rounded-xl bg-card-bg border border-card-border text-foreground text-sm placeholder:text-muted/30 transition-all duration-300 focus:outline-none focus:border-accent/30 focus:shadow-[0_0_0_3px_rgba(184,134,11,0.08)] resize-none"
            />

            {submitted ? (
              <div className="w-full px-6 py-3.5 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-medium text-center">
                Message sent! I&apos;ll get back to you soon.
              </div>
            ) : (
              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-foreground text-background text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,134,11,0.15)] hover:-translate-y-0.5"
              >
                Send Message
              </button>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
