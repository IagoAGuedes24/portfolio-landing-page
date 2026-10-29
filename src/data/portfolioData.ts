import type { Project, SkillCategory, SocialLink, Pillar } from '../types';

export const PERSONAL_INFO = {
  name: 'Iago Albuquerque',
  avatarUrl: 'https://github.com/IagoAGuedes24.png',
  role: 'Desenvolvedor Full-Stack & Soluções com Inteligência Artificial',
  statusBadge: 'Disponível para novos projetos & soluções em IA',
  headline: 'Desenvolvimento Full-Stack & Soluções com Inteligência Artificial',
  subheadline: 'Engenheiro de software com sólida formação em Ciência da Computação, focado em arquiteturas escaláveis, ecossistema Python/React e sistemas agênticos com IA.',
  email: 'iagoalbguedes@gmail.com',
  githubUrl: 'https://github.com/IagoAGuedes24',
  githubUser: 'IagoAGuedes24',
  linkedinUrl: 'https://www.linkedin.com/in/iago-albuquerque-guedes/',
  linkedinUser: 'iago-albuquerque-guedes',
  // Mensagens pré-definidas sugeridas:
  // 1. Projeto: "Olá Iago! Tive uma ideia e gostaria de começar um projeto contigo."
  // 2. Oportunidade: "Olá Iago! Vi seu portfólio e gostaria de conversar sobre uma oportunidade profissional."
  // 3. IA & Consultoria: "Olá Iago! Tenho interesse em uma solução com Inteligência Artificial e gostaria de trocar uma ideia."
  whatsappNumber: '5583986273637',
  whatsappFormatted: '(83) 98627-3637',
  whatsappLabel: 'Iago Albuquerque - Dev',
  whatsappMessage: 'Olá Iago! Tive uma ideia e gostaria de começar um projeto contigo.',
  whatsappUrl: 'https://wa.me/5583986273637?text=Ol%C3%A1%20Iago!%20Tive%20uma%20ideia%20e%20gostaria%20de%20come%C3%A7ar%20um%20projeto%20contigo.',
  gmailComposeUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=iagoalbguedes@gmail.com&su=Contato%20via%20Portf%C3%B3lio&body=Ol%C3%A1%20Iago,%0A%0AVi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.',
  aboutBio: [
    'Sou desenvolvedor de software com sólida base acadêmica e prática em Ciência da Computação. Minha filosofia de engenharia alia o rigor dos fundamentos teóricos (estruturas de dados, algoritmos e concorrência) aos padrões mais modernos da indústria: Clean Architecture, SOLID, microsserviços e resiliência de software.',
    'No desenvolvimento de aplicações web full-stack, transito com fluidez do backend assíncrono de alta performance com Python (FastAPI e Django) ao frontend reativo e moderno em React com TypeScript e Tailwind CSS. Construo soluções orientadas a alta performance e usabilidade refinada.',
    'Avanço continuamente na fronteira da Inteligência Artificial Agêntica: projeto e orquestro agentes autônomos com LLMs, ferramentas integradas e fluxos de raciocínio multi-etapas, resolvendo problemas complexos do mundo real com robustez e segurança.'
  ]
};

