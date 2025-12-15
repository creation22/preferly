import React from 'react';
import GlassCard from './GlassCard';
import GradientButton from './GradientButton';
import { Sparkles } from 'lucide-react';

const VoteCard = ({ photo, onClick }) => {
    return (
        <GlassCard className="p-0 overflow-hidden w-full max-w-xl group transition-all duration-300 hover:scale-105 relative">
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="text-white drop-shadow-lg" size={24} />
            </div>
            <div className="aspect-[3/4] w-full bg-gradient-to-br from-[var(--color-light-pink)] to-[var(--color-lavender)] relative overflow-hidden">
                <img
                    src={photo.url}
                    alt="Candidate"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
            </div>
            <div className="p-4 flex justify-center bg-white/80">
                <GradientButton onClick={onClick} className="w-full">
                    Vote for This
                </GradientButton>
            </div>
        </GlassCard>
    );
};

export default VoteCard;
