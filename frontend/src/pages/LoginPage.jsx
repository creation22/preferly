import React, { useState } from "react";
import GlassCard from "../components/GlassCard";
import GradientButton from "../components/GradientButton";
import { Heart, Sparkles, Loader2 } from "lucide-react";

const LoginPage = ({ onLogin, isLoading = false }) => {
    const [erp, setErp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (erp.trim() && !isLoading) {
            onLogin(erp.trim());
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-[#FFF5F5] to-[#FDF2FF] px-4 overflow-hidden">

            {/* Decorative Icons */}
            <Heart
                className="absolute top-14 left-14 text-[var(--color-coral)] opacity-10"
                size={64}
            />
            <Sparkles
                className="absolute bottom-16 right-16 text-[var(--color-purple)] opacity-10"
                size={60}
            />

            <GlassCard className="w-full max-w-md p-8 md:p-10 shadow-xl relative z-10">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent">
                        preferly
                    </h1>

                    <div className="flex justify-center items-center gap-2 mt-3 text-[var(--color-coral)]">
                        <Heart size={18} fill="currentColor" />
                        <Sparkles size={18} />
                        <Heart size={18} fill="currentColor" />
                    </div>

                    <p className="mt-4 text-base text-[var(--color-text-secondary)]">
                        Discover who people prefer the most
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="erp"
                            className="block mb-2 text-sm font-semibold text-center text-[var(--color-text-primary)]"
                        >
                            Enter your ID
                        </label>

                        <input
                            id="erp"
                            type="text"
                            required
                            value={erp}
                            onChange={(e) => setErp(e.target.value)}
                            placeholder="Your college ID"
                            disabled={isLoading}
                            className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-coral)] transition disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <GradientButton
                        type="submit"
                        className="w-full py-3 text-base font-semibold"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <Loader2 className="animate-spin" size={20} />
                                <span>Logging in...</span>
                            </div>
                        ) : (
                            "Start Voting"
                        )}
                    </GradientButton>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-[var(--color-text-light)]">
                    Your ID is only used to prevent duplicate votes.
                </p>
            </GlassCard>
        </div>
    );
};

export default LoginPage;
