import axios from 'axios';

const adminService = {
  getDynamicContent: async () => {
    try {
      const response = await axios.get('/api/dynamic-content');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  toggleFeature: async (featureId, status) => {
    try {
      const response = await axios.put(`/api/feature-toggles/${featureId}`, { status });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getUserTags: async (userId) => {
    try {
      const response = await axios.get(`/api/user-tags/${userId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default adminService;