import React from 'react';
import { ArrowDown, Layers, Cpu, Bot } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36 transition-colors duration-300">
      {/* Dynamic Ambient Blur Backdrop */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-gradient-to-tr from-cyan-400/20 via-emerald-400/15 to-transparent dark:from-cyan-500/15 dark:via-emerald-500/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-950/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-sm dark:shadow-inner mb-8 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.statusBadge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.12] mb-8">
            Desenvolvimento Full-Stack &{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
              Soluções com Inteligência Artificial
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed mb-12 max-w-3xl">
            {PERSONAL_INFO.subheadline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-16">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-zinc-950 hover:opacity-95 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Ver Projetos</span>
              <ArrowDown className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-base bg-white dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <GithubIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-base bg-white dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <LinkedinIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-200/90 dark:border-zinc-800/80">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-zinc-800/60 shadow-sm">
              <Layers className="w-6 h-6 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm block">Ciência da Computação</span>
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-mono">Clean Architecture</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-zinc-800/60 shadow-sm">
              <Cpu className="w-6 h-6 text-teal-600 dark:text-teal-400 shrink-0" />
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm block">Python & React</span>
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-mono">FastAPI, Django, TS</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/80 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-zinc-800/60 shadow-sm">
              <Bot className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm block">IA Agêntica</span>
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-mono">Workflows & LLMs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
