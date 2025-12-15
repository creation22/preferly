import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import { Heart, Sparkles } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
    const [erp, setErp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (erp.trim()) {
            onLogin(erp.trim());
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-[#FFE5E5] to-[#FFF0F0] p-4 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 opacity-20">
                <Heart size={60} className="text-[var(--color-coral)] animate-pulse" />
            </div>
            <div className="absolute bottom-20 right-20 opacity-20">
                <Sparkles size={50} className="text-[var(--color-purple)] animate-pulse" />
            </div>

            <GlassCard className="w-full max-w-lg shadow-large relative z-10">
                <div className="text-center mb-8 md:mb-10">
                    <div className="mb-6">
                        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent mb-4">
                            preferly
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-[var(--color-coral)]">
                            <Heart size={24} fill="currentColor" />
                            <Sparkles size={24} />
                            <Heart size={24} fill="currentColor" />
                        </div>
                    </div>
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-medium">
                        Discover who's the most preferred
                    </p>
                    <p className="text-sm md:text-base text-[var(--color-text-light)] mt-2">
                        Vote, compare, and see the rankings!
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="erp" className="mb-3 block text-center font-bold text-lg text-[var(--color-text-primary)]">
                            Enter Your ID to Start
                        </label>
                        <input
                            id="erp"
                            name="erp"
                            type="text"
                            required
                            className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-coral)]/30 bg-white/70 p-5 text-center text-lg font-semibold placeholder:text-[var(--color-text-light)] focus:outline-none focus:ring-4 focus:ring-[var(--color-coral)]/30 focus:border-[var(--color-coral)] transition-all"
                            placeholder="Enter your ID"
                            value={erp}
                            onChange={(e) => setErp(e.target.value)}
                        />
                    </div>

                    <GradientButton type="submit" className="w-full py-4 text-lg font-bold">
                        Let's Go! 🚀
                    </GradientButton>
                </form>

                <p className="text-center text-xs text-[var(--color-text-light)] mt-6">
                    Your ID is only used for voting. We respect your privacy.
                </p>
            </GlassCard>
        </div>
    );
};

export default LoginPage;
