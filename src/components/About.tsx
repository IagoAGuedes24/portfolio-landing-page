import React from 'react';
import { Layers, Cpu, Bot, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PILLARS } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  Cpu: Cpu,
  Bot: Bot,
};

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-28 border-t border-zinc-200 dark:border-zinc-900 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-medium text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 mb-4">
            <span>Sobre Mim</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-5 leading-tight">
            Fundamentos Sólidos em Computação & Paixão por IA Agêntica
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
            Combinando teoria da computação com padrões modernos de desenvolvimento para construir produtos escaláveis e inteligentes.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
            {PERSONAL_INFO.aboutBio.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-700 dark:text-zinc-300/90 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="p-5 rounded-2xl bg-white/90 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 mt-6 flex items-start gap-4 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <span className="font-bold text-zinc-900 dark:text-zinc-100">Foco em Excelência Técnica:</span> Código tipado, testes automatizados, documentação clara e arquitetura preparada para suportar o crescimento contínuo do produto.
              </p>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            {PILLARS.map((pillar) => {
              const IconComponent = iconMap[pillar.iconName];
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-200/90 dark:border-zinc-800/80 hover:border-cyan-500/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 transition-all shadow-sm group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-500/40 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed pl-15">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
