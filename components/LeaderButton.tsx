import React from 'react';
import { Leader } from '../types.ts';
import { Check, MessageSquare } from 'lucide-react';

interface LeaderButtonProps {
  leader: Leader;
  isSelected: boolean;
  onSelect: (leader: Leader) => void;
  onDirectChat?: (leader: Leader) => void;
  disabled: boolean;
}

export const LeaderButton: React.FC<LeaderButtonProps> = ({ leader, isSelected, onSelect, onDirectChat, disabled }) => {
  return (
    <div className="relative group">
      <button
        onClick={() => (!disabled || isSelected) && onSelect(leader)}
        disabled={disabled && !isSelected}
        className={`
          w-full text-left p-5 rounded-2xl border transition-all duration-300
          flex flex-col justify-between min-h-[180px]
          ${isSelected 
            ? 'bg-amber-500/10 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)]' 
            : 'bg-white dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 hover:border-amber-500/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed'
          }
        `}
      >
        <div className="flex justify-between items-start w-full">
          <div className="space-y-1 pr-4">
            <h4 className={`font-bold text-lg leading-tight transition-colors ${isSelected ? 'text-amber-500' : 'text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-white'}`}>
              {leader.name}
            </h4>
            <p className="text-[10px] uppercase tracking-widest font-black text-zinc-400 dark:text-zinc-500">
              {leader.title}
            </p>
          </div>
          <div className={`
            w-6 h-6 rounded-full border flex items-center justify-center transition-all
            ${isSelected ? 'bg-amber-500 border-amber-500' : 'border-zinc-300 dark:border-zinc-700'}
          `}>
            {isSelected && <Check size={14} className="text-white dark:text-black" />}
          </div>
        </div>

        <p className={`text-xs mt-4 leading-relaxed line-clamp-3 transition-colors ${isSelected ? 'text-zinc-700 dark:text-zinc-300' : 'text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400'}`}>
          {leader.description}
        </p>
      </button>
      
      {/* Botão de Chat Direto */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onDirectChat?.(leader);
        }}
        title="Bater um papo ao vivo"
        className="absolute bottom-4 right-4 p-3 bg-amber-500 text-black rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg z-10"
      >
        <MessageSquare size={16} />
      </button>
    </div>
  );
};