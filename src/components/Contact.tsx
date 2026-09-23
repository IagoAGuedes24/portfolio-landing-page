import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = PERSONAL_INFO.email;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-28 border-t border-zinc-200 dark:border-zinc-900 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-mono font-medium text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 mb-4">
            <span>Contato</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-5 leading-tight">
            Vamos Construir Algo Incrível Juntos?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
            Estou disponível para novos projetos, desafios de engenharia e soluções com Inteligência Artificial.
          </p>
        </div>

        {/* 4 Contact Cards Grid (WhatsApp, E-mail, LinkedIn, GitHub) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {/* WhatsApp Card */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 rounded-2xl bg-white/90 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800 flex flex-col justify-between items-center text-center group hover:border-emerald-500/50 hover:shadow-lg dark:hover:bg-zinc-900/90 transition-all shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <WhatsappIcon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base mb-1">WhatsApp</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 font-mono mb-1">{PERSONAL_INFO.whatsappFormatted}</p>
            <span className="text-xs text-zinc-500 italic mb-5">"Tive uma ideia..."</span>
            <span className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500/20 transition-colors">
              <span>Chamar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          {/* Email Card */}
          <div className="p-7 rounded-2xl bg-white/90 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800 flex flex-col justify-between items-center text-center group hover:border-cyan-500/50 hover:shadow-lg transition-all shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base mb-1">E-mail Direto</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-mono mb-4 truncate max-w-full" title={email}>{email}</p>
            <div className="w-full flex flex-col gap-2">
              <button
                onClick={copyEmail}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-500" />
                    <span>Copiar e-mail</span>
                  </>
                )}
              </button>
              <a
                href={PERSONAL_INFO.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline font-medium inline-flex items-center justify-center gap-1 mt-1"
              >
                <span>Abrir no Gmail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 rounded-2xl bg-white/90 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800 flex flex-col justify-between items-center text-center group hover:border-cyan-500/50 hover:shadow-lg dark:hover:bg-zinc-900/90 transition-all shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <LinkedinIcon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base mb-1">LinkedIn</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-mono mb-5 truncate max-w-full">in/{PERSONAL_INFO.linkedinUser}</p>
            <span className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-cyan-700 dark:text-cyan-300 group-hover:bg-cyan-500/10 transition-colors border border-zinc-200 dark:border-transparent">
              <span>Conectar</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 rounded-2xl bg-white/90 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800 flex flex-col justify-between items-center text-center group hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:bg-zinc-900/90 transition-all shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center text-zinc-800 dark:text-zinc-200 mb-4 group-hover:scale-105 transition-transform">
              <GithubIcon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base mb-1">GitHub</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-mono mb-5 truncate max-w-full">@{PERSONAL_INFO.githubUser}</p>
            <span className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors border border-zinc-200 dark:border-transparent">
              <span>Acessar perfil</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
