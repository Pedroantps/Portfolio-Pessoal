"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { experiences, type ExperienceType } from "@/config/data";
import { GraduationCap, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const filters: { label: string; value: ExperienceType; icon: typeof GraduationCap }[] = [
  { label: "Acadêmica", value: "academica", icon: GraduationCap },
  { label: "Profissional", value: "profissional", icon: Briefcase },
];

export function Experience() {
  const [activeFilter, setActiveFilter] = React.useState<ExperienceType>("academica");

  const filtered = experiences.filter((exp) => exp.type === activeFilter);

  return (
    <section id="experiencia" className="py-16 scroll-mt-20">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold font-second text-text-primary mb-3">
            Trajetória
          </h2>
          <p className="text-base text-text-secondary max-w-2xl font-body">
            Meu histórico profissional e acadêmico ao longo dos anos.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex gap-3">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className="group relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-second font-medium transition-colors duration-300 cursor-pointer"
                style={{
                  border: isActive
                    ? "1px solid rgba(139,92,246,0.35)"
                    : "1px solid rgba(255,255,255,0.08)",
                  color: isActive ? "#c4b5fd" : "#a1a1aa",
                }}
              >
                {/* Animated background pill */}
                {isActive && (
                  <motion.span
                    layoutId="experience-filter-bg"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.10))",
                      boxShadow: "0 0 20px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <Icon
                  size={16}
                  className="relative z-10 transition-transform duration-300"
                  style={{
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    opacity: isActive ? 1 : 0.6,
                  }}
                />
                <span className="relative z-10">{filter.label}</span>

                {/* Active indicator line */}
                <motion.span
                  className="absolute -bottom-px left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
                  }}
                  animate={{ width: isActive ? "60%" : "0%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border-strong ml-4 sm:ml-6 2xl:ml-8 pl-6 sm:pl-8 2xl:pl-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-8"
            >
              {filtered.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {/* Dot no timeline */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 h-4 w-4 rounded-full border-2 border-[#090D16] bg-brand-primary shadow-[0_0_0_4px_#090D16]" />
                  
                  <Card className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-base font-bold text-text-primary">{exp.role}</h3>
                        <span className="text-sm text-brand-secondary font-medium">{exp.company}</span>
                      </div>
                      <div className="inline-flex items-center rounded-md bg-bg-surface-hover px-2.5 py-1 text-sm font-second text-text-secondary whitespace-nowrap w-fit">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
