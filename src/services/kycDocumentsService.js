import axios from 'axios';

const kycDocumentsService = {
  viewKYCDocuments: async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}/kyc-documents`);
      return response.data;
    } catch (error) {
      console.error('Error fetching KYC documents', error);
      throw error;
    }
  },
};

export default kycDocumentsService;