export const PILLARS: Pillar[] = [
  {
    title: 'Arquitetura & Clean Code',
    description: 'Aplicações desacopladas, alta sustentabilidade de código, APIs assíncronas e modelagem orientada a domínios complexos.',
    iconName: 'Layers'
  },
  {
    title: 'Engenharia Full-Stack Reativa',
    description: 'Sinergia técnica de ponta a ponta: backends assíncronos e robustos em Python integrados a frontends fluidos e tipados com React.',
    iconName: 'Cpu'
  },
  {
    title: 'Sistemas Agênticos & IA',
    description: 'Orquestração de sistemas autônomos com LLMs, raciocínio em múltiplos passos e integração com ferramentas do mundo real.',
    iconName: 'Bot'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend & APIs',
    description: 'Microsserviços assíncronos, endpoints seguros e processamento concorrente.',
    iconName: 'Server',
    skills: ['Python', 'Django', 'FastAPI', 'REST APIs', 'PostgreSQL', 'SQLAlchemy', 'Pydantic']
  },
  {
    title: 'Frontend & Interface',
    description: 'Interfaces modernas, reativas, com dark mode nativo e foco na usabilidade.',
    iconName: 'Layout',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'HTML5 / CSS3', 'State Management', 'Responsive Design']
  },
  {
    title: 'DevOps & Ferramentas',
    description: 'Infraestrutura em containers, esteiras de entrega contínua e ambiente Linux.',
    iconName: 'Terminal',
    skills: ['Docker', 'Git & GitHub', 'Linux / WSL', 'CI/CD Pipelines', 'Postman']
  },
  {
    title: 'IA & Engenharia Agêntica',
    description: 'Automação inteligente, raciocínio em etapas e orquestração de LLMs.',
    iconName: 'Bot',
    skills: ['IA Agêntica', 'LangChain', 'Prompt Engineering', 'Integração de LLMs', 'RAG', 'Automação']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'watermark-studio',
    title: 'Watermark Studio',
    tagline: 'Processamento e Aplicação de Marcas d\'Água e Logos em Lotes de Imagens',
    category: 'Aplicação Web & Gráfica',
    problem: 'Profissionais de fotografia e criação perdem horas aplicando marcas d\'água manualmente em lotes de milhares de fotos, sofrendo com upload demorado e privacidade exposta.',
    solution: 'Aplicação web de alta performance com processamento 100% local (HTML5 Canvas e File System Access API), capaz de processar +2.000 fotos sem travar, com suporte a orientação EXIF e prévia em tempo real.',
    tags: ['JavaScript', 'HTML5 Canvas', 'File System Access API', 'EXIF Parser', 'Web Performance'],
    siteUrl: 'https://iagoaguedes24.github.io/watermark-studio/',
    repoUrl: 'https://github.com/IagoAGuedes24/watermark-studio',
    featured: true,
    ideAssisted: true,
    ideNote: 'Desenvolvido com auxílio de IDE'
  },
  {
    id: 'portfolio-landing-page',
    title: 'Portfólio & Hub de Engenharia e IA',
    tagline: 'Landing Page Pessoal de Alta Performance e Design de Engenharia',
    category: 'Frontend & UI/UX',
    problem: 'Necessidade de uma plataforma moderna e centralizada que represente com excelência projetos de engenharia full-stack e soluções em Inteligência Artificial.',
    solution: 'Landing page responsiva e otimizada com React 19, TypeScript e Tailwind CSS v4, suporte a dark/light mode nativo, arquitetura modular de componentes e integração direta de canais de contato.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'Clean Architecture', 'Dark Mode'],
    siteUrl: 'https://iagoalbuquerque.vercel.app/',
    repoUrl: 'https://github.com/IagoAGuedes24/portfolio-landing-page',
    featured: true,
    ideAssisted: true,
    ideNote: 'Desenvolvido com auxílio de IDE'
  },
  {
    id: 'cloudpulse-monitor',
    title: 'CloudPulse Observability Hub',
    tagline: 'Painel Centralizado de Telemetria e Monitoramento de Containers',
    category: 'DevOps & Observabilidade',
    problem: 'Falta de visibilidade centralizada do consumo de recursos, containers Docker e logs de microsserviços em ambientes de desenvolvimento e teste.',
    solution: 'Dashboard minimalista dark mode que coleta dados de CPU/memória, gerencia o ciclo de vida de containers e exibe logs em tempo real.',
    tags: ['TypeScript', 'React', 'Docker', 'Linux / WSL', 'Tailwind CSS', 'REST APIs'],
    siteUrl: 'https://demo.example.com/cloudpulse',
    repoUrl: 'https://github.com/IagoAGuedes24/cloudpulse-monitor',
    featured: true,
    ideAssisted: true,
    ideNote: 'Desenvolvido com auxílio de IDE'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/IagoAGuedes24',
    iconName: 'Github',
    value: 'github.com/IagoAGuedes24'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iago-albuquerque-guedes/',
    iconName: 'Linkedin',
    value: 'linkedin.com/in/iago-albuquerque-guedes'
  },
  {
    label: 'E-mail',
    href: 'mailto:iagoalbguedes@gmail.com',
    iconName: 'Mail',
    value: 'iagoalbguedes@gmail.com'
  }
];
