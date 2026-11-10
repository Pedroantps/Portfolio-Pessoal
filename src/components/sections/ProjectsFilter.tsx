"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend' | 'mobile-iot';

interface ProjectsFilterProps {
  currentCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "Todos", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Front-end", value: "frontend" },
  { label: "Back-end", value: "backend" },
  { label: "Mobile / IoT", value: "mobile-iot" },
];

export function ProjectsFilter({ currentCategory, onCategoryChange }: ProjectsFilterProps) {
  return (
    <div role="group" aria-label="Filtrar projetos" className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = currentCategory === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onCategoryChange(filter.value)}
            className={cn(
              "h-10 rounded-full border px-4 text-sm font-medium transition-colors cursor-pointer active:translate-y-px",
              isActive
                ? "border-accent bg-accent text-accent-ink"
                : "border-border-strong text-text-secondary hover:border-text-secondary hover:text-text-primary"
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
