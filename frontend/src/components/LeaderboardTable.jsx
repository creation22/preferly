import React from 'react';
import { Crown, Medal, Award, TrendingUp, TrendingDown } from 'lucide-react';

const LeaderboardTable = ({ photos }) => {
    const getRankIcon = (index) => {
        if (index === 0) return <Crown className="text-yellow-500" size={18} fill="currentColor" />;
        if (index === 1) return <Medal className="text-gray-400" size={16} />;
        if (index === 2) return <Award className="text-amber-600" size={16} />;
        return null;
    };

    return (
        <div className="overflow-x-auto rounded-[var(--radius-md)] shadow-soft bg-white -mx-4 sm:mx-0">
            <table className="min-w-full text-left border-collapse">
                <thead className="bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] text-white">
                    <tr>
                        <th className="px-3 md:px-6 py-3 md:py-4 font-bold tracking-wide text-sm md:text-lg rounded-tl-[var(--radius-md)]">
                            Rank
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-4 font-bold tracking-wide text-sm md:text-lg">
                            Photo
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-4 font-bold tracking-wide text-sm md:text-lg">
                            Elo
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-4 font-bold tracking-wide text-sm md:text-lg">
                            Wins
                        </th>
                        <th className="px-3 md:px-6 py-3 md:py-4 font-bold tracking-wide text-sm md:text-lg rounded-tr-[var(--radius-md)]">
                            Losses
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {photos.map((photo, index) => (
                        <tr
                            key={photo._id}
                            className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-[var(--color-light-pink)] hover:to-white transition-all duration-300 ${index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-cream)]'
                                }`}
                        >
                            <td className="px-3 md:px-6 py-3 md:py-4 font-bold text-base md:text-xl text-[var(--color-purple)]">
                                <div className="flex items-center gap-1 md:gap-2">
                                    {getRankIcon(index)}
                                    <span className="text-sm md:text-xl">#{index + 1}</span>
                                </div>
                            </td>
                            <td className="px-3 md:px-6 py-3 md:py-4">
                                <div className="h-16 w-12 md:h-20 md:w-16 rounded-[var(--radius-sm)] shadow-soft overflow-hidden bg-gradient-to-br from-[var(--color-light-pink)] to-[var(--color-lavender)]">
                                    <img
                                        src={photo.url}
                                        alt="Ranked"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </td>
                            <td className="px-3 md:px-6 py-3 md:py-4 font-semibold text-sm md:text-lg text-[var(--color-text-primary)]">
                                {Math.round(photo.elo)}
                            </td>
                            <td className="px-3 md:px-6 py-3 md:py-4 font-medium text-xs md:text-base text-[var(--color-text-secondary)]">
                                <div className="flex items-center gap-1">
                                    <TrendingUp size={14} className="text-green-500" />
                                    {photo.wins}
                                </div>
                            </td>
                            <td className="px-3 md:px-6 py-3 md:py-4 font-medium text-xs md:text-base text-[var(--color-text-secondary)]">
                                <div className="flex items-center gap-1">
                                    <TrendingDown size={14} className="text-red-400" />
                                    {photo.losses}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderboardTable;
