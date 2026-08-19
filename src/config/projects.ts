export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile-iot';
  tags: string[];
  image: string; // fallback if video is not supported or as main media
  video?: string; // path to video file (e.g. .mp4)
  githubUrl?: string;
  deployUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'FinanceAI',
    description: 'Consultor Financeiro de Bolso com IA Generativa e Open Finance. Sincroniza extratos automaticamente via API Pluggy, categoriza transações com Llama 3.3 (Groq) e gera insights reais de gastos. Sistema de cache com checksum evita chamadas desnecessárias à IA.',
    category: 'fullstack',
    tags: ['Next.js', 'Node.js', 'Express', 'Prisma', 'Tailwind CSS', 'Groq API', 'Pluggy API', 'PostgreSQL', 'Glassmorphism'],
    image: '/imgs/finance.png',
    video: '/videos/financeAI.mp4',
    githubUrl: 'https://github.com/Pedroantps/projeto-financeai.git',
    featured: true,
  },
  {
    id: '2',
    title: 'FluencyAI',
    description: 'Plataforma completa de aprendizado de inglês guiada por IA. Professora virtual com suporte a voz, cronograma semanal Kanban gerado por IA, flashcards com repetição espaçada e dashboard de progresso com streak.',
    category: 'fullstack',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Firebase Auth', 'Gemini API', 'Groq + Whisper'],
    image: '/imgs/fluency.png',
    video: '/videos/FluencyAI.mp4',
    githubUrl: 'https://github.com/Pedroantps/projeto-fluencyai.git',
    featured: true,
  },
  {
    id: '3',
    title: 'Cardápio Digital — Hamburgueria',
    description: 'Interface de cardápio digital focada em UX e conversão. Carrinho de compras funcional, validação de horário de funcionamento em tempo real e integração com a API do WhatsApp para envio automático do pedido. Design Mobile First totalmente responsivo.',
    category: 'frontend',
    tags: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API', 'Mobile First', 'Web Design Responsivo'],
    image: '/imgs/PAburger.jpg',
    video: '/videos/PAburger.mp4',
    githubUrl: 'https://github.com/Pedroantps/pa-burger.git',
    deployUrl: 'https://pedroantps.github.io/pa-burger/',
    featured: true,
  },
  {
    id: '4',
    title: 'CssGenerator — Gerador de Componentes',
    description: 'Gerador de componentes web com IA que transforma descrições em texto em código HTML e CSS pronto para uso. Preview em tempo real via iframe, cópia com Clipboard API e integração com Llama 3.3 (Groq API) para respostas rápidas e precisas.',
    category: 'frontend',
    tags: ['HTML', 'CSS', 'JavaScript', 'Groq API', 'Llama 3.3', 'Clipboard API', 'IA Generativa'],
    image: '/imgs/cssGenerator.jpg',
    video: '/videos/CssGenerator.mp4',
    githubUrl: 'https://github.com/antpedrops',
    deployUrl: 'https://projeto-css-sigma.vercel.app',
    featured: true,
  },
  {
    id: '5',
    title: 'VisualMindAI',
    description: 'VisualMindAI: app Python que transforma texto em mapas mentais visuais e interativos usando NLP e um layout horizontal customizado para melhor legibilidade.',
    category: 'fullstack',
    tags: ['Python', 'NetworkX', 'Matplotlib', 'NumPy', 'Tkinter'],
    image: '/imgs/VisualMindAI.png',
    githubUrl: 'https://github.com/Pedroantps/projeto-visualmindai.git',
    featured: true,
  },
  {
    id: '6',
    title: 'Personal Finance Manager',
    description: 'Aplicação web para controle de fluxo de caixa, gerenciando entradas e saídas de forma intuitiva. Desenvolvimento de lógica para cálculo automático de saldo e resumo mensal. Manipulação dinâmica do DOM para atualização de listas sem recarregar a página. Armazenamento de dados local (LocalStorage) para persistência das informações.',
    category: 'frontend',
    tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    image: '/imgs/devfinance.jpg',
    githubUrl: 'https://github.com/Pedroantps/gestao-financeira.git',
    deployUrl: 'https://pedroantps.github.io/gestao-financeira/',
    featured: true,
  },
  {
    id: '7',
    title: 'Hack e Ética - Grand Prix Firjan',
    description: 'Projeto Finalista no Sistema Firjan em parceria com Eticalizando para a "Jornada do Respeito" (2024). Ideação de soluções éticas aliando tecnologia à resolução de problemas complexos.',
    category: 'frontend',
    tags: ['Inovação', 'Lógica de Programação', 'Design de Solução'],
    image: '/imgs/hacketica.jpeg',
    featured: true,
  },
];
