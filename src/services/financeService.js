import axios from 'axios';

const financeService = {
  viewFinance: async (userId) => {
    try {
      const response = await axios.get(`/api/finance/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error in fetching finance data: ${error}`);
    }
  },
  viewPurchases: async (userId) => {
    try {
      const response = await axios.get(`/api/finance/${userId}/purchases`);
      return response.data;
    } catch (error) {
      console.error(`Error in fetching purchases data: ${error}`);
    }
  },
  viewFreeClaims: async (userId) => {
    try {
      const response = await axios.get(`/api/finance/${userId}/freeClaims`);
      return response.data;
    } catch (error) {
      console.error(`Error in fetching free claims data: ${error}`);
    }
  },
  viewRedemptions: async (userId) => {
    try {
      const response = await axios.get(`/api/finance/${userId}/redemptions`);
      return response.data;
    } catch (error) {
      console.error(`Error in fetching redemptions data: ${error}`);
    }
  },
  viewPrizes: async (userId) => {
    try {
      const response = await axios.get(`/api/finance/${userId}/prizes`);
      return response.data;
    } catch (error) {
      console.error(`Error in fetching prizes data: ${error}`);
    }
  },
  viewCampaignOffers: async (userId) => {
    try {
      const response = await axios.get(`/api/finance/${userId}/campaignOffers`);
      return response.data;
    } catch (error) {
      console.error(`Error in fetching campaign offers data: ${error}`);
    }
  },
  viewProductOffers: async (userId) => {
    try {
      const response = await axios.get(`/api/finance/${userId}/productOffers`);
      return response.data;
    } catch (error) {
      console.error(`Error in fetching product offers data: ${error}`);
    }
  },
};

export default financeService;