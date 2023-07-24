import axios from 'axios';

const gamesService = {
  pickSpecials: async (specialId) => {
    try {
      const response = await axios.get(`/api/games/specials/${specialId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  contests: async () => {
    try {
      const response = await axios.get('/api/games/contests');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  leagues: async () => {
    try {
      const response = await axios.get('/api/games/leagues');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default gamesService;