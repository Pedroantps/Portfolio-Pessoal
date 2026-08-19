"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend' | 'mobile-iot';

interface ProjectsFilterProps {
  currentCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export function ProjectsFilter({ currentCategory, onCategoryChange }: ProjectsFilterProps) {
  const filters: { label: string; value: ProjectCategory }[] = [
    { label: "Todos", value: "all" },
    { label: "Full Stack", value: "fullstack" },
    { label: "Front-end", value: "frontend" },
    { label: "Back-end", value: "backend" },
    { label: "Mobile / IoT", value: "mobile-iot" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
      {filters.map((filter) => {
        const isActive = currentCategory === filter.value;
        return (
          <Button
            key={filter.value}
            variant={isActive ? "primary" : "outline"}
            onClick={() => onCategoryChange(filter.value)}
            className={`rounded-full h-9 px-4 text-sm transition-all duration-300 ${!isActive && "text-text-secondary hover:text-text-primary hover:border-brand-primary/50"}`}
          >
            {filter.label}
          </Button>
        );
      })}
    </div>
  );
}
