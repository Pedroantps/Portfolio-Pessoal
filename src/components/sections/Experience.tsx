"use client";

import * as React from "react";
import { experiences, type ExperienceType } from "@/config/data";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ExperienceType }[] = [
  { label: "Profissional", value: "profissional" },
  { label: "Acadêmica", value: "academica" },
];

export function Experience() {
  const [activeFilter, setActiveFilter] = React.useState<ExperienceType>("profissional");
  const filtered = experiences.filter((exp) => exp.type === activeFilter);

  return (
    <section id="experiencia" className="py-20 sm:py-24 border-t border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="section-title">Trajetória</h2>
          <p className="section-lead">Onde trabalhei e estudei até aqui.</p>

          <div role="tablist" aria-label="Tipo de experiência" className="mt-8 inline-flex rounded-md border border-border-strong p-1">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="experiencia-lista"
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    "h-10 rounded-[5px] px-4 text-sm font-medium transition-colors cursor-pointer",
                    isActive ? "bg-accent text-accent-ink" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <ol id="experiencia-lista" role="tabpanel" className="lg:col-span-8 border-t border-border-subtle">
          {filtered.map((exp) => (
            <li
              key={exp.id}
              className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-x-8 gap-y-2 py-8 border-b border-border-subtle"
            >
              <p className="text-sm text-text-muted sm:pt-1.5">{exp.period}</p>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-text-primary [font-stretch:108%]">
                  {exp.role}
                </h3>
                <p className="mt-1 text-base text-accent">{exp.company}</p>
                <p className="mt-4 max-w-[40rem] text-base leading-relaxed text-text-secondary">
                  {exp.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
