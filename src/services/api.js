import axios from 'axios';

const API_URL = 'https://api.sportsbook-casino.com/';

export const getUserInfo = async (userId) => {
  return await axios.get(`${API_URL}users/${userId}`);
};

export const sendToast = async (toastMessage) => {
  return await axios.post(`${API_URL}toast`, { message: toastMessage });
};

export const sendSMS = async (smsMessage) => {
  return await axios.post(`${API_URL}sms`, { message: smsMessage });
};

export const creditAccount = async (userId, bitsPackage) => {
  return await axios.post(`${API_URL}users/${userId}/credit`, { package: bitsPackage });
};

export const getKYCDocuments = async (userId) => {
  return await axios.get(`${API_URL}users/${userId}/kyc`);
};

export const getFinance = async (userId) => {
  return await axios.get(`${API_URL}users/${userId}/finance`);
};

export const getActivity = async (userId) => {
  return await axios.get(`${API_URL}users/${userId}/activity`);
};

export const getSummary = async (userId) => {
  return await axios.get(`${API_URL}users/${userId}/summary`);
};

export const createProduct = async (productData) => {
  return await axios.post(`${API_URL}products`, productData);
};

export const createCampaign = async (campaignData) => {
  return await axios.post(`${API_URL}campaigns`, campaignData);
};

export const createSpecialOffer = async (offerData) => {
  return await axios.post(`${API_URL}offers`, offerData);
};

export const getGames = async () => {
  return await axios.get(`${API_URL}games`);
};

export const getAdminContent = async () => {
  return await axios.get(`${API_URL}admin`);
};