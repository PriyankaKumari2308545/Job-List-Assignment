import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://learnkoods-task.onrender.com',
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const register = async (data) => {
  const response = await api.post('/user_api/', data);
  return response.data;
};

export const login = async (data) => {
  const response = await api.post('/login_api/', data);
  const token = response.data.data.access;
  Cookies.set('jwt_token', token);
  return response.data;
};

export const getUserData = async () => {
  const response = await api.get('/user_data/');
  return response.data;
};

export const getJobs = async (params) => {
  const response = await api.get('/job_api/', { params });
  return response.data;
};
