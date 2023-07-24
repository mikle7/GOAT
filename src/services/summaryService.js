import axios from 'axios';

const viewSummary = async (userId) => {
  try {
    const response = await axios.get(`/api/summary/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error in fetching summary for user ${userId}: `, error);
    throw error;
  }
};

const viewBankCards = async (userId) => {
  try {
    const response = await axios.get(`/api/summary/${userId}/bankcards`);
    return response.data;
  } catch (error) {
    console.error(`Error in fetching bank cards for user ${userId}: `, error);
    throw error;
  }
};

const viewPlayStats = async (userId) => {
  try {
    const response = await axios.get(`/api/summary/${userId}/playstats`);
    return response.data;
  } catch (error) {
    console.error(`Error in fetching play stats for user ${userId}: `, error);
    throw error;
  }
};

const viewVIPReporting = async (userId) => {
  try {
    const response = await axios.get(`/api/summary/${userId}/vipreporting`);
    return response.data;
  } catch (error) {
    console.error(`Error in fetching VIP reporting for user ${userId}: `, error);
    throw error;
  }
};

const viewNotifications = async (userId) => {
  try {
    const response = await axios.get(`/api/summary/${userId}/notifications`);
    return response.data;
  } catch (error) {
    console.error(`Error in fetching notifications for user ${userId}: `, error);
    throw error;
  }
};

const viewLeagues = async (userId) => {
  try {
    const response = await axios.get(`/api/summary/${userId}/leagues`);
    return response.data;
  } catch (error) {
    console.error(`Error in fetching leagues for user ${userId}: `, error);
    throw error;
  }
};

const viewZendeskTickets = async (userId) => {
  try {
    const response = await axios.get(`/api/summary/${userId}/zendesktickets`);
    return response.data;
  } catch (error) {
    console.error(`Error in fetching Zendesk tickets for user ${userId}: `, error);
    throw error;
  }
};

export {
  viewSummary,
  viewBankCards,
  viewPlayStats,
  viewVIPReporting,
  viewNotifications,
  viewLeagues,
  viewZendeskTickets
};