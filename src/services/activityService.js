import axios from 'axios';

const activityService = {
  viewLogins: async (userId) => {
    const response = await axios.get(`/api/users/${userId}/logins`);
    return response.data;
  },
  viewTransactions: async (userId) => {
    const response = await axios.get(`/api/users/${userId}/transactions`);
    return response.data;
  },
  viewPicks: async (userId) => {
    const response = await axios.get(`/api/users/${userId}/picks`);
    return response.data;
  },
  viewContests: async (userId) => {
    const response = await axios.get(`/api/users/${userId}/contests`);
    return response.data;
  },
  viewBlackjack: async (userId) => {
    const response = await axios.get(`/api/users/${userId}/blackjack`);
    return response.data;
  },
  viewStudPoker: async (userId) => {
    const response = await axios.get(`/api/users/${userId}/studPoker`);
    return response.data;
  },
  viewHoldemPoker: async (userId) => {
    const response = await axios.get(`/api/users/${userId}/holdemPoker`);
    return response.data;
  },
  viewRoulette: async (userId) => {
    const response = await axios.get(`/api/users/${userId}/roulette`);
    return response.data;
  },
};

export default activityService;