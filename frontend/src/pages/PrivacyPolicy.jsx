import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-[#FFE5E5] to-[#FFF0F0] py-8 md:py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-coral)] transition-colors text-sm md:text-base font-semibold"
                >
                    <ArrowLeft size={20} />
                    Back
                </button>

                <GlassCard className="shadow-large p-6 md:p-10 lg:p-12">
                    <div className="text-center mb-10 md:mb-12">
                        <Shield className="mx-auto mb-5 text-[var(--color-coral)]" size={56} />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-[var(--color-text-secondary)] text-base md:text-lg">Last Updated: December 15, 2024</p>
                    </div>

                    <div className="space-y-8 md:space-y-10 text-[var(--color-text-primary)] max-w-4xl mx-auto">
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-coral)]">Introduction</h2>
                            <p className="leading-relaxed text-base md:text-lg">
                                Welcome to preferly. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy explains how we collect, use, and safeguard your information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-coral)]">Information We Collect</h2>
                            <p className="leading-relaxed text-base md:text-lg">We collect minimal information to provide our service:</p>
                            <ul className="list-disc list-inside space-y-3 ml-4 md:ml-6 text-base md:text-lg">
                                <li className="leading-relaxed">User ID for authentication</li>
                                <li className="leading-relaxed">Voting preferences (anonymized)</li>
                                <li className="leading-relaxed">Basic usage statistics</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-coral)]">How We Use Your Data</h2>
                            <ul className="list-disc list-inside space-y-3 ml-4 md:ml-6 text-base md:text-lg">
                                <li className="leading-relaxed">Authenticate users and prevent duplicate voting</li>
                                <li className="leading-relaxed">Calculate and maintain rankings</li>
                                <li className="leading-relaxed">Improve our platform</li>
                                <li className="leading-relaxed">Generate anonymous analytics</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-coral)]">Data Security</h2>
                            <p className="leading-relaxed text-base md:text-lg">
                                Your data is stored securely in encrypted databases. We use industry-standard security
                                measures to protect your information. User IDs are stored locally in your browser for convenience.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-coral)]">Your Rights</h2>
                            <ul className="list-disc list-inside space-y-3 ml-4 md:ml-6 text-base md:text-lg">
                                <li className="leading-relaxed">Access your voting history</li>
                                <li className="leading-relaxed">Request data deletion</li>
                                <li className="leading-relaxed">Opt out anytime</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-coral)]">Contact</h2>
                            <p className="leading-relaxed text-base md:text-lg">
                                Questions? Contact us at{' '}
                                <span className="text-[var(--color-coral)] font-semibold">privacy@preferly.app</span>
                            </p>
                        </section>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
