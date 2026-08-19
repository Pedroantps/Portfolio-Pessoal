"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/config/projects";
import { ProjectsFilter, ProjectCategory } from "@/components/sections/ProjectsFilter";
import { TextWordReveal } from "@/components/ui/TextWordReveal";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ArrowRight, ExternalLink, GitBranch, Maximize2, X } from "lucide-react";

const glowColors: Array<'blue' | 'purple' | 'green' | 'orange'> = ['blue', 'purple', 'green', 'orange'];

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("all");
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [expandedVideo, setExpandedVideo] = React.useState<string | null>(null);

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "all") return projectsData;
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  // Drag-to-scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="projetos" className="py-16 sm:py-20 overflow-hidden">
      <div className="flex flex-col gap-12 max-w-[90vw] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-border-subtle pb-8">
          <div className="max-w-xl">
            <h2 className="text-[clamp(3rem,4.5vw,4.5rem)] font-bold font-second text-text-primary leading-[1.1] tracking-tight mb-4">
              <TextWordReveal text="Projetos" />
            </h2>
            <p className="text-base text-text-secondary font-light font-body">
              Projetos que definem minha jornada técnica e criativa.
            </p>
          </div>

          <ProjectsFilter
            currentCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Horizontal Carousel */}
        {filteredProjects.length > 0 ? (
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className="flex flex-row gap-6 overflow-x-auto pb-6 select-none"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'hsl(var(--border-subtle)) transparent',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    layout: { duration: 0.3 },
                  }}
                  className="flex-shrink-0"
                  style={{ width: 'clamp(300px, 30vw, 400px)' } as React.CSSProperties}
                >
                  <GlowCard
                    glowColor={glowColors[index % glowColors.length]}
                    customSize
                    className="flex flex-col p-0 min-h-[540px] overflow-hidden h-full"
                  >
                    {/* Card content — sits above the [data-glow] inner div */}
                    <div className="relative z-10 flex flex-col h-full">

                      {/* ── Image/Video banner ── */}
                      <div className="relative w-full aspect-video overflow-hidden group/video shrink-0">
                        {project.video ? (
                          <>
                            <video
                              src={project.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              style={{ pointerEvents: 'none' }}
                            />
                            {/* Clickable overlay to expand */}
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isDragging) setExpandedVideo(project.video || null);
                              }}
                              className="absolute inset-0 z-20"
                            >
                              {/* Corner Icon */}
                              <div className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm opacity-0 group-hover/video:opacity-100 transition-all duration-300 hover:bg-black/60 border border-white/10">
                                <Maximize2 className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          </>
                        ) : project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            draggable={false}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ pointerEvents: 'none' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          /* Fallback placeholder */
                          <div className="w-full h-full flex items-center justify-center"
                            style={{
                              background: 'linear-gradient(135deg, hsl(220 30% 12%), hsl(280 25% 18%))',
                            }}
                          >
                            <span className="text-4xl opacity-20 font-bold font-mono text-text-primary select-none">
                              {project.title.slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                        )}
                        {/* Gradient fade at bottom of image into card body */}
                        <div
                          className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                          style={{ background: 'linear-gradient(to bottom, transparent, hsl(0 0% 6% / 0.85))' }}
                        />
                        {/* Featured badge overlaid on image */}
                        {project.featured && !project.video && (
                          <span className="absolute top-3 right-3 z-10 text-[10px] font-mono text-text-primary px-2 py-0.5 bg-black/60 backdrop-blur-sm border border-border-subtle/40 rounded-sm">
                            Featured
                          </span>
                        )}
                        {project.featured && project.video && (
                          <span className="absolute top-3 left-3 z-10 text-[10px] font-mono text-text-primary px-2 py-0.5 bg-black/60 backdrop-blur-sm border border-border-subtle/40 rounded-sm">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* ── Text content ── */}
                      <div className="flex flex-col gap-3 flex-1 p-5">
                        {/* Category */}
                        <span className="text-xs font-second text-text-secondary tracking-widest uppercase">
                          {project.category}
                        </span>

                        {/* Title */}
                        <h3 className="text-lg font-bold font-second text-text-primary leading-tight">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-text-secondary leading-relaxed font-light flex-1">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs font-second text-text-secondary bg-border-subtle/40 px-2 py-0.5 rounded-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-6 pt-3 border-t border-border-subtle/30 mt-auto">
                          {project.deployUrl && (
                            <a
                              href={project.deployUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="group/link flex items-center gap-1.5 text-xs font-second font-medium text-text-primary hover:opacity-70 transition-opacity"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Live Demo
                              <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="group/link flex items-center gap-1.5 text-xs font-second font-medium text-text-secondary hover:text-text-primary transition-colors"
                            >
                              <GitBranch className="h-3.5 w-3.5" />
                              Source
                              <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="py-24 text-center text-text-secondary border border-border-subtle rounded-none"
          >
            Nenhum projeto encontrado para esta categoria.
          </motion.div>
        )}

        {/* Scroll hint */}
        <p className="text-xs font-second text-text-secondary/50 text-center -mt-4 select-none">
          ← arraste para explorar →
        </p>
      </div>

      {/* Expanded Video Modal */}
      {expandedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
          onClick={() => setExpandedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
            onClick={() => setExpandedVideo(null)}
            aria-label="Fechar vídeo"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden border border-border-subtle shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={expandedVideo}
              autoPlay
              controls
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
