import axios from 'axios';

const userManagementService = {
  async displayAllUserInfo() {
    try {
      const response = await axios.get('/api/users');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async sendToast(message) {
    try {
      const response = await axios.post('/api/toast', { message });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async sendSMS(message) {
    try {
      const response = await axios.post('/api/sms', { message });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async creditAccount(userId, bitsPackage) {
    try {
      const response = await axios.post('/api/creditAccount', { userId, bitsPackage });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async viewKYCDocuments(userId) {
    try {
      const response = await axios.get(`/api/kycDocuments/${userId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default userManagementService;