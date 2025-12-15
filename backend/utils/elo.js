// utils/elo.js
const calculateElo = (winnerRating, loserRating, kFactor = 32) => {
    const expectedScoreWinner = 1 / (1 + 10 ** ((loserRating - winnerRating) / 400));
    const expectedScoreLoser = 1 / (1 + 10 ** ((winnerRating - loserRating) / 400));

    const newWinnerRating = winnerRating + kFactor * (1 - expectedScoreWinner);
    const newLoserRating = loserRating + kFactor * (0 - expectedScoreLoser);

    return {
        winner: Math.round(newWinnerRating),
        loser: Math.round(newLoserRating),
    };
};


module.exports = calculateElo;

