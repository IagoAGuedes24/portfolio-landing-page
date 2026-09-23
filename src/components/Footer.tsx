import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 py-12 bg-zinc-100/70 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 text-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-bold text-zinc-800 dark:text-zinc-200 tracking-tight text-base">
              {PERSONAL_INFO.name}
            </span>
          </div>

          {/* Credits */}
          <p className="text-zinc-500 text-center sm:text-left text-sm">
            Construído com <span className="text-zinc-800 dark:text-zinc-300 font-semibold">React</span>,{' '}
            <span className="text-zinc-800 dark:text-zinc-300 font-semibold">TypeScript</span>,{' '}
            <span className="text-zinc-800 dark:text-zinc-300 font-semibold">Tailwind CSS</span> &{' '}
            <span className="text-zinc-800 dark:text-zinc-300 font-semibold">Vite</span>.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium shadow-sm"
          >
            <span>Topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-900 text-center text-zinc-500 dark:text-zinc-600 text-xs">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
