import { Database, LayoutTemplate, Terminal } from "lucide-react";

export const aboutMetrics = [
  { label: "Anos de Estudo", value: "4+" },
  { label: "Projetos de Destaque", value: "6+" },
  { label: "Idade", value: "20" },
];

export const skills = [
  {
    category: "Linguagens de Programação",
    icon: Terminal,
    items: ["TypeScript", "Python", "C#", "C++"],
  },
  {
    category: "Front-end & UI",
    icon: LayoutTemplate,
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & Bancos de Dados",
    icon: Database,
    items: ["C#", "Node.js", "Express", "SQL"],
  },
];

export type ExperienceType = "academica" | "profissional";

export const experiences = [
  {
    id: 1,
    type: "academica" as ExperienceType,
    role: "Engenharia de Software",
    company: "Faculdades Dom Bosco",
    period: "Ago 2024 - Jul 2028",
    description: "Ensino Superior cursando o Engenharia de Software. Foco em desenvolvimento e arquitetura de software, engenharia de sistemas e computação.",
  },
  {
    id: 2,
    type: "profissional" as ExperienceType,
    role: "Estagiário",
    company: "Agevap",
    period: "Jul 2026 - Atualmente",
    description: "Atuação em desenvolvimento e manutenção de sistemas de gestão, suporte técnico e otimização de processos administrativos.",
  },
  {
    id: 3,
    type: "profissional" as ExperienceType,
    role: "Jovem Aprendiz",
    company: "Nissan",
    period: "Abr 2024 - Fev 2026",
    description: "Atuação em projetos práticos e desenvolvimento de habilidades na área de eletromecânica, integrando conhecimentos industriais.",
  },
  {
    id: 4,
    type: "academica" as ExperienceType,
    role: "Técnico em Desenvolvimento de Sistemas",
    company: "SENAI - Resende",
    period: "Concluído (1200h)",
    description: "Formação técnica com desenvolvimento de projetos aplicados à Indústria 4.0. Meu projeto integrador foi um dos 15 melhores da Mostra Senai 2022.",
  },
  {
    id: 5,
    type: "academica" as ExperienceType,
    role: "Técnico em Eletromecânica",
    company: "SENAI - Resende",
    period: "Concluído (1200h)",
    description: "Formação técnica aprofundada na manutenção e operação de sistemas eletromecânicos (1200 horas de carga horária).",
  },
];
