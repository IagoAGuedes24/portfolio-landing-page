import React from 'react';
import { ExternalLink, AlertCircle, CheckCircle2, Sparkles, Lock } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-28 border-t border-zinc-200 dark:border-zinc-900 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-medium text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 mb-4">
            <span>Portfólio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-5 leading-tight">
            Projetos em Destaque
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
            Soluções reais desenvolvidas com foco em performance, arquitetura escalável e inovação com IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white/90 dark:bg-zinc-900/50 border border-zinc-200/90 dark:border-zinc-800/80 overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(6,182,212,0.14)] transition-all group"
            >
              <div className="p-7">
                <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/20 px-3 py-1 rounded-md font-semibold">
                    {project.category}
                  </span>
                  {project.badgeText ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/25 px-2.5 py-1 rounded-md font-medium">
                      <span>{project.badgeText}</span>
                    </span>
                  ) : (project.aiAssisted || project.ideAssisted) ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/25 px-2.5 py-1 rounded-md font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>Auxílio de IA</span>
                    </span>
                  ) : (
                    <span className="text-xs text-zinc-500 font-mono">Destaque</span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2.5">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Problem Box */}
                <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-zinc-950/60 border border-amber-500/20 dark:border-zinc-800/70 mb-3.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400/90 mb-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>Problema</span>
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution Box */}
                <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-zinc-950/60 border border-emerald-500/20 dark:border-zinc-800/70 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Solução Técnica</span>
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/40 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* AI Assistance Footer Note */}
                {(project.aiAssisted || project.ideAssisted) && (
                  <div className="flex items-center gap-2 pt-3.5 mt-5 border-t border-zinc-100 dark:border-zinc-800/60 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span>{project.aiNote || project.ideNote || 'Desenvolvido com auxílio de IA'}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="p-5 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-200 dark:border-zinc-800/60 flex items-center gap-3">
                {(project.siteUrl || project.demoUrl) && (
                  <a
                    href={project.siteUrl || project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
                  >
                    <span>Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.isPrivateRepo || !project.repoUrl ? (
                  <div
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-zinc-900/60 text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800/80 cursor-not-allowed select-none"
                    title="Repositório privado institucional"
                  >
                    <Lock className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                    <span>Repositório Privado</span>
                  </div>
                ) : (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Repositório</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
