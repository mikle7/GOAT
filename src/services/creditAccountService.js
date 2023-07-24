import axios from 'axios';

const creditAccountService = {
  creditAccount: async (userId, bitsPackage) => {
    try {
      const response = await axios.post('/api/creditAccount', {
        userId,
        bitsPackage
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default creditAccountService;