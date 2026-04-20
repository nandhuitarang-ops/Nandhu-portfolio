"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { projects } from "@/data/portfolio";

/* ───── card gradient fallbacks ───── */
const projectGradients = [
  "from-amber-100 via-yellow-50 to-orange-50",
  "from-sky-100 via-blue-50 to-indigo-50",
  "from-emerald-100 via-teal-50 to-green-50",
  "from-violet-100 via-purple-50 to-pink-50",
  "from-amber-100 via-orange-50 to-yellow-50",
  "from-cyan-100 via-sky-50 to-blue-50",
];

/* ═══════════════════════════════════════════════
   ProjectCard — 3-D tilt · spotlight · expand
   ═══════════════════════════════════════════════ */
function ProjectCard({
  project,
  index,
  onExpand,
}: {
  project: (typeof projects)[0];
  index: number;
  onExpand: (index: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  /* scroll-linked parallax on the image */
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  /* ── 3-D tilt via spring-driven motion values ── */
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 260, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 260, damping: 22 });

  /* ── cursor spotlight position ── */
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0-1
      const py = (e.clientY - rect.top) / rect.height;
      rotateX.set((py - 0.5) * -14); // tilt range ±7°
      rotateY.set((px - 0.5) * 14);
      setSpot({ x: px * 100, y: py * 100 });
    },
    [rotateX, rotateY],
  );

  const handleLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }, [rotateX, rotateY]);

  return (
    <div style={{ perspective: 900 }}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: index * 0.12 }}
        style={{ rotateX: springX, rotateY: springY }}
        onMouseMove={handleMouse}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleLeave}
        onClick={() => onExpand(index)}
        className="relative rounded-2xl bg-card-bg overflow-hidden cursor-pointer will-change-transform"
      >
        {/* ── animated border glow ── */}
        <div
          className="absolute -inset-px rounded-2xl z-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background:
              "conic-gradient(from 180deg at 50% 50%, #b8860b 0%, transparent 60%, #d4a843 100%)",
          }}
        />
        {/* inner card body */}
        <div className="relative z-10 m-[1px] rounded-2xl bg-card-bg overflow-hidden">
          {/* ── cursor spotlight ── */}
          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500 rounded-2xl"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(184,134,11,0.07), transparent 40%)`,
            }}
          />

          {/* ── image area ── */}
          <div className="relative aspect-[16/9] overflow-hidden">
            {project.image ? (
              <motion.div style={{ y: imageY }} className="absolute inset-[-12px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              <motion.div
                style={{ y: imageY }}
                className={`absolute inset-[-12px] bg-gradient-to-br ${projectGradients[index % projectGradients.length]}`}
              />
            )}
            {/* bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />

            {/* floating tech badge */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-3.5 right-3.5 z-20 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-card-border/60 text-[11px] font-medium text-foreground/60"
            >
              {project.techStack[0]}
            </motion.div>
          </div>

          {/* ── content ── */}
          <div className="p-6 pt-2">
            <h3 className="font-display text-[17px] font-semibold tracking-tight mb-2 transition-colors duration-300 group-hover:text-accent">
              {project.title}
            </h3>
            <p className="text-muted text-[13px] leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* tech pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-medium bg-accent-subtle text-muted rounded-full border border-card-border"
                >
                  {t}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2.5 py-1 text-[11px] font-medium text-accent/50 rounded-full border border-card-border/60">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* footer links */}
            <div className="flex items-center justify-between pt-4 border-t border-card-border/50">
              <div className="flex gap-4">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source
                  </a>
                )}
                {project.github === "#" && (
                  <span className="flex items-center gap-1.5 text-sm text-muted/25">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Private
                  </span>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                )}
              </div>

              {/* expand hint */}
              <span className="text-[11px] text-muted/40 tracking-wide uppercase transition-all duration-300"
                style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "translateX(0)" : "translateX(6px)" }}
              >
                Click to explore
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ExpandedProject — cinematic detail modal
   ═══════════════════════════════════════════════ */
function ExpandedProject({
  project,
  index,
  onClose,
}: {
  project: (typeof projects)[0];
  index: number;
  onClose: () => void;
}) {
  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
      >
        <div
          className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden pointer-events-auto bg-card-bg border border-card-border shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* scrollable content */}
          <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
            {/* hero image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              {project.image ? (
                <motion.img
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${projectGradients[index % projectGradients.length]}`} />
              )}
              {/* gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/30 to-transparent" />

              {/* title over image */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pb-6">
                <motion.h2
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="font-display text-2xl sm:text-3xl font-bold tracking-tight"
                >
                  {project.title}
                </motion.h2>
              </div>
            </div>

            {/* body */}
            <div className="p-8 pt-2 space-y-7">
              {/* description */}
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-muted text-[15px] leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* highlights */}
              <div>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4"
                >
                  Key Highlights
                </motion.h4>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <motion.li
                      key={h}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
                      className="flex items-start gap-3 text-[14px] text-foreground/80 leading-relaxed"
                    >
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* tech stack */}
              <div>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4"
                >
                  Tech Stack
                </motion.h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.45 + i * 0.04, type: "spring", stiffness: 400, damping: 20 }}
                      className="px-3.5 py-1.5 text-[12px] font-medium rounded-full border border-accent/20 bg-accent-subtle text-foreground/70"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="flex gap-4 pt-4 border-t border-card-border/50"
              >
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-foreground text-card-bg hover:bg-foreground/85 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-accent/30 text-accent hover:bg-accent-subtle transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* ═══════════════════════════════════════════════
   Projects section
   ═══════════════════════════════════════════════ */
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-36 px-6 lg:px-8 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">
            Work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onExpand={setExpanded}
            />
          ))}
        </div>
      </div>

      {/* expanded modal */}
      <AnimatePresence>
        {expanded !== null && (
          <ExpandedProject
            project={projects[expanded]}
            index={expanded}
            onClose={() => setExpanded(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
