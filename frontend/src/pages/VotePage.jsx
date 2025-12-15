import React, { useState, useEffect, useCallback } from 'react';
import VoteCard from '../components/VoteCard';
import EraSelector from '../components/EraSelector';
import { getPhotoPair, getSinglePhoto, submitVote } from '../api';
import GradientButton from '../components/GradientButton';
import { ArrowLeftRight, RefreshCw, Loader2, Sparkles } from 'lucide-react';

const VotePage = ({ erp }) => {
    const [year, setYear] = useState(1);
    const [candidates, setCandidates] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingCard, setLoadingCard] = useState(null); // 'A' or 'B' or null
    const [error, setError] = useState(null);

    const fetchPair = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const pair = await getPhotoPair(year);
            setCandidates(pair);
        } catch (err) {
            console.error(err);
            setError('Failed to load data.');
        } finally {
            setLoading(false);
        }
    }, [year]);

    useEffect(() => {
        fetchPair();
    }, [fetchPair]);

    const handleVote = async (winner) => {
        if (!candidates) return;

        const loser = winner === 'A' ? 'B' : 'A';

        try {
            const winnerId = winner === 'A' ? candidates.A._id : candidates.B._id;
            const loserId = winner === 'A' ? candidates.B._id : candidates.A._id;
            const winnerPhoto = winner === 'A' ? candidates.A : candidates.B;

            // Set loading state for the losing card
            setLoadingCard(loser);

            // Submit vote
            await submitVote(winnerId, loserId, erp, year);

            // Fetch new photo to replace the loser (exclude the winner)
            const newPhoto = await getSinglePhoto(year, winnerId);

            // Update candidates: keep winner, replace loser
            if (winner === 'A') {
                setCandidates({ A: winnerPhoto, B: newPhoto });
            } else {
                setCandidates({ A: newPhoto, B: winnerPhoto });
            }
        } catch (err) {
            console.error('Vote failed', err);
            alert('Vote rejected. Please try again.');
            fetchPair();
        } finally {
            setLoadingCard(null);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <EraSelector selectedYear={year} onSelectYear={setYear} />

            {error ? (
                <div className="text-center mt-10 p-10 glass-card max-w-md mx-auto">
                    <p className="font-bold text-xl text-[var(--color-coral)] mb-4">{error}</p>
                    <GradientButton onClick={fetchPair} showIcon={false}>
                        <RefreshCw size={18} />
                        Retry Connection
                    </GradientButton>
                </div>
            ) : loading || !candidates ? (
                <div className="flex justify-center items-center h-96">
                    <div className="font-semibold text-3xl flex items-center gap-3 text-[var(--color-purple)]">
                        <Loader2 className="animate-spin" size={32} />
                        Loading...
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-12 px-4 max-w-6xl mx-auto">
                        <VoteCard
                            photo={candidates.A}
                            onClick={() => handleVote('A')}
                            isLoading={loadingCard === 'A'}
                        />
                        <div className="hidden lg:block glass-card p-6 rounded-full shadow-medium">
                            <div className="text-3xl font-bold bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent flex items-center gap-2">
                                <ArrowLeftRight className="text-[var(--color-coral)]" size={28} />
                                VS
                                <Sparkles className="text-[var(--color-purple)]" size={24} />
                            </div>
                        </div>
                        <VoteCard
                            photo={candidates.B}
                            onClick={() => handleVote('B')}
                            isLoading={loadingCard === 'B'}
                        />
                    </div>
                    {/* Mobile/Tablet VS Badge */}
                    <div className="flex lg:hidden justify-center mt-4">
                        <div className="glass-card px-6 py-3 rounded-full shadow-medium">
                            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent flex items-center gap-2">
                                <ArrowLeftRight className="text-[var(--color-coral)]" size={24} />
                                VS
                                <Sparkles className="text-[var(--color-purple)]" size={20} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default VotePage;