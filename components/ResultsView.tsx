
import React, { useState } from 'react';
import { Leader, MentorResponse } from '../types';
import { 
  Brain, 
  Zap, 
  PenTool, 
  Lightbulb, 
  Quote, 
  History, 
  Layers, 
  UserRound,
  Download,
  Target,
  Compass,
  Trophy,
  Rocket,
  ShieldCheck,
  ChevronRight,
  Printer,
  ScrollText,
  Hammer,
  Gavel,
  FileText,
  Activity,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ResultsViewProps {
  leaders: Leader[];
  responses: MentorResponse[];
  problem: string;
  problemSummary: string;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ leaders, responses, problem, problemSummary }) => {
  const [isProblemExpanded, setIsProblemExpanded] = useState(false);
  const isLongProblem = problem.length > 280;

  // Agrupamento de seções por "Capítulos Estratégicos" para melhor fluxo de leitura
  const chapters = [
    {
      title: "Capítulo I: Arquitetura do Pensamento",
      description: "A base intelectual, o modelo mental e a visão de longo prazo sobre o desafio.",
      icon: ScrollText,
      sections: [
        { id: 'thinking', label: 'Pensar', icon: Brain, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
        { id: 'reflecting', label: 'Refletir', icon: History, color: 'text-violet-500', bg: 'bg-violet-500/10' },
        { id: 'quoting', label: 'Citar', icon: Quote, color: 'text-rose-500', bg: 'bg-rose-500/10' },
      ]
    },
    {
      title: "Capítulo II: Engenharia de Execução",
      description: "As manobras táticas, princípios operacionais e a estrutura lógica da solução.",
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
      description: "O conselho de choque e a verdade necessária que ninguém mais diria.",
      icon: Gavel,
      sections: [
        { id: 'advising', label: 'Aconselhar', icon: UserRound, color: 'text-red-500', bg: 'bg-red-500/10' },
      ]
    }
  ];

  const handleExportPDF = () => {
    // Expandir temporariamente para a exportação
    const wasExpanded = isProblemExpanded;
    setIsProblemExpanded(true);
    
    setTimeout(() => {
      const isDark = document.documentElement.classList.contains('dark');
      const element = document.getElementById('report-content');
      
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `RELATORIO_ESTRATEGICO_${new Date().getTime()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          backgroundColor: isDark ? '#050505' : '#ffffff',
          letterRendering: true
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      // @ts-ignore
      html2pdf().set(opt).from(element).save().then(() => {
        setIsProblemExpanded(wasExpanded);
      });
    }, 100);
  };

  return (
    <div className="max-w-7xl mx-auto pb-32 px-4 sm:px-6 font-sans selection:bg-amber-500/30">
      
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 no-print animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="space-y-1">
          <h2 className="text-xl font-display font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic">Dossiê de Inteligência</h2>
          <div className="flex items-center space-x-2">
             <div className="h-[1px] w-6 bg-amber-500" />
             <p className="text-[8px] text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.3em] font-display font-black">Strategic Advisory Hub — CONFIDENTIAL</p>
          </div>
        </div>
        
        <button
          onClick={handleExportPDF}
          className="group flex items-center space-x-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2.5 rounded-lg transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/5"
        >
          <Printer size={12} />
          <span className="text-[8px] font-display font-black uppercase tracking-widest">Baixar PDF Estratégico</span>
        </button>
      </div>

      {/* Main Report Container */}
      <div id="report-content" className="space-y-16 p-4 md:p-10 rounded-[20px] md:rounded-[24px] bg-white dark:bg-[#050505] shadow-2xl border border-zinc-100 dark:border-zinc-900 overflow-hidden">
        
        {/* Executive Summary Cover */}
        <div className="relative overflow-hidden rounded-[16px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 p-6 md:p-10">
          <div className="absolute top-0 right-0 p-4 opacity-[0.02] dark:opacity-[0.04] pointer-events-none rotate-12">
            <Target size={200} className="text-zinc-900 dark:text-white" />
          </div>
          
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="text-amber-500 w-3 h-3" />
              <p className="text-[7px] text-amber-600 dark:text-amber-500 uppercase tracking-[0.3em] font-display font-black italic">Diagnóstico de Alta Performance</p>
            </div>

            <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-black text-zinc-900 dark:text-white leading-tight mb-6 italic tracking-tight">
              "{problemSummary}"
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[7px] text-zinc-400 dark:text-zinc-500 font-display font-black uppercase tracking-widest">Briefing Contextual</span>
                  {isLongProblem && (
                    <button 
                      onClick={() => setIsProblemExpanded(!isProblemExpanded)}
                      className="no-print flex items-center space-x-1 text-[7px] font-black uppercase tracking-widest text-amber-500 hover:text-amber-600 transition-colors"
                    >
                      <span>{isProblemExpanded ? 'Colapsar' : 'Expandir Texto'}</span>
                      {isProblemExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                    </button>
                  )}
                </div>
                <div className={`relative transition-all duration-500 ease-in-out ${!isProblemExpanded && isLongProblem ? 'max-h-24 overflow-hidden' : 'max-h-[2000px]'}`}>
                  <p className="text-zinc-600 dark:text-zinc-400 text-[13px] leading-[1.6] font-medium font-sans italic">
                    {problem}
                  </p>
                  {!isProblemExpanded && isLongProblem && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-50 dark:from-zinc-900 to-transparent pointer-events-none" />
                  )}
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end">
                 <div className="bg-white dark:bg-zinc-900 rounded-[12px] p-3 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center space-x-3">
                    <Trophy className="text-amber-500 w-4 h-4" />
                    <p className="text-[8px] font-sans font-bold text-zinc-800 dark:text-zinc-200 leading-tight uppercase tracking-wide">
                       Sinergia de Liderança Validada.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters and Grouped Sections */}
        <div className="space-y-16">
          {chapters.map((chapter, cIdx) => (
            <div key={cIdx} className="space-y-10">
              <div className="flex flex-col space-y-1 border-l border-amber-500/50 pl-4">
                <div className="flex items-center space-x-2">
                   <chapter.icon size={14} className="text-amber-500" />
                   <h3 className="text-sm md:text-base font-display font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
                    {chapter.title}
                  </h3>
                </div>
                <p className="text-[8px] text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-widest">
                  {chapter.description}
                </p>
              </div>

              <div className="space-y-12">
                {chapter.sections.map((section) => (
                  <div key={section.id} className="space-y-4">
                    <div className="flex items-center space-x-3 opacity-80">
                      <div className={`p-1.5 rounded-md ${section.bg}`}>
                        <section.icon size={12} className={section.color} />
                      </div>
                      <h4 className="text-[9px] font-display font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest italic">
                        {section.label}
                      </h4>
                      <div className="h-px flex-grow bg-zinc-100 dark:bg-zinc-900" />
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-${Math.min(leaders.length, 3)} gap-4 md:gap-6`}>
                      {leaders.map((leader) => {
                        const response = responses.find(r => r.leaderId === leader.id);
                        if (!response) return null;
                        return (
                          <div key={leader.id} className="relative group bg-zinc-50/40 dark:bg-zinc-950/20 p-4 rounded-xl border border-transparent hover:border-amber-500/10 transition-all duration-300">
                            <p className="text-[7px] text-amber-600 dark:text-amber-500 font-display font-black uppercase mb-2 opacity-60">
                              {leader.name}
                            </p>
                            <p className="text-zinc-700 dark:text-zinc-300 text-[11px] leading-[1.6] font-sans font-medium">
                              {response[section.id as keyof MentorResponse]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Masterplan Final - Chapter IV */}
          <div className="space-y-10 pt-10 page-break-before">
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 rounded-full bg-zinc-900 dark:bg-zinc-100 mb-2 shadow-lg">
                <Rocket className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-black text-zinc-900 dark:text-white uppercase tracking-tighter italic">Capítulo IV: Masterplan Operacional</h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-display font-bold tracking-[0.4em] text-[7px] uppercase italic">Roteiro Definitivo para Implementação</p>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-${Math.min(leaders.length, 3)} gap-6`}>
              {leaders.map((leader) => {
                const response = responses.find(r => r.leaderId === leader.id);
                if (!response) return null;
                return (
                  <div key={leader.id} className="relative bg-[#0a0a0a] text-white rounded-[20px] p-6 md:p-8 overflow-hidden group border border-zinc-800 shadow-xl transition-all duration-700 hover:border-amber-500/20">
                    <div className="absolute top-0 right-0 p-3 opacity-[0.01] group-hover:opacity-[0.03] pointer-events-none">
                       <Compass size={140} className="rotate-45" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6 border-b border-white/10 pb-4">
                        <div className="flex items-center space-x-2 mb-2">
                           <Activity size={10} className="text-amber-500 animate-pulse" />
                           <span className="text-[7px] text-amber-500 font-display font-black uppercase tracking-[0.3em]">Protocolo {leader.id.toUpperCase()}</span>
                        </div>
                        <h4 className="text-lg md:text-xl font-display font-black uppercase tracking-tight italic leading-none">
                          {leader.name}
                        </h4>
                      </div>

                      <div className="space-y-5 flex-grow">
                        {response.actionPlan.split('\n').filter(l => l.trim()).map((line, idx) => {
                          const isHeading = line.includes(':');
                          const [header, ...contentArr] = isHeading ? line.split(':') : [null, line];
                          const content = contentArr.join(':');
                          
                          return (
                            <div key={idx} className="space-y-1">
                              {header ? (
                                <div className="flex items-center space-x-1.5">
                                  <ChevronRight size={8} className="text-amber-500 shrink-0" />
                                  <p className="text-[7px] font-display font-black text-amber-500 uppercase tracking-[0.1em]">
                                    {header.trim()}
                                  </p>
                                </div>
                              ) : null}
                              <p className={`font-sans leading-[1.6] ${header ? 'text-zinc-50 text-[11px] md:text-[12px] font-bold italic' : 'text-zinc-400 text-[10px] md:text-[11px] font-medium'}`}>
                                {content ? content.trim() : line.trim()}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                         <div className="space-y-0.5">
                            <div className="flex items-center space-x-1">
                               <FileText size={8} className="text-zinc-600" />
                               <p className="text-[6px] text-zinc-500 uppercase font-display font-black tracking-widest">Master Clearance</p>
                            </div>
                            <p className="text-[7px] font-serif italic text-zinc-400">Validated Directive</p>
                         </div>
                         <div className="w-8 h-8 rounded-lg border border-amber-500/10 flex items-center justify-center bg-amber-500/5 group-hover:border-amber-500/40 transition-all">
                            <CheckIcon size={14} className="text-amber-500" />
                         </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Professional Footer */}
        <div className="pt-8 mt-10 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30">
          <div className="flex items-center space-x-3">
            <Compass size={14} className="text-amber-500" />
            <div className="space-y-0">
              <p className="text-[7px] text-zinc-900 dark:text-white font-display font-black uppercase tracking-[0.4em]">Strategic Council — Intelligence Directive</p>
              <p className="text-[6px] text-zinc-400 uppercase tracking-widest font-bold italic">Authorized Personnel Only</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-[7px] font-display font-black uppercase tracking-[0.1em]">
            <span className="flex items-center space-x-1">
               <span className="w-1 h-1 rounded-full bg-red-600" />
               <span className="text-red-600">CONFIDENCIAL</span>
            </span>
            <span className="w-0.5 h-0.5 bg-zinc-400 rounded-full" />
            <span>ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
            <span className="w-0.5 h-0.5 bg-zinc-400 rounded-full" />
            <span>{new Date().toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
