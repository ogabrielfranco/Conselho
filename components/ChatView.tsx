import React, { useState, useRef, useEffect } from 'react';
import { Leader, ChatMessage } from '../types.ts';
import { createMentorChat } from '../services/geminiService.ts';
import { Send, ArrowLeft, Loader2, User, Bot, Sparkles } from 'lucide-react';

interface ChatViewProps {
  leader: Leader;
  problem: string;
  onBack: () => void;
}

export const ChatView: React.FC<ChatViewProps> = ({ leader, problem, onBack }) => {
  const initialText = problem 
    ? `Saudações. Eu sou ${leader.name}. Analisei seu desafio sobre "${problem.substring(0, 50)}...". O que mais deseja saber sobre minha visão estratégica para este caso?`
    : `Olá. Eu sou ${leader.name}. Estou pronto para ouvi-lo. Qual desafio estratégico ou pessoal você deseja desvendar hoje?`;

  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: initialText }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    chatRef.current = createMentorChat(leader, problem);
  }, [leader, problem]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const stream = await chatRef.current.sendMessageStream({ message: userMessage });
      let fullText = '';
      
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        fullText += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: 'Minha conexão tática falhou. Poderia repetir a pergunta?' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white dark:bg-[#080808] border border-zinc-200 dark:border-zinc-800 rounded-[40px] shadow-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-700">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-zinc-100 dark:border-zinc-900 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="flex items-center space-x-5">
          <button onClick={onBack} className="p-3 rounded-2xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all text-zinc-500">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center space-x-4">
             <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-black font-black text-lg">
                {leader.name.charAt(0)}
             </div>
             <div>
                <h3 className="text-zinc-900 dark:text-white font-display font-black uppercase tracking-tight">{leader.name}</h3>
                <div className="flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Sessão de Mentoria Ativa</p>
                </div>
             </div>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/5 border border-amber-500/10">
           <Sparkles size={12} className="text-amber-500" />
           <span className="text-[9px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-500 italic">Personagem Nível-5</span>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 md:p-10 space-y-10 scroll-smooth">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex space-x-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${msg.role === 'user' ? 'bg-zinc-900 dark:bg-zinc-800 text-amber-500' : 'bg-amber-500 text-black'}`}>
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div className={`p-6 rounded-[24px] text-sm md:text-base leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded-tr-none' 
                  : 'bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-white/5 text-zinc-700 dark:text-zinc-300 font-serif italic rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex space-x-4 items-center bg-zinc-50 dark:bg-zinc-950/30 p-4 rounded-3xl border border-zinc-100 dark:border-white/5">
              <Loader2 size={16} className="animate-spin text-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic">Processando sabedoria estratégica...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 md:p-10 border-t border-zinc-100 dark:border-zinc-900">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Aprofunde seu questionamento estratégico..."
            className="w-full h-16 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-8 pr-20 text-zinc-900 dark:text-white focus:outline-none focus:border-amber-500/50 transition-all font-medium"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-30"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};