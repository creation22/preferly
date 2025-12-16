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
    const [loadingCard, setLoadingCard] = useState(null);
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

            setLoadingCard(loser);

            await submitVote(winnerId, loserId, erp, year);

            const newPhoto = await getSinglePhoto(year, winnerId);

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
        <div className="container mx-auto px-2 py-6">
            {/* Era Selector */}
            <EraSelector selectedYear={year} onSelectYear={setYear} />

            {/* Error */}
            {error ? (
                <div className="text-center mt-10 p-10 glass-card max-w-md mx-auto">
                    <p className="font-bold text-xl text-[var(--color-coral)] mb-4">
                        {error}
                    </p>
                    <GradientButton onClick={fetchPair} showIcon={false}>
                        <RefreshCw size={18} />
                        Retry
                    </GradientButton>
                </div>
            ) : loading || !candidates ? (
                /* Loading */
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="font-semibold text-3xl flex items-center gap-3 text-[var(--color-purple)]">
                        <Loader2 className="animate-spin" size={32} />
                        Loading...
                    </div>
                </div>
            ) : (
                <>
                    {/* ===== VOTE CARDS (MOBILE FIRST) ===== */}
                    <div className="flex flex-row justify-center items-center gap-2 md:gap-6 lg:gap-8 mt-6 md:mt-12 px-2 md:px-4 max-w-6xl mx-auto">
                        <VoteCard
                            photo={candidates.A}
                            onClick={() => handleVote('A')}
                            isLoading={loadingCard === 'A'}
                        />

                        <VoteCard
                            photo={candidates.B}
                            onClick={() => handleVote('B')}
                            isLoading={loadingCard === 'B'}
                        />
                    </div>

                    {/* ===== VS BADGE ===== */}
                    <div className="flex justify-center mt-4">
                        <div className="glass-card px-6 py-3 rounded-full shadow-medium">
                            <div className="text-2xl font-bold bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent flex items-center gap-2">
                                <ArrowLeftRight className="text-[var(--color-coral)]" size={22} />
                                VS
                                <Sparkles className="text-[var(--color-purple)]" size={18} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default VotePage;
