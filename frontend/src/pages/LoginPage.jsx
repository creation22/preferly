import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';

const LoginPage = ({ onLogin }) => {
    const [erp, setErp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (erp.trim()) {
            onLogin(erp.trim());
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-[#FFE5E5] to-[#FFF0F0] p-4">
            <GlassCard className="w-full max-w-md shadow-large">
                <div className="mb-6 md:mb-8 text-center pb-4 md:pb-6 border-b border-[var(--glass-border)]">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent mb-2 md:mb-3">
                        preferly
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
                        Join the fun and start rating!
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="erp" className="mb-2 block font-semibold text-[var(--color-text-primary)]">
                            Enter Your ID
                        </label>
                        <input
                            id="erp"
                            name="erp"
                            type="text"
                            required
                            className="w-full rounded-[var(--radius-sm)] border border-[var(--glass-border)] bg-white/50 p-4 font-medium placeholder:text-[var(--color-text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition-all"
                            placeholder="XXX-XXX"
                            value={erp}
                            onChange={(e) => setErp(e.target.value)}
                        />
                    </div>

                    <GradientButton type="submit" className="w-full">
                        Continue
                    </GradientButton>
                </form>
            </GlassCard>
        </div>
    );
};

export default LoginPage;
