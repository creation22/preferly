import React, { useState, useEffect } from 'react';
import LeaderboardTable from '../components/LeaderboardTable';
import EraSelector from '../components/EraSelector';
import { getLeaderboard } from '../api';

const LeaderboardPage = () => {
    const [year, setYear] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                setLoading(true);
                const data = await getLeaderboard(year);
                setPhotos(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, [year]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] bg-clip-text text-transparent">
                Leaderboard
            </h1>
            <EraSelector selectedYear={year} onSelectYear={setYear} />
            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <div className="font-semibold text-3xl animate-pulse text-[var(--color-purple)]">Loading...</div>
                </div>
            ) : (
                <LeaderboardTable photos={photos} />
            )}
        </div>
    );
};

export default LeaderboardPage;
