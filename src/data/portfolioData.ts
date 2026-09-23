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
    skills: ['Python', 'Django', 'FastAPI', 'REST APIs', 'PostgreSQL', 'Redis', 'SQLAlchemy', 'Pydantic', 'Celery']
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
    skills: ['Docker', 'Git & GitHub', 'Linux / WSL', 'CI/CD Pipelines', 'Nginx', 'Bash Scripting', 'Postman']
  },
  {
    title: 'IA & Engenharia Agêntica',
    description: 'Automação inteligente, raciocínio em etapas e orquestração de LLMs.',
    iconName: 'Bot',
    skills: ['IA Agêntica', 'LangChain', 'LlamaIndex', 'Prompt Engineering', 'Integração de LLMs', 'RAG', 'Automação']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'omniagent-core',
    title: 'OmniAgent Core',
    tagline: 'Orquestrador de IA Agêntica para Resolução Autônoma de Tarefas',
    category: 'Inteligência Artificial',
    problem: 'Processos de triagem e análise multi-fonte em empresas dependem de esforço manual excessivo, causando lentidão e falhas humanas.',
    solution: 'Sistema autônomo com agentes inteligentes que interpretam comandos de alto nível, selecionam ferramentas dinâmicas, executam validações e entregam relatórios completos.',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'LangChain', 'Docker', 'Tailwind CSS'],
    demoUrl: 'https://demo.example.com/omniagent',
    repoUrl: 'https://github.com/IagoAGuedes24/omniagent-core',
    featured: true
  },
  {
    id: 'nexus-enterprise-api',
    title: 'Nexus Enterprise API & Dashboard',
    tagline: 'Arquitetura de Microsserviços e Telemetria em Tempo Real',
    category: 'Full-Stack & Backend',
    problem: 'Sistemas corporativos sofrem com alto tempo de resposta em relatórios analíticos e gargalos de concorrência em horários de pico.',
    solution: 'Endpoints de alta velocidade desenvolvidos em FastAPI e Django REST com camada de caching em Redis e painel interativo em React com streaming de métricas.',
    tags: ['Python', 'Django', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    demoUrl: 'https://demo.example.com/nexus',
    repoUrl: 'https://github.com/IagoAGuedes24/nexus-enterprise-api',
    featured: true
  },
  {
    id: 'cloudpulse-monitor',
    title: 'CloudPulse Observability Hub',
    tagline: 'Painel Centralizado de Telemetria e Monitoramento de Containers',
    category: 'DevOps & Observabilidade',
    problem: 'Falta de visibilidade centralizada do consumo de recursos, containers Docker e logs de microsserviços em ambientes de desenvolvimento e teste.',
    solution: 'Dashboard minimalista dark mode que coleta dados de CPU/memória, gerencia o ciclo de vida de containers e exibe logs em tempo real.',
    tags: ['TypeScript', 'React', 'Docker', 'Linux / WSL', 'Tailwind CSS', 'REST APIs'],
    demoUrl: 'https://demo.example.com/cloudpulse',
    repoUrl: 'https://github.com/IagoAGuedes24/cloudpulse-monitor',
    featured: true
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
