import axios from 'axios';

const sendSMS = async (smsId, smsMessage) => {
  try {
    const response = await axios.post('/api/sms', {
      id: smsId,
      message: smsMessage
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  sendSMS
};