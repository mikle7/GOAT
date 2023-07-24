import axios from 'axios';

const toastService = {
  sendToast: async (toastMessage) => {
    try {
      const response = await axios.post('/api/toast', { message: toastMessage });
      return response.data;
    } catch (error) {
      console.error(`Error sending toast: ${error}`);
      return null;
    }
  },
};

export default toastService;