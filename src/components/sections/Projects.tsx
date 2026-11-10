"use client";

import * as React from "react";
import Image from "next/image";
import { projectsData, type Project } from "@/config/projects";
import { ProjectsFilter, ProjectCategory } from "@/components/sections/ProjectsFilter";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { IconGithub } from "@/components/ui/BrandIcons";

const categoryLabel: Record<Project["category"], string> = {
  fullstack: "Full Stack",
  frontend: "Front-end",
  backend: "Back-end",
  "mobile-iot": "Mobile / IoT",
};

const MAX_TAGS = 5;

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("all");
  const [expandedVideo, setExpandedVideo] = React.useState<string | null>(null);

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "all") return projectsData;
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  React.useEffect(() => {
    if (!expandedVideo) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setExpandedVideo(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expandedVideo]);

  return (
    <section id="projetos" className="py-20 sm:py-24 border-t border-border-subtle">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <h2 className="section-title">Projetos</h2>
          <p className="section-lead">
            Sistemas e interfaces que construí, de apps com IA a cardápios digitais.
          </p>
        </div>
        <ProjectsFilter currentCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>

      {filteredProjects.length > 0 ? (
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} onExpand={setExpandedVideo} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-12 rounded-lg border border-dashed border-border-strong px-6 py-16 text-center">
          <p className="text-text-primary">Ainda não há projetos nesta categoria.</p>
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className="mt-4 text-sm font-medium text-accent underline underline-offset-4 hover:no-underline cursor-pointer"
          >
            Ver todos os projetos
          </button>
        </div>
      )}

      {expandedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo do projeto"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/85"
          onClick={() => setExpandedVideo(null)}
        >
          <button
            type="button"
            autoFocus
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-md text-text-primary hover:bg-white/10 cursor-pointer"
            onClick={() => setExpandedVideo(null)}
            aria-label="Fechar vídeo"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="w-full max-w-6xl aspect-video overflow-hidden rounded-lg bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={expandedVideo} autoPlay controls className="h-full w-full object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCard({
  project,
  onExpand,
}: {
  project: Project;
  onExpand: (src: string) => void;
}) {
  const extraTags = project.tags.length - MAX_TAGS;

  return (
    <article className="group h-full flex flex-col overflow-hidden rounded-lg border border-border-subtle bg-bg-surface transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-border-strong">
      <div className="relative aspect-video overflow-hidden bg-black">
        {project.video ? (
          <button
            type="button"
            onClick={() => onExpand(project.video!)}
            aria-label={`Ampliar vídeo de ${project.title}`}
            className="block h-full w-full cursor-zoom-in"
          >
            <video
              src={project.video}
              poster={project.image}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-md bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-text-muted">{categoryLabel[project.category]}</p>
        <h3 className="mt-1 text-xl font-semibold leading-tight text-text-primary [font-stretch:108%]">
          {project.title}
        </h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-text-secondary line-clamp-4">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tecnologias">
          {project.tags.slice(0, MAX_TAGS).map((tag) => (
            <li key={tag} className="rounded-sm bg-bg-surface-hover px-2 py-1 text-xs text-text-secondary">
              {tag}
            </li>
          ))}
          {extraTags > 0 && (
            <li className="px-1 py-1 text-xs text-text-muted" title={project.tags.slice(MAX_TAGS).join(", ")}>
              +{extraTags}
            </li>
          )}
        </ul>

        {(project.deployUrl || project.githubUrl) && (
          <div className="mt-auto pt-6 flex items-center gap-5">
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Abrir site
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary underline-offset-4 hover:underline"
              >
                <IconGithub className="h-4 w-4" />
                Código
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
