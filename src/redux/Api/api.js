import axios from 'axios';

axios.defaults.baseURL = 'https://watertracker-backend-2m5z.onrender.com/api';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Auth

export const signup = async credentials => {
  const { data } = await axios.post('/users/register', credentials);
  setToken(data.token);
  return data;
};

export const signin = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
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

export const editUserInfo = async userData => {
  const { data } = await axios.patch('/users/current', { userData });
  return data;
};

export const updateAvatar = async avatar => {
  const { data } = await axios.patch('/users/current', { avatar });
  return data;
};

export const refreshUser = () => {};

// Water

export const addWater = async ({ amount, date }) => {
  const { data } = await axios.post('/water', { amount, date });
  return data;
};

export const editWater = async ({ id, amount, date }) => {
  const { data } = await axios.put(`/water/${id}`, { amount, date });
  return data;
};

export const deleteWater = async waterID => {
  await axios.delete(`/water/${waterID}`);
};

export const fetchCurrentWater = async waterID => {
  const { data } = await axios.get(`/water/${waterID}`);
  return data;
};

export const fetchTodayWater = async () => {
  const { data } = await axios.get('/water/today');
  return data;
};

// year, month - string needed
export const fetchMonthWater = async ({ year, month }) => {
  const { data } = await axios.post(`/water/month`, { year, month });
  return data;
};
