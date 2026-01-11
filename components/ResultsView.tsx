
import { Leader, MentorResponse } from '../types.ts';
import { 
  Brain, Zap, PenTool, Lightbulb, Quote, History, 
  Layers, UserRound, Target, Compass, Trophy, 
  Rocket, ShieldCheck, ChevronRight, Printer, 
  ScrollText, Hammer, Gavel, FileText, Activity,
  MessageSquareShare
} from 'lucide-react';
import React, { useState } from 'react';

interface ResultsViewProps {
  leaders: Leader[];
  responses: MentorResponse[];
  problem: string;
  problemSummary: string;
  onStartChat?: (leader: Leader) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ leaders, responses, problem, problemSummary, onStartChat }) => {
  const [isProblemExpanded, setIsProblemExpanded] = useState(false);
  const isLongProblem = problem.length > 280;

  const chapters = [
    {
      title: "Capítulo I: Arquitetura do Pensamento",
      description: "A base intelectual e a visão de longo prazo sobre o desafio.",
      icon: ScrollText,
      sections: [
        { id: 'thinking', label: 'Pensar', icon: Brain, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
        { id: 'reflecting', label: 'Refletir', icon: History, color: 'text-violet-500', bg: 'bg-violet-500/10' },
        { id: 'quoting', label: 'Citar', icon: Quote, color: 'text-rose-500', bg: 'bg-rose-500/10' },
      ]
    },
    {
      title: "Capítulo II: Engenharia de Execução",
      description: "As manobras táticas e a estrutura lógica da solução.",
      icon: Hammer,
      sections: [
        { id: 'acting', label: 'Agir', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
        { id: 'writing', label: 'Escrever', icon: PenTool, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { id: 'creating', label: 'Criar', icon: Lightbulb, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { id: 'mounting', label: 'Montar', icon: Layers, color: 'text-orange-500', bg: 'bg-orange-500/10' },
      ]
    },
    {
      title: "Capítulo III: O Veredito Final",
      description: "O conselho de choque e a verdade necessária.",
      icon: Gavel,
      sections: [
        { id: 'advising', label: 'Aconselhar', icon: UserRound, color: 'text-red-500', bg: 'bg-red-500/10' },
      ]
    }
  ];

  const handleExportPDF = () => {
    const wasExpanded = isProblemExpanded;
    setIsProblemExpanded(true);
    setTimeout(() => {
      const isDark = document.documentElement.classList.contains('dark');
      const element = document.getElementById('report-content');
      if (!element) return;
      // @ts-ignore
      html2pdf().set({
        margin: [10, 10, 10, 10],
        filename: `CONSELHO_${new Date().getTime()}.pdf`,
        html2canvas: { scale: 2, useCORS: true, backgroundColor: isDark ? '#050505' : '#ffffff' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      }).from(element).save().then(() => setIsProblemExpanded(wasExpanded));
    }, 150);
  };

  return (
    <div className="max-w-7xl mx-auto pb-32 px-4 sm:px-6 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 no-print">
        <div className="space-y-1">
          <h2 className="text-xl font-display font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic">Dossiê de Inteligência</h2>
          <div className="flex items-center space-x-2">
             <div className="h-[1px] w-6 bg-amber-500" />
             <p className="text-[8px] text-zinc-500 uppercase tracking-[0.3em] font-display font-black">Advisory Hub — CONFIDENCIAL</p>
          </div>
        </div>
        <button onClick={handleExportPDF} className="flex items-center space-x-3 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl transition-all hover:scale-[1.03] shadow-xl">
          <Printer size={16} />
          <span className="text-[10px] font-display font-black uppercase tracking-widest">Baixar PDF</span>
        </button>
      </div>

      <div id="report-content" className="space-y-16 p-6 md:p-12 rounded-[32px] bg-white dark:bg-[#050505] shadow-2xl border border-zinc-100 dark:border-zinc-900 overflow-hidden">
        <div className="relative overflow-hidden rounded-[24px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 p-8 md:p-12">
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
              <ShieldCheck className="text-amber-500 w-5 h-5" />
              <p className="text-[9px] text-amber-600 dark:text-amber-500 uppercase tracking-[0.4em] font-display font-black italic">Protocolo de Diagnóstico Validado</p>
            </div>
            <h1 className="text-2xl md:text-5xl font-serif font-black text-zinc-900 dark:text-white leading-[1.1] mb-10 italic tracking-tight">"{problemSummary}"</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div className="md:col-span-8 space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-[1.7] font-medium italic">{problem}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {chapters.map((chapter, cIdx) => (
            <div key={cIdx} className="space-y-12">
              <div className="flex flex-col space-y-2 border-l-4 border-amber-500 pl-6">
                <div className="flex items-center space-x-3">
                   <chapter.icon size={20} className="text-amber-500" />
                   <h3 className="text-xl md:text-2xl font-display font-black text-zinc-900 dark:text-white uppercase tracking-tighter">{chapter.title}</h3>
                </div>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-[0.3em]">{chapter.description}</p>
              </div>

              <div className="space-y-20">
                {chapter.sections.map((section) => (
                  <div key={section.id} className="space-y-6">
                    <div className="flex items-center space-x-4 opacity-70">
                      <div className={`p-2 rounded-lg ${section.bg}`}><section.icon size={14} className={section.color} /></div>
                      <h4 className="text-[10px] font-display font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest italic">{section.label}</h4>
                      <div className="h-px flex-grow bg-zinc-100 dark:bg-zinc-900" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {leaders.map((leader) => {
                        const response = responses.find(r => r.leaderId === leader.id);
                        if (!response) return null;
                        return (
                          <div key={leader.id} className="relative bg-zinc-50/50 dark:bg-zinc-950/30 p-6 rounded-2xl border border-transparent hover:border-amber-500/10 transition-all">
                            <p className="text-[9px] text-amber-600 dark:text-amber-500 font-display font-black uppercase mb-4 opacity-70">{leader.name}</p>
                            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-[1.7] font-sans font-medium">{response[section.id as keyof MentorResponse]}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-12 pt-12">
            <div className="text-center space-y-3">
              <div className="inline-flex p-4 rounded-full bg-zinc-900 dark:bg-zinc-100 mb-4 shadow-2xl"><Rocket className="w-8 h-8 text-amber-500" /></div>
              <h3 className="text-2xl md:text-4xl font-display font-black text-zinc-900 dark:text-white uppercase tracking-tighter italic">Masterplan Operacional</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {leaders.map((leader) => {
                const response = responses.find(r => r.leaderId === leader.id);
                if (!response) return null;
                return (
                  <div key={leader.id} className="relative bg-[#080808] text-white rounded-[40px] p-8 overflow-hidden group border border-zinc-800 shadow-2xl">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-8 border-b border-white/10 pb-6">
                        <span className="text-[9px] text-amber-500 font-display font-black uppercase tracking-[0.5em]">Protocolo {leader.id.toUpperCase()}</span>
                        <h4 className="text-2xl font-display font-black uppercase tracking-tight italic">{leader.name}</h4>
                      </div>
                      <div className="space-y-6 flex-grow text-zinc-400 text-sm">{response.actionPlan}</div>
                      
                      <button 
                        onClick={() => onStartChat?.(leader)}
                        className="mt-8 w-full h-12 rounded-xl bg-amber-500 text-black font-display font-black text-[10px] uppercase tracking-widest flex items-center justify-center space-x-3 hover:scale-105 transition-all no-print"
                      >
                        <MessageSquareShare size={16} />
                        <span>Conversar ao Vivo</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
