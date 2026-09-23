import React from 'react';
import { Server, Layout, Terminal, Bot } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  Layout: Layout,
  Terminal: Terminal,
  Bot: Bot,
};

export const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-28 border-t border-zinc-200 dark:border-zinc-900 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/20 mb-4">
            <span>Tech Stack & Habilidades</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-5 leading-tight">
            Tecnologias e Ferramentas que Domino
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
            Do design da arquitetura de backend à interface do usuário e orquestração de IA.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.iconName];
            return (
              <div
                key={category.title}
                className="p-7 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-xl">
                        {category.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges List */}
                  <div className="flex flex-wrap gap-2.5 pt-4">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-2 rounded-xl text-sm font-mono font-medium bg-zinc-100 dark:bg-zinc-950/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800/80 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
