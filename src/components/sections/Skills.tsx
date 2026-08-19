import * as React from "react";
import { skills } from "@/config/data";
import { TextWordReveal } from "@/components/ui/TextWordReveal";

export function Skills() {
  return (
    <section id="habilidades" className="py-16 sm:py-20">
      <div className="flex flex-col gap-16 max-w-[90vw] mx-auto">
        <div className="flex flex-col gap-6 max-w-2xl">
          <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-extrabold font-second text-text-primary leading-[1.05] tracking-tight">
            <TextWordReveal text="Habilidades Técnicas" />
          </h2>
          <p className="text-base text-text-secondary font-light font-body">
            O stack essencial que utilizo para construir produtos digitais robustos e de alto nível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 border-t border-border-subtle pt-12">
          {skills.map((skillGroup, index) => {
            return (
              <div key={index} className="flex flex-col group relative">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-sm font-second text-text-secondary tracking-widest uppercase">
                    0{index + 1} {"//"} {skillGroup.category}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-lg sm:text-xl font-bold font-second text-text-primary/70 hover:text-text-primary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
