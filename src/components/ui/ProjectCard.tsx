import * as React from "react";
import { Project } from "@/config/projects";
import { MaskScrollImage } from "@/components/ui/MaskScrollImage";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 border-b border-border-subtle group">
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-second text-text-secondary tracking-wider uppercase">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs font-second text-text-primary px-2 py-1 bg-border-subtle rounded-sm">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-3xl md:text-5xl font-bold font-second text-text-primary mb-6 group-hover:text-text-primary/80 transition-colors">
          {project.title}
        </h3>

        <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl font-light font-body">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-sm font-second text-text-secondary bg-border-subtle/50 px-3 py-1 rounded-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-8 mt-auto">
          {project.deployUrl && (
            <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-sm font-second font-medium text-text-primary hover-target" data-cursor-text="Live">
              Live Demo <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-sm font-second font-medium text-text-secondary hover:text-text-primary transition-colors hover-target" data-cursor-text="Code">
              Source Code <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </a>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 w-full order-1 md:order-2">
        <a href={project.deployUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="block w-full hover-target" data-cursor-text="Explore">
          <MaskScrollImage
            src={project.image}
            alt={project.title}
            className="w-full aspect-[4/3] rounded-none"
          />
        </a>
      </div>
    </div>
  );
}
