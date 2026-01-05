
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { LEADERS, STRATEGIC_EXAMPLES } from './constants';
import { Leader, AppState } from './types';
import { LeaderButton } from './components/LeaderButton';
import { ResultsView } from './components/ResultsView';
import { generateLeaderAdvice, summarizeProblem } from './services/geminiService';
import { 
  ChevronRight, 
  ArrowLeft, 
  Sparkles, 
  Loader2,
  AlertCircle,
  TrendingUp,
  BrainCircuit,
  Globe,
  Compass,
  Moon,
  Sun,
  Lightbulb
} from 'lucide-react';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [state, setState] = useState<AppState>({
    selectedLeaders: [],
    problem: '',
    problemSummary: '',
    responses: [],
    isLoading: false,
    step: 'selection',
  });

  const [error, setError] = useState<string | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const toggleLeader = useCallback((leader: Leader) => {
    setState(prev => {
      const isSelected = prev.selectedLeaders.some(l => l.id === leader.id);
      if (isSelected) {
        return { ...prev, selectedLeaders: prev.selectedLeaders.filter(l => l.id !== leader.id) };
      }
      if (prev.selectedLeaders.length < 3) {
        return { ...prev, selectedLeaders: [...prev.selectedLeaders, leader] };
      }
      return prev;
    });
  }, []);

  const handleStartConsultation = async () => {
    if (state.selectedLeaders.length === 0 || !state.problem.trim()) return;
    
    setState(prev => ({ ...prev, isLoading: true }));
    setError(null);

    try {
      // Generate summary first for better UX context
      const summary = await summarizeProblem(state.problem);
      
      const responsePromises = state.selectedLeaders.map(leader => 
        generateLeaderAdvice(leader, state.problem)
      );
      const results = await Promise.all(responsePromises);
      
      setState(prev => ({
        ...prev,
        responses: results,
        problemSummary: summary,
        step: 'results',
        isLoading: false
      }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setError("A conexão com o Conselho foi interrompida. Verifique sua rede e tente novamente.");
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const reset = () => {
    setState({
      selectedLeaders: [],
      problem: '',
      problemSummary: '',
      responses: [],
      isLoading: false,
      step: 'selection',
    });
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = Array.from(new Set(LEADERS.map(l => l.category)));

  const selectExample = (text: string) => {
    setState(prev => ({ ...prev, problem: text }));
  };

  return (
    <div className="min-h-screen transition-colors duration-500 selection:bg-amber-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 dark:bg-amber-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/5 blur-[140px] rounded-full" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div 
            className="flex items-center space-x-4 cursor-pointer group" 
            onClick={reset}
          >
            <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl flex items-center justify-center transition-all group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Compass className="text-amber-500 w-6 h-6 group-hover:rotate-45 transition-transform" />
            </div>
            <div>
              <h1 className="font-serif text-2xl tracking-tighter text-zinc-900 dark:text-white">Conselho</h1>
              <div className="flex items-center space-x-2">
                <span className="h-1 w-1 bg-amber-500 rounded-full" />
                <p className="text-[9px] text-zinc-500 uppercase tracking-[0.3em] font-black">Strategic Advisory Hub</p>
              </div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-4 md:space-x-8">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 text-zinc-500 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-500 transition-all shadow-sm"
              title="Alternar Tema"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {state.step !== 'selection' && (
              <button 
                onClick={reset}
                className="group flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all text-xs font-black uppercase tracking-widest"
              >
                <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">Reiniciar</span>
              </button>
            )}
          </nav>
        </div>
      </header>

      <main ref={mainRef} className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {state.step === 'selection' && (
          <div className="space-y-24 animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] shadow-sm">
                <BrainCircuit size={14} className="text-amber-500" />
                <span>Fase de Convocação</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif text-zinc-900 dark:text-white leading-[0.95] tracking-tighter">
                Quem deve <span className="italic text-zinc-400 dark:text-zinc-600">decidir</span> por você?
              </h2>
              <p className="text-zinc-500 dark:text-zinc-500 text-xl leading-relaxed max-w-2xl font-light">
                Escolha até três mentores históricos. A convergência de suas metodologias criará um plano de ação definitivo para seu desafio atual.
              </p>
            </div>

            <div className="space-y-32 pb-48">
              {categories.map(cat => (
                <section key={cat} className="space-y-12">
                  <div className="flex items-center space-x-6">
                    <h3 className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.5em] whitespace-nowrap">
                      {cat}
                    </h3>
                    <div className="h-px w-full bg-gradient-to-r from-zinc-200 dark:from-zinc-900 to-transparent" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {LEADERS.filter(l => l.category === cat).map(leader => (
                      <LeaderButton 
                        key={leader.id}
                        leader={leader}
                        isSelected={state.selectedLeaders.some(l => l.id === leader.id)}
                        onSelect={toggleLeader}
                        disabled={state.selectedLeaders.length >= 3}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Controller */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-6">
              <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-3xl border border-zinc-200 dark:border-white/10 p-5 rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-500">
                <div className="flex items-center space-x-6 px-4">
                  <div className="flex -space-x-4">
                    {[0, 1, 2].map(i => {
                      const l = state.selectedLeaders[i];
                      return (
                        <div key={i} className={`w-14 h-14 rounded-full border-4 border-white dark:border-[#0a0a0a] flex items-center justify-center transition-all duration-700 shadow-xl ${l ? 'bg-amber-500' : 'bg-zinc-100 dark:bg-zinc-800'}`}>
                          {l ? (
                            <span className="text-white dark:text-black font-black text-sm uppercase">{l.name.charAt(0)}</span>
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">Painel Selecionado</p>
                    <p className="text-zinc-900 dark:text-white font-bold text-sm">
                      {state.selectedLeaders.length === 0 
                        ? "Ninguém convocado" 
                        : `${state.selectedLeaders.length} de 3 mentores`}
                    </p>
                  </div>
                </div>
                
                <button
                  disabled={state.selectedLeaders.length === 0}
                  onClick={() => {
                    setState(prev => ({ ...prev, step: 'input' }));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`
                    w-full sm:w-auto h-16 px-10 rounded-[30px] flex items-center justify-center space-x-4 font-black uppercase tracking-widest text-xs transition-all duration-500
                    ${state.selectedLeaders.length > 0 
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:scale-[1.03] shadow-2xl shadow-black/10 dark:shadow-white/10' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 cursor-not-allowed'}
                  `}
                >
                  <span>Definir Desafio</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        {state.step === 'input' && (
          <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 text-[10px] font-black text-zinc-500 uppercase tracking-widest shadow-sm">
                <TrendingUp size={14} className="text-amber-500" />
                <span>Briefing de Alto Nível</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-serif text-zinc-900 dark:text-white tracking-tighter">O que está em jogo?</h2>
              <p className="text-zinc-500 text-xl font-light">Seja brutalmente honesto. O Conselho precisa da verdade para agir.</p>
            </div>

            {/* Exemplos Inspiracionais */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Lightbulb size={14} className="text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Inspiração de Desafios</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {STRATEGIC_EXAMPLES.map((example, i) => (
                  <button
                    key={i}
                    onClick={() => selectExample(example)}
                    className="text-left px-5 py-3 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-500 transition-all shadow-sm max-w-xs line-clamp-2"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/10 to-blue-500/10 rounded-[48px] blur-2xl opacity-0 group-focus-within:opacity-100 transition duration-1000" />
              <textarea
                value={state.problem}
                onChange={(e) => setState(prev => ({ ...prev, problem: e.target.value }))}
                placeholder="Qual o impasse que impede seu próximo nível?"
                className="relative w-full h-[450px] bg-white dark:bg-zinc-950/40 border border-zinc-200 dark:border-white/5 rounded-[48px] p-12 text-3xl text-zinc-900 dark:text-white placeholder-zinc-300 dark:placeholder-zinc-800 focus:outline-none focus:border-amber-500/30 transition-all resize-none font-serif italic leading-relaxed shadow-lg"
              />
              <div className="absolute bottom-12 right-12 flex items-center space-x-6 bg-white/60 dark:bg-black/40 backdrop-blur-md p-4 rounded-3xl border border-zinc-200 dark:border-white/5">
                <div className="flex -space-x-3">
                  {state.selectedLeaders.map(l => (
                    <div key={l.id} className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-white dark:border-zinc-950 flex items-center justify-center text-[10px] font-black text-amber-500">
                      {l.name.charAt(0)}
                    </div>
                  ))}
                </div>
                <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />
                <span className="text-[9px] text-zinc-400 dark:text-zinc-500 font-black uppercase tracking-[0.2em]">Painel Ativo</span>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-3xl flex items-center space-x-6 text-red-500 animate-pulse">
                <AlertCircle size={28} />
                <p className="font-bold text-sm tracking-tight">{error}</p>
              </div>
            )}

            <div className="flex justify-center pt-10">
              <button
                disabled={!state.problem.trim() || state.isLoading}
                onClick={handleStartConsultation}
                className={`
                  relative h-24 px-20 rounded-[40px] font-black uppercase tracking-[0.3em] text-sm transition-all duration-700
                  ${!state.problem.trim() || state.isLoading
                    ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-700 cursor-not-allowed'
                    : 'bg-amber-500 text-white dark:text-black hover:scale-105 shadow-[0_20px_50px_rgba(245,158,11,0.2)]'}
                `}
              >
                {state.isLoading ? (
                  <div className="flex items-center space-x-6">
                    <Loader2 className="animate-spin w-7 h-7" />
                    <span>Conectando Intelectos...</span>
                  </div>
                ) : (
                  <span>Iniciar Reunião do Conselho</span>
                )}
              </button>
            </div>
          </div>
        )}

        {state.step === 'results' && (
          <div className="animate-in fade-in duration-1000">
            <ResultsView 
              leaders={state.selectedLeaders}
              responses={state.responses}
              problem={state.problem}
              problemSummary={state.problemSummary}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
