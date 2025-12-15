import React from 'react';

const EraSelector = ({ selectedYear, onSelectYear }) => {
    const years = [1, 2, 3, 4];

    return (
        <div className="flex justify-center mb-8">
            <div className="glass-card inline-flex gap-3 p-2">
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={() => onSelectYear(year)}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedYear === year
                                ? 'bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-purple)] text-white shadow-medium scale-105'
                                : 'bg-white text-[var(--color-text-secondary)] hover:bg-gradient-to-r hover:from-[var(--color-light-pink)] hover:to-[var(--color-lavender)] hover:scale-105'
                            }`}
                    >
                        Year {year}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EraSelector;
