"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;

const visualStates = [
  "from-amber-200/30 via-yellow-100/20 to-transparent",
  "from-orange-200/20 via-amber-100/15 to-transparent",
  "from-yellow-200/25 via-orange-100/15 to-transparent",
  "from-amber-300/20 via-yellow-200/15 to-transparent",
];

export default function Hero() {
  const [visualIndex, setVisualIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [3, -3]);
  const rotateY = useTransform(springX, [-300, 300], [-3, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisualIndex((prev) => (prev + 1) % visualStates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden noise-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          key={visualIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={`absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br ${visualStates[visualIndex]} blur-[120px]`}
        />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-accent/5 to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent-subtle mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-medium tracking-widest uppercase">
                {personalInfo.role}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-4 text-glow"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Nandha Kumar Reddy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-sm text-muted font-medium tracking-wide mb-6"
            >
              Yerasi Nandha Kumar Reddy
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="text-xl sm:text-2xl text-foreground/60 font-light leading-relaxed mb-5"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="text-muted text-[15px] leading-[1.8] max-w-lg mx-auto lg:mx-0 mb-10"
            >
              {personalInfo.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group px-7 py-3 bg-foreground text-background text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-card-border text-foreground text-sm font-medium rounded-full transition-all duration-300 hover:border-accent/30 hover:bg-accent-subtle hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="YERASI_NANDHA_KUMAR_REDDY_Resume.docx"
                className="px-7 py-3 border border-card-border text-muted text-sm font-medium rounded-full transition-all duration-300 hover:border-white/25 hover:text-foreground hover:bg-white/[0.03] hover:-translate-y-0.5"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Profile image with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Floating accent shapes */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl border border-accent/15 bg-accent/[0.04] backdrop-blur-sm z-10"
              />
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl border border-card-border bg-card-bg/60 backdrop-blur-sm z-10"
              />

              {/* Main image container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-[22rem] lg:h-[26rem] rounded-3xl overflow-hidden card-glow">
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-10" />
                <Image
                  src={personalInfo.profileImage}
                  alt="Yerasi Nandha Kumar Reddy"
                  fill
                  className="object-cover object-[center_30%]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted/30 hover:text-muted/60 transition-colors duration-500">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
