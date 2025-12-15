import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white py-6 md:py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 md:mb-6 flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-coral)] transition-colors text-sm md:text-base"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                <GlassCard className="shadow-large">
                    <div className="text-center mb-6 md:mb-8">
                        <Shield className="mx-auto mb-3 md:mb-4 text-[var(--color-coral)]" size={40} />
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent mb-2">
                            Privacy Policy
                        </h1>
                        <p className="text-[var(--color-text-secondary)] text-sm md:text-base">Last Updated: December 15, 2024</p>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-[var(--color-text-primary)]">
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[var(--color-coral)]">1. Information We Collect</h2>
                            <p className="mb-2 md:mb-3 text-sm md:text-base">
                                preferly collects minimal information to provide our rating service:
                            </p>
                            <ul className="list-disc list-inside space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
                                <li>User ID (ERP) for authentication and vote tracking</li>
                                <li>Voting data (anonymized)</li>
                                <li>Basic usage statistics</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[var(--color-coral)]">2. How We Use Your Information</h2>
                            <p className="mb-2 md:mb-3 text-sm md:text-base">We use the collected information to:</p>
                            <ul className="list-disc list-inside space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
                                <li>Authenticate users and prevent duplicate voting</li>
                                <li>Calculate and maintain Elo ratings</li>
                                <li>Improve our service and user experience</li>
                                <li>Generate anonymous analytics</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[var(--color-coral)]">3. Data Storage and Security</h2>
                            <p className="text-sm md:text-base">
                                Your data is stored securely in our database. We implement industry-standard security measures
                                to protect your information. User IDs are stored locally in your browser for convenience.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[var(--color-coral)]">4. Data Sharing</h2>
                            <p className="text-sm md:text-base">
                                We do not sell, trade, or share your personal information with third parties. Voting results
                                and leaderboard data are displayed publicly but are not linked to individual users.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[var(--color-coral)]">5. Cookies and Local Storage</h2>
                            <p className="text-sm md:text-base">
                                We use local storage to save your user ID for a seamless experience. No tracking cookies
                                are used on this platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[var(--color-coral)]">6. Your Rights</h2>
                            <p className="mb-2 md:mb-3 text-sm md:text-base">You have the right to:</p>
                            <ul className="list-disc list-inside space-y-1 md:space-y-2 ml-2 md:ml-4 text-sm md:text-base">
                                <li>Access your voting history</li>
                                <li>Request deletion of your data</li>
                                <li>Opt out of the service at any time</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[var(--color-coral)]">7. Changes to This Policy</h2>
                            <p className="text-sm md:text-base">
                                We may update this privacy policy from time to time. Any changes will be posted on this page
                                with an updated revision date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[var(--color-coral)]">8. Contact Us</h2>
                            <p className="text-sm md:text-base">
                                If you have any questions about this privacy policy or our practices, please contact us
                                through your institution's administration.
                            </p>
                        </section>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

