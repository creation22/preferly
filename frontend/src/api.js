
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getPhotoPair = async (year) => {
    const response = await api.get(`/photos/pair?year=${year}`);
    return response.data;
};

export const getSinglePhoto = async (year, excludeId) => {
    const response = await api.get(`/photos/single?year=${year}&exclude=${excludeId}`);
    return response.data;
};

export const submitVote = async (winnerId, loserId, erp, year) => {
    const response = await api.post('/votes/submit', {
        winnerId,
        loserId,
        erp,
        year,
    });
    return response.data;
};

export const getLeaderboard = async (year) => {
    const response = await api.get(`/photos/leaderboard?year=${year}`);
    return response.data;
};

export const registerUser = async (erp) => {
    const response = await api.post('/users/register', { erp });
    return response.data;
};

export default api;
