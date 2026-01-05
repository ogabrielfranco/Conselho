
import React from 'react';
import { Leader } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface LeaderCardProps {
  leader: Leader;
  isSelected: boolean;
  onSelect: (leader: Leader) => void;
  disabled: boolean;
}

export const LeaderCard: React.FC<LeaderCardProps> = ({ leader, isSelected, onSelect, disabled }) => {
  return (
    <div
      onClick={() => (!disabled || isSelected) && onSelect(leader)}
      className={`
        relative group cursor-pointer transition-all duration-300 rounded-xl overflow-hidden border-2
        ${isSelected 
          ? 'border-amber-500 scale-[1.02] shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
          : 'border-zinc-800 hover:border-zinc-600 grayscale hover:grayscale-0'
        }
        ${disabled && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={leader.image} 
          alt={leader.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {isSelected && (
          <div className="absolute top-3 right-3 text-amber-500 bg-black/50 rounded-full p-1">
            <CheckCircle2 size={24} />
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-lg leading-tight">{leader.name}</h3>
        <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1">{leader.title}</p>
        <p className="text-zinc-500 text-xs line-clamp-2">{leader.description}</p>
      </div>
    </div>
  );
};
