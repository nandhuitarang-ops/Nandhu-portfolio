"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(184,134,11,0.06)_0%,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
              {personalInfo.role}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2 animate-fade-in-up delay-100">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Nandha Kumar Reddy</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted/70 font-medium mb-5 animate-fade-in-up delay-100">
              Yerasi Nandha Kumar Reddy
            </p>
            <p className="text-xl sm:text-2xl text-muted font-light mb-4 animate-fade-in-up delay-200">
              {personalInfo.tagline}
            </p>
            <p className="text-muted max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-300">
              {personalInfo.intro}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-400">
              <a
                href="#projects"
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-card-border hover:border-accent/50 text-foreground rounded-xl font-medium transition-all duration-200 hover:bg-black/5"
              >
                Contact Me
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="YERASI_NANDHA_KUMAR_REDDY_Resume.docx"
                className="px-6 py-3 border border-card-border hover:border-accent/50 text-muted hover:text-foreground rounded-xl font-medium transition-all duration-200 hover:bg-black/5"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in delay-200">
            <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-[22rem] lg:h-[26rem]">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-light via-accent to-accent-dark opacity-50 blur-lg animate-glow" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent/30">
                <Image
                  src={personalInfo.profileImage}
                  alt="Yerasi Nandha Kumar Reddy"
                  fill
                  className="object-cover object-[center_30%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
        <a href="#about" className="text-muted hover:text-accent transition-colors">
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
