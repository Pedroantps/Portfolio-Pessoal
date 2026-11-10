"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Projetos", href: "#projetos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Trajetória", href: "#experiencia" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-16 flex h-16 items-center justify-between">
        <a href="#hero" className="text-lg font-bold tracking-tight text-text-primary [font-stretch:115%]">
          Pedro<span className="text-accent">.</span>dev
        </a>

        <nav aria-label="Principal" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-ink hover:bg-[#F6BC5E] active:translate-y-px transition-colors"
          >
            Fale comigo
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-md text-text-primary hover:bg-bg-surface"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          aria-label="Menu"
          className="md:hidden absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-bg-primary px-5 sm:px-8 pt-6 pb-10 flex flex-col"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-4 border-b border-border-subtle text-2xl font-semibold text-text-primary [font-stretch:110%]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-accent text-base font-medium text-accent-ink"
          >
            Fale comigo
          </a>
        </nav>
      )}
    </header>
  );
}
