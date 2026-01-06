
import React, { useState } from 'react';
import { Leader, MentorResponse } from '../types.ts';
import { 
  Brain, Zap, PenTool, Lightbulb, Quote, History, 
  Layers, UserRound, Target, Compass, Trophy, 
  Rocket, ShieldCheck, ChevronRight, Printer, 
  ScrollText, Hammer, Gavel, FileText, Activity, 
  ChevronDown, ChevronUp
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
      
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `RELATORIO_CONSELHO_${new Date().getTime()}.pdf`,
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
    }, 150);
  };

  return (
    <div className="max-w-7xl mx-auto pb-32 px-4 sm:px-6 font-sans selection:bg-amber-500/30">
      
      {/* Actions Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 no-print animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="space-y-1">
          <h2 className="text-xl font-display font-black text-zinc-900 dark:text-white tracking-tighter uppercase italic">Dossiê de Inteligência</h2>
          <div className="flex items-center space-x-2">
             <div className="h-[1px] w-6 bg-amber-500" />
             <p className="text-[8px] text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.3em] font-display font-black">Strategic Advisory — CONFIDENCIAL</p>
          </div>
        </div>
        
        <button
          onClick={handleExportPDF}
          className="group flex items-center space-x-3 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl transition-all hover:scale-[1.03] active:scale-95 shadow-xl"
        >
          <Printer size={16} />
          <span className="text-[10px] font-display font-black uppercase tracking-widest">Baixar PDF do Conselho</span>
        </button>
      </div>

      {/* Main Content */}
      <div id="report-content" className="space-y-16 p-6 md:p-12 rounded-[32px] bg-white dark:bg-[#050505] shadow-2xl border border-zinc-100 dark:border-zinc-900 overflow-hidden">
        
        {/* Cover */}
        <div className="relative overflow-hidden rounded-[24px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 p-8 md:p-12">
          <div className="absolute top-0 right-0 p-4 opacity-[0.02] dark:opacity-[0.04] pointer-events-none rotate-12">
            <Target size={240} className="text-zinc-900 dark:text-white" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
              <ShieldCheck className="text-amber-500 w-5 h-5" />
              <p className="text-[9px] text-amber-600 dark:text-amber-500 uppercase tracking-[0.4em] font-display font-black italic">Protocolo de Diagnóstico Validado</p>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-black text-zinc-900 dark:text-white leading-[1.1] mb-10 italic tracking-tight">
              "{problemSummary}"
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-zinc-400 dark:text-zinc-500 font-display font-black uppercase tracking-widest">Contexto do Briefing</span>
                  {isLongProblem && (
                    <button 
                      onClick={() => setIsProblemExpanded(!isProblemExpanded)}
                      className="no-print text-[9px] font-black uppercase tracking-widest text-amber-500 hover:underline"
                    >
                      {isProblemExpanded ? 'Ver Menos' : 'Ver Texto Completo'}
                    </button>
                  )}
                </div>
                <div className={`relative transition-all duration-500 ${!isProblemExpanded && isLongProblem ? 'max-h-24 overflow-hidden' : 'max-h-[2000px]'}`}>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-[1.7] font-medium font-sans italic">
                    {problem}
                  </p>
                  {!isProblemExpanded && isLongProblem && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-50 dark:from-zinc-900 to-transparent pointer-events-none" />
                  )}
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end">
                 <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center space-x-4">
                    <Trophy className="text-amber-500 w-6 h-6" />
                    <p className="text-[9px] font-sans font-bold text-zinc-800 dark:text-zinc-200 leading-tight uppercase tracking-wide">
                       Intelecto Coletivo Ativado e Sincronizado.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="space-y-24">
          {chapters.map((chapter, cIdx) => (
            <div key={cIdx} className="space-y-12">
              <div className="flex flex-col space-y-2 border-l-4 border-amber-500 pl-6">
                <div className="flex items-center space-x-3">
                   <chapter.icon size={20} className="text-amber-500" />
                   <h3 className="text-xl md:text-2xl font-display font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
                    {chapter.title}
                  </h3>
                </div>
                <p className="text-[10px] md:text-xs text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-[0.3em]">
                  {chapter.description}
                </p>
              </div>

              <div className="space-y-20">
                {chapter.sections.map((section) => (
                  <div key={section.id} className="space-y-6">
                    <div className="flex items-center space-x-4 opacity-70">
                      <div className={`p-2 rounded-lg ${section.bg}`}>
                        <section.icon size={14} className={section.color} />
                      </div>
                      <h4 className="text-[10px] font-display font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest italic">
                        {section.label}
                      </h4>
                      <div className="h-px flex-grow bg-zinc-100 dark:bg-zinc-900" />
                    </div>

                    <div className={`grid grid-cols-1 lg:grid-cols-${Math.min(leaders.length, 3)} gap-8`}>
                      {leaders.map((leader) => {
                        const response = responses.find(r => r.leaderId === leader.id);
                        if (!response) return null;
                        return (
                          <div key={leader.id} className="relative group bg-zinc-50/50 dark:bg-zinc-950/30 p-6 rounded-2xl border border-transparent hover:border-amber-500/10 transition-all duration-300">
                            <p className="text-[9px] text-amber-600 dark:text-amber-500 font-display font-black uppercase mb-4 opacity-70">
                              {leader.name}
                            </p>
                            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-[1.7] font-sans font-medium">
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

          {/* Masterplan */}
          <div className="space-y-12 pt-12 page-break-before">
            <div className="text-center space-y-3">
              <div className="inline-flex p-4 rounded-full bg-zinc-900 dark:bg-zinc-100 mb-4 shadow-2xl animate-float">
                <Rocket className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl md:text-4xl font-display font-black text-zinc-900 dark:text-white uppercase tracking-tighter italic">Masterplan Operacional</h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-display font-bold tracking-[0.6em] text-[10px] uppercase italic">O Mapa da Vitória Definitivo</p>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-${Math.min(leaders.length, 3)} gap-8`}>
              {leaders.map((leader) => {
                const response = responses.find(r => r.leaderId === leader.id);
                if (!response) return null;
                return (
                  <div key={leader.id} className="relative bg-[#080808] text-white rounded-[40px] p-8 md:p-12 overflow-hidden group border border-zinc-800 shadow-2xl transition-all duration-700 hover:border-amber-500/40">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                       <Compass size={200} className="rotate-12" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-8 border-b border-white/10 pb-6">
                        <div className="flex items-center space-x-3 mb-3">
                           <Activity size={12} className="text-amber-500 animate-pulse" />
                           <span className="text-[9px] text-amber-500 font-display font-black uppercase tracking-[0.5em]">Protocolo {leader.id.toUpperCase()}</span>
                        </div>
                        <h4 className="text-2xl font-display font-black uppercase tracking-tight italic">
                          {leader.name}
                        </h4>
                      </div>

                      <div className="space-y-6 flex-grow">
                        {response.actionPlan.split('\n').filter(l => l.trim()).map((line, idx) => {
                          const isHeading = line.includes(':');
                          const [header, ...contentArr] = isHeading ? line.split(':') : [null, line];
                          const content = contentArr.join(':');
                          
                          return (
                            <div key={idx} className="space-y-2">
                              {header ? (
                                <div className="flex items-center space-x-2">
                                  <ChevronRight size={10} className="text-amber-500 shrink-0" />
                                  <p className="text-[10px] font-display font-black text-amber-500 uppercase tracking-widest">
                                    {header.trim()}
                                  </p>
                                </div>
                              ) : null}
                              <p className={`font-sans leading-[1.7] ${header ? 'text-zinc-50 text-base font-bold italic' : 'text-zinc-400 text-sm font-medium'}`}>
                                {content ? content.trim() : line.trim()}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                         <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                               <FileText size={12} className="text-zinc-600" />
                               <p className="text-[8px] text-zinc-500 uppercase font-display font-black tracking-widest">Autoridade Confirmada</p>
                            </div>
                            <p className="text-[9px] font-serif italic text-zinc-400 tracking-wide">Directive Clearance Alpha-1</p>
                         </div>
                         <div className="w-12 h-12 rounded-2xl border border-amber-500/20 flex items-center justify-center bg-amber-500/5 group-hover:border-amber-500/60 transition-all">
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                         </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 mt-16 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="flex items-center space-x-4">
            <Compass size={24} className="text-amber-500" />
            <div className="space-y-0.5">
              <p className="text-[10px] text-zinc-900 dark:text-white font-display font-black uppercase tracking-[0.5em]">Conselho de Inteligência Estratégica</p>
              <p className="text-[8px] text-zinc-400 uppercase tracking-[0.3em] font-bold italic">© {new Date().getFullYear()} — Uso Exclusivo e Restrito</p>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-[9px] font-display font-black uppercase tracking-widest">
            <span className="flex items-center space-x-2">
               <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
               <span className="text-red-600">ALTAMENTE CONFIDENCIAL</span>
            </span>
            <span className="w-1 h-1 bg-zinc-400 rounded-full" />
            <span>ID-REL: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
