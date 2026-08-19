"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Experiência", href: "#experiencia" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle font-second">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-text-primary tracking-tight">
              {siteConfig.name.split(' ')[0]}<span className="text-brand-primary">.dev</span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <MagneticButton>
                  <Link href="#contato">
                    <Button variant="outline" size="sm">Contato</Button>
                  </Link>
                </MagneticButton>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <MagneticButton>
              <Button variant="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-surface border-b border-border-subtle">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-brand-primary hover:bg-bg-surface-hover transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link href="#contato" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full">Contato</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
