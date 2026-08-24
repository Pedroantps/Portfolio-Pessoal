"use client";

import * as React from "react";
import { aboutMetrics } from "@/config/data";
import { TextWordReveal } from "@/components/ui/TextWordReveal";

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24">
      <div className="max-w-[min(90vw,1600px)] mx-auto flex flex-col gap-20">

        {/* ── Top: Título + Narrativa ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border-subtle pt-12">

          {/* Coluna Esquerda */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold font-second text-text-primary leading-[1.05] tracking-tight">
              <TextWordReveal text="Sobre Mim" />
            </h2>

            {/* Avatar + disponibilidade */}
            <div className="flex items-center gap-4">
              {/* Avatar placeholder com iniciais */}
              <div
                className="relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-sm text-text-primary"
                style={{
                  background: 'linear-gradient(135deg, hsl(220 30% 14%), hsl(280 25% 20%))',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                PA
                {/* Anel pulsante de disponibilidade */}
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#05070B]" />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-second font-semibold text-text-primary">Pedro Antônio</span>
                <span className="text-xs font-second text-emerald-500 tracking-wider">Disponível para oportunidades</span>
              </div>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-subtle">
              {aboutMetrics.map((metric, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <span className="text-[clamp(1.75rem,2.5vw,2.5rem)] font-extrabold font-mono text-text-primary leading-none">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest leading-tight">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Direita — Narrativa */}
          <div className="lg:col-span-7 flex flex-col justify-start gap-6 lg:pt-2">
            <p className="text-lg sm:text-xl 2xl:text-2xl text-text-secondary leading-relaxed font-light font-body">
              Estudante de Engenharia de Software com foco em desenvolvimento <span className="text-text-primary font-normal">Full Stack</span> e apaixonado pela resolução de problemas através do código. Minha jornada é marcada pelo aprendizado contínuo e pela aplicação prática em projetos reais.
            </p>
            <p className="text-base text-text-secondary leading-relaxed font-light font-body">
              Atualmente, dedico-me ao ecossistema Web e C#, com experiência no desenvolvimento de sistemas responsivos, como plataformas de gestão financeira e sistemas de pedidos (PDV) com manipulação dinâmica de dados. Tenho também forte interesse em infraestrutura de nuvem (AWS) e automação com Python.
            </p>
            <p className="text-base text-text-secondary leading-relaxed font-light font-body">
              Busco constantemente novos desafios que me permitam evoluir tecnicamente e contribuir para soluções inovadoras no ecossistema de tecnologia, sempre visando criar experiências escaláveis e esteticamente impecáveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
