"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { IconGithub, IconLinkedin, IconWhatsApp } from "@/components/ui/BrandIcons";

const email = siteConfig.links.email.replace("mailto:", "");

const links = [
  { label: "LinkedIn", icon: IconLinkedin, display: "Pedro Antônio Pereira da Silva", href: siteConfig.links.linkedin },
  { label: "GitHub", icon: IconGithub, display: "github.com/Pedroantps", href: siteConfig.links.github },
  { label: "WhatsApp", icon: IconWhatsApp, display: "+55 (24) 9 9983-8328", href: siteConfig.links.whatsapp },
];

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = siteConfig.links.email;
    }
  };

  return (
    <section id="contato" className="py-20 sm:py-24 border-t border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-text-primary [font-stretch:118%] [text-wrap:balance]">
            Vamos construir algo juntos?
          </h2>
          <p className="section-lead">
            Estou aberto a estágios, freelas e colaborações. O jeito mais rápido de falar comigo é por e-mail.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={siteConfig.links.email}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-medium text-accent-ink hover:bg-[#F6BC5E] active:translate-y-px transition-colors"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Enviar e-mail
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border-strong px-6 text-base font-medium text-text-primary hover:border-text-secondary hover:bg-bg-surface active:translate-y-px transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-status-success" aria-hidden="true" />
                  E-mail copiado
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  Copiar e-mail
                </>
              )}
            </button>
          </div>
          <p className="mt-4 text-sm text-text-muted break-all">{email}</p>
        </div>

        <ul className="lg:col-span-6 lg:col-start-7 lg:self-end border-t border-border-subtle">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-6 border-b border-border-subtle"
              >
                <link.icon className="h-5 w-5 shrink-0 text-text-secondary group-hover:text-accent transition-colors" />
                <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="text-sm text-text-muted sm:w-24 shrink-0">{link.label}</span>
                  <span className="text-lg sm:text-xl font-medium text-text-primary truncate">{link.display}</span>
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-text-muted transition-[transform,color] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
