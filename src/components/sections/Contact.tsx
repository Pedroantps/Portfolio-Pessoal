"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { TextWordReveal } from "@/components/ui/TextWordReveal";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { motion } from "framer-motion";

/* ── Brand SVG icons (decorative) ── */
const IconLinkedin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);
const IconGithub = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
);
const IconWhatsApp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.14.11-1.83-.12-.42-.14-.96-.34-1.65-.67-2.9-1.33-4.78-4.28-4.93-4.48-.14-.21-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.38.27-.28.58-.35.77-.35.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2.01.9 2.16.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.16-.3.37-.42.5-.14.14-.29.3-.13.58.17.28.74 1.22 1.58 1.97 1.09.97 2.01 1.27 2.29 1.41.28.14.44.12.61-.07.16-.19.7-.82.89-1.1.19-.28.38-.24.64-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z" /></svg>
);

/* ── Decorative floating icons config ── */
const floatingIcons = [
  { icon: IconLinkedin, x: "8%", y: "15%", size: "h-8 w-8", delay: 0, rotate: -12 },
  { icon: IconGithub, x: "88%", y: "20%", size: "h-10 w-10", delay: 0.3, rotate: 15 },
  { icon: Mail, x: "75%", y: "75%", size: "h-7 w-7", delay: 0.6, rotate: -8 },
  { icon: IconWhatsApp, x: "12%", y: "80%", size: "h-9 w-9", delay: 0.9, rotate: 10 },
  { icon: IconGithub, x: "50%", y: "10%", size: "h-6 w-6", delay: 1.2, rotate: -20 },
  { icon: IconLinkedin, x: "92%", y: "55%", size: "h-6 w-6", delay: 0.5, rotate: 22 },
  { icon: IconWhatsApp, x: "35%", y: "85%", size: "h-5 w-5", delay: 0.8, rotate: -15 },
  { icon: Mail, x: "5%", y: "50%", size: "h-6 w-6", delay: 1.0, rotate: 18 },
];

const email = siteConfig.links.email.replace("mailto:", "");

const links = [
  {
    label: "E-mail",
    icon: Mail,
    display: email,
    href: siteConfig.links.email,
    cursorText: "Copiar",
    isEmail: true,
  },
  {
    label: "LinkedIn",
    icon: IconLinkedin,
    display: "linkedin.com/in/pedro-antônio-pereira-da-silva-8a45272b7",
    href: siteConfig.links.linkedin,
    cursorText: "Conectar",
    isEmail: false,
  },
  {
    label: "GitHub",
    icon: IconGithub,
    display: "github.com/Pedroantps",
    href: siteConfig.links.github,
    cursorText: "Explorar",
    isEmail: false,
  },
  {
    label: "WhatsApp",
    icon: IconWhatsApp,
    display: "+55 (24) 9 9983-8328",
    href: siteConfig.links.whatsapp,
    cursorText: "Chamar",
    isEmail: false,
  },
];

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-20 sm:py-32 border-t border-border-subtle mt-16 relative overflow-hidden">

      {/* ── Floating Decorative Icons ── */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
          className="absolute pointer-events-none z-0"
          style={{ left: item.x, top: item.y }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [item.rotate, item.rotate + 5, item.rotate],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon className={`${item.size} text-[#9F7AEA]/[0.07]`} />
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-[min(90vw,100rem)] mx-auto flex flex-col gap-20 relative z-10">

        {/* ── Headline ── */}
        <div className="flex flex-col gap-6 max-w-5xl">
          <span className="text-xs font-second text-text-secondary/60 tracking-[0.25em] uppercase">
            Contato
          </span>
          <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-extrabold font-second text-text-primary leading-[1.0] tracking-tight">
            <TextWordReveal text="Vamos construir algo juntos?" />
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-light max-w-xl leading-relaxed font-body">
            Aberto a novos desafios, colaborações e oportunidades. Se você tem uma ideia — vamos conversar.
          </p>
        </div>

        {/* ── Links ── */}
        <div className="flex flex-col border-t border-border-subtle">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.isEmail ? undefined : "_blank"}
              rel={link.isEmail ? undefined : "noopener noreferrer"}
              onClick={link.isEmail ? copyEmail : undefined}
              data-cursor-text={link.isEmail ? (copied ? "Copiado!" : link.cursorText) : link.cursorText}
              className="group hover-target flex items-center justify-between py-6 border-b border-border-subtle transition-all duration-300 hover:pl-2"
            >
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-xs font-second text-text-secondary/50 tracking-[0.2em] uppercase w-36 flex-shrink-0">
                  <link.icon className="h-4 w-4 flex-shrink-0" />
                  {link.label}
                </span>
                <span className="text-base sm:text-xl 2xl:text-2xl font-mono text-text-primary group-hover:text-text-primary/80 transition-colors">
                  {link.isEmail ? (copied ? "copiado! ✓" : link.display) : link.display}
                </span>
              </div>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {link.isEmail ? (
                  copied
                    ? <Check className="h-4 w-4 text-emerald-500" />
                    : <Copy className="h-4 w-4 text-text-secondary" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

