"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { IconGithub, IconLinkedin, IconWhatsApp } from "@/components/ui/BrandIcons";
import { DecryptText } from "@/components/ui/DecryptText";

const socialLinks = [
  { href: siteConfig.links.github, icon: IconGithub, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: IconLinkedin, label: "LinkedIn" },
  { href: siteConfig.links.email, icon: Mail, label: "E-mail" },
  { href: siteConfig.links.whatsapp, icon: IconWhatsApp, label: "WhatsApp" },
];

const ease = [0.16, 1, 0.3, 1] as const;

/* Caracteres do embaralhamento com largura parecida com a das letras,
   para a linha não crescer e quebrar durante a animação no mobile. */
const DISPLAY_GLYPHS = "0123456789abcdefnoux";
const TERMINAL_GLYPHS = "abcdef0123456789";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="lg:min-h-[100svh] pt-20 pb-16 lg:pt-16 lg:pb-0 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-8"
    >
      {/* Texto. No mobile o wrapper vira "contents" para a foto entrar
          entre o terminal e os botões (via order). */}
      <div className="contents lg:flex lg:flex-col lg:col-span-7">
        <div className="order-1 lg:order-none flex flex-col">
        <p className="flex items-center gap-2.5 text-sm text-text-secondary">
          <span className="h-2 w-2 rounded-full bg-status-success" aria-hidden="true" />
          Disponível para oportunidades
        </p>

        <h1 className="mt-6 text-[clamp(3rem,8.5vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-text-primary [font-stretch:118%]">
          Pedro
          <br />
          Antônio
        </h1>

        <div className="mt-8 flex flex-col">
          <DecryptText
            as="span"
            text="Full Stack Developer"
            trigger="mount"
            stagger={38}
            retriggerOnHover
            glyphs={DISPLAY_GLYPHS}
            className="!block whitespace-nowrap text-[clamp(1.5rem,7vw,1.75rem)] lg:text-[clamp(1.6rem,3.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] [font-stretch:112%]"
          />
          <DecryptText
            as="span"
            text="& Software Engineer"
            trigger="mount"
            stagger={38}
            startDelay={600}
            retriggerOnHover
            glyphs={DISPLAY_GLYPHS}
            className="!block whitespace-nowrap text-[clamp(1.5rem,7vw,1.75rem)] lg:text-[clamp(1.6rem,3.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] [font-stretch:112%]"
          />
        </div>

        <DecryptText
          text="npx create-portfolio@latest --name pedro-antonio"
          variant="terminal"
          trigger="mount"
          startDelay={800}
          loop={8000}
          glyphs={TERMINAL_GLYPHS}
          className="mt-6 w-fit max-w-full font-body text-[clamp(9.5px,3vw,11px)] sm:text-sm 2xl:text-base whitespace-nowrap"
        />
        </div>

        <div className="order-3 lg:order-none lg:mt-10 flex flex-col">
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#projetos"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-medium text-accent-ink hover:bg-[#F6BC5E] active:translate-y-px transition-colors"
          >
            Ver projetos
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="/docs/curriculo-Pedro-Antonio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md border border-border-strong px-6 text-base font-medium text-text-primary hover:border-text-secondary hover:bg-bg-surface active:translate-y-px transition-colors"
          >
            Baixar currículo
          </a>
        </div>

        <ul className="mt-10 flex items-center gap-1 -ml-3">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-md text-text-secondary hover:text-accent hover:bg-bg-surface transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>

      {/* Retrato sobre o bloco âmbar.
          Mobile: entre o terminal e os botões, recortado da cabeça à cintura.
          Desktop: coluna da direita, corpo inteiro. */}
      <div className="order-2 lg:order-none lg:col-span-5 lg:self-end">
        <div className="relative mx-auto sm:mx-0 lg:mx-auto w-full h-[17rem] sm:h-[22rem] sm:max-w-[30rem] overflow-hidden rounded-b-md lg:h-auto lg:max-w-[30rem] lg:aspect-[4/5] lg:overflow-visible lg:rounded-none">
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[70%] lg:h-[74%] rounded-md bg-accent origin-bottom"
            initial={reduce ? false : { scaleY: 0.4, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease }}
          />
          <motion.div
            className="absolute top-0 inset-x-0 mx-auto w-[16rem] sm:w-[21rem] aspect-[2/3] lg:inset-0 lg:w-auto lg:aspect-auto"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <Image
              src="/imgs/fotoPedro.png"
              alt="Pedro Antônio"
              fill
              priority
              sizes="(min-width: 1024px) 30rem, (min-width: 640px) 21rem, 16rem"
              className="object-contain object-top lg:object-bottom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
