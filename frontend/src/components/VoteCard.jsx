import React from 'react';
import GlassCard from './GlassCard';
import GradientButton from './GradientButton';
import { Sparkles, Loader2 } from 'lucide-react';

const VoteCard = ({ photo, onClick, isLoading = false }) => {
    return (
        <GlassCard className="p-0 overflow-hidden w-full max-w-xl group transition-all duration-300 hover:scale-105 relative">
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="text-white drop-shadow-lg" size={24} />
            </div>

            {/* Loading Overlay */}
            {isLoading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                        <Loader2 className="text-[var(--color-coral)] animate-spin" size={48} />
                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">Loading...</p>
                    </div>
                </div>
            )}

            <div className="aspect-[3/4] w-full bg-gradient-to-br from-[var(--color-light-pink)] to-[var(--color-lavender)] relative overflow-hidden">
                <img
                    src={photo.url}
                    alt="Candidate"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
            </div>
            <div className="p-4 flex justify-center bg-white/80">
                <GradientButton
                    onClick={onClick}
                    className="w-full"
                    disabled={isLoading}
                >
                    Vote for This
                </GradientButton>
            </div>
        </GlassCard>
    );
};

export default VoteCard;
