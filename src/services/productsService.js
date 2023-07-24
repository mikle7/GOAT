import axios from 'axios';

const productsService = {
  createProduct: async (productData) => {
    try {
      const response = await axios.post('/api/products', productData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createCampaign: async (campaignData) => {
    try {
      const response = await axios.post('/api/campaigns', campaignData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createSpecialOffer: async (offerData) => {
    try {
      const response = await axios.post('/api/offers', offerData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default productsService;