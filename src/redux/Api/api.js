import axios from 'axios';

axios.defaults.baseURL = 'https://watertracker-backend-2m5z.onrender.com/api';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Auth

export const signup = async (email, password) => {
  const { data } = await axios.post('/users/register', { email, password });
  setToken(data.token);
  return data;
};

export const signin = async (email, password) => {
  const { data } = await axios.post('/users/login', { email, password });
  setToken(data.token);
  return data;
};

export const logout = async () => {
  await axios.post('/users/logout');
  unsetToken();
};

// User

export const updateWaterRate = async waterRate => {
  const { data } = await axios.patch('/users/rate', { waterRate });
  return data;
};

// Water

export const addWater = async (amount, date) => {
  const { data } = await axios.post('/water', { amount, date });
  return data;
};

export const editWater = async (waterID, amount, date) => {
  const { data } = await axios.put(`/water/${waterID}`, { amount, date });
  return data;
};

export const deleteWater = async waterID => {
  await axios.delete(`/water/${waterID}`);
};

export const fetchTodayWater = async () => {
  return await axios.get('/water/today');
};

export const fetchMonthWater = async (month, year) => {
  return await axios.get(`/water/month?month=${month}&year=${year}`);
};
