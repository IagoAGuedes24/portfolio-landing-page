# 🚀 Portfólio Pessoal | Iago Albuquerque

<p align="center">
  <strong>Desenvolvedor Full-Stack & Soluções com Inteligência Artificial</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Lucide_Icons-F59E0B?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide Icons" />
</p>

---

## 📌 Visão Geral

Landing page moderna, minimalista e de alta performance criada para apresentar a trajetória profissional, projetos em destaque e habilidades técnicas de **Iago Albuquerque**.

O projeto alia rigor conceitual em **Ciência da Computação**, práticas consolidadas de engenharia de software (**Clean Architecture, SOLID, microsserviços**) e foco no desenvolvimento de **sistemas com Inteligência Artificial Agêntica**.

---

## ✨ Recursos Principais

- 🌓 **Alternância de Tema (Light & Dark Mode)**: Suporte completo a tema claro (padrão) e tema escuro minimalista, com transição suave e persistência automática no `localStorage`.
- 📱 **Design Responsivo & Mobile First**: Navbar com menu drawer para dispositivos móveis, espaçamento fluido e excelente usabilidade em qualquer resolução.
- ⚡ **Build Rápido & Tipagem Estrita**: Construído com **React 19**, **Vite** e **TypeScript**, garantindo hot reload instantâneo e zero erros de compilação.
- 💬 **Integrações de Contato Direto**:
  - **WhatsApp**: Link direto com número e mensagem pré-definida para propostas de projetos (*"Olá Iago! Tive uma ideia e gostaria de começar um projeto contigo."*).
  - **Gmail Web**: Botão que abre diretamente a tela de composição do Gmail no navegador (sem acionar clientes desktop como o Outlook).
  - **E-mail com Cópia Rápida**: Botão interativo para copiar o e-mail para a área de transferência com feedback visual dinâmico (*"Copiado!"*).
  - **Redes Sociais**: Acesso direto ao GitHub e LinkedIn.
- 🧩 **Arquitetura Desacoplada**: Todos os dados (bio, habilidades, projetos, links de contato) ficam centralizados em `src/data/portfolioData.ts`, facilitando a personalização sem tocar na lógica dos componentes.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Descrição |
|---|---|---|
| **Linguagem & Tipagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estrita de dados e componentes |
| **Biblioteca UI** | [React 19](https://react.dev/) | Estrutura declarativa de componentes e hooks |
| **Bundler & Dev Server** | [Vite 8](https://vite.dev/) | Ambiente de desenvolvimento veloz com HMR |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/) | Estilização utilitária com `@tailwindcss/vite` |
| **Ícones** | [Lucide React](https://lucide.dev/) | Ícones modernos e consistentes |

---

## 📁 Estrutura de Pastas

```
projetoPortfolio/
├── public/                 # Favicon e assets públicos
├── src/
│   ├── components/         # Componentes modulares da landing page
│   │   ├── Navbar.tsx      # Barra fixa com blur, menu mobile e toggle de tema
│   │   ├── Hero.tsx        # Apresentação de impacto, badge pulsante e CTAs
│   │   ├── About.tsx       # Resumo de formação e 3 pilares de engenharia
│   │   ├── Skills.tsx      # Badges categorizadas (Backend, Frontend, DevOps, IA)
│   │   ├── Projects.tsx    # Cards com Problema, Solução Técnica e links (Demo/Repo)
│   │   ├── Contact.tsx     # Cards de WhatsApp, Gmail, LinkedIn e GitHub
│   │   ├── Footer.tsx      # Rodapé com créditos e botão de retorno ao topo
│   │   └── Icons.tsx       # Ícones SVG dedicados (GitHub, LinkedIn, WhatsApp)
│   ├── context/
│   │   └── ThemeContext.tsx # Gerenciamento de tema Light/Dark e persistência
│   ├── data/
│   │   └── portfolioData.ts # Dados desacoplados (projetos, skills, textos e links)
│   ├── types/
│   │   └── index.ts        # Interfaces TypeScript (Project, SkillCategory, etc.)
│   ├── App.tsx             # Composição semântica das seções
│   ├── index.css           # Configurações globais de CSS e variantes Tailwind
│   └── main.tsx            # Ponto de entrada da aplicação
├── index.html              # Metadados, SEO e fontes Google (Inter / JetBrains Mono)
├── vite.config.ts          # Configuração do Vite com plugins React e Tailwind v4
├── package.json            # Dependências e scripts npm
└── tsconfig.json           # Configurações do compilador TypeScript
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (ou yarn/pnpm)

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/IagoAGuedes24/projetoPortfolio.git
   cd projetoPortfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no seu navegador: **http://localhost:5173**

4. **Compilar para produção:**
   ```bash
   npm run build
   ```

5. **Visualizar o build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## ⚙️ Personalização dos Dados

Para atualizar suas informações pessoais, novas tecnologias ou adicionar novos projetos, edite apenas o arquivo:

👉 [`src/data/portfolioData.ts`](src/data/portfolioData.ts)

Nesse arquivo você pode alterar:
- Nome, bio e headline principal
- E-mail e links de redes sociais (GitHub, LinkedIn)
- Número de telefone e mensagem pré-definida do WhatsApp
- Badges da seção de Habilidades divididas por categoria
- Lista de projetos em destaque com descrição de problema, solução técnica e tags

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). Sinta-se à vontade para utilizar o código como base e inspiração para o seu próprio portfólio!

---

<p align="center">
  Desenvolvido por <strong>Iago Albuquerque</strong> ☕
</p>